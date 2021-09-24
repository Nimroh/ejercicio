import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {

  productos:Producto[] | undefined;

  constructor(private service:ServiceService, private http: HttpClient, private router:Router) { }
  
  public getJSON():Observable<any>{
    return this.http.get("http://localhost:8088/url/listaproductos");
  }

  ngOnInit() {
    //this.service.getProductos().subscribe(data=>{
      this.getJSON().subscribe(data=>{
      this.productos=data;
    })
  }
}
