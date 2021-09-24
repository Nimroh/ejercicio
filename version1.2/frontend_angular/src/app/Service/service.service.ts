import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto'; //se debe crear e importar

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //se debe agregar...
  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8088/url/listaproductos';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

}
