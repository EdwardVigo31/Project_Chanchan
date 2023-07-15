import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BoletoComponent } from './Components/boleto/boleto.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductLisComponent } from './Components/product-lis/product-lis.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartItemComponent } from './Components/cart-item/cart-item.component';
import { ModalComponent } from './Components/modal/modal.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BoletoComponent,
    ProductItemComponent,
    ProductLisComponent,
    CartComponent,
    CartItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
