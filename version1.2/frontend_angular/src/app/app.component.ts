import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Globaltek - Prueba Técnica';

  //se agrega el constructor
  //constructor(){}
  constructor(private router:Router){} //se agrega el parametro router:Router

  //aqui van los métodos que se llaman por boton
  //deben ser igual a app-routing.module.ts path
  irAFacturas(){
    this.router.navigate(["facturas"]);
  }

  irAProductos(){
    this.router.navigate(["producto"]);
  }
}
