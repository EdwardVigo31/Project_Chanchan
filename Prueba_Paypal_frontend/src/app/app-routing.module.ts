import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletoComponent } from './Components/boleto/boleto.component';

const routes: Routes = [

  { path:'',component:BoletoComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
