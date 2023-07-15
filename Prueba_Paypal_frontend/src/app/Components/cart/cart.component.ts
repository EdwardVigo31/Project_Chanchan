import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { CartItemModel } from 'src/app/models/cart-item-model';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';
import { StoregeService } from 'src/app/services/storege.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItemModel[] = [];
  total = 0;

  public payPalConfig?: IPayPalConfig;

  constructor(
    private messageService: MessageService,
    private storegeService: StoregeService
  ) {}

  ngOnInit(): void {
    this.initConfig();
    if (this.storegeService.existsCart()) {
      this.cartItems = this.storegeService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
  }

  getItem(): void {
    this.messageService.getMessage().subscribe((product: Product) => {
      let exists = false;

      this.cartItems.forEach((item) => {
        if (item.productId === product.id) {
          exists = true;
          item.qty++;
        }
      });

      if (!exists) {
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal();
      this.storegeService.setCart(this.cartItems);
    });
  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.qty * item.productPrice;
    });
    return +total.toFixed(2);
  }

  Cancelar(): void {
    this.cartItems = [];
    this.total = 0;
    this.storegeService.clear();
  }
  deleteItem(i: number): void {
    if (this.cartItems[i].qty > 1) {
      this.cartItems[i].qty--;
    } else {
      this.cartItems.splice(i, 1);
    }
    this.total = this.getTotal();
    this.storegeService.setCart(this.cartItems);
  }

  /*PAYPAL*/
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'EUR',
                value: '9.99',
                breakdown: {
                  item_total: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  getItemsList(): any[] {
    const items: any[] = [];
    let item = {};
    this.cartItems.forEach((it: CartItemModel) => {
      item = {
        name: it.productName,
        quantity: it.qty,
        unit_amount: { valur: it.productPrice, currency_code: 'USD' },
      };
      items.push(item);
    });
    return items;
  }
}
