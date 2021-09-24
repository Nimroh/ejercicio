import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura/factura.component';
import { NuevaFacturaComponent } from './nueva-factura/nueva-factura.component';
import { ProductoComponent } from './producto/producto.component';

//se agregan los componentes
const routes: Routes = [
  {path:'facturas', component:FacturaComponent},
  {path:'producto', component:ProductoComponent},
  {path:'nueva-factura', component:NuevaFacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
