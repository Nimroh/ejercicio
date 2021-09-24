import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './factura/factura.component';
import { ProductoComponent } from './producto/producto.component';
import { NuevaFacturaComponent } from './nueva-factura/nueva-factura.component';

import { FormsModule }from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule }from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    ProductoComponent,
    NuevaFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
