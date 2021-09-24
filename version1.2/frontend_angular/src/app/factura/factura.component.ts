import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
  }

  irANuevaFactura(){
    this.router.navigate(["nueva-factura"]);
  }

}
