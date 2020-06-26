import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Gasto} from '../../models/gasto';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  //@ViewChild('myTable') myTable: MatTableModule;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  gasto: Gasto;
  gastos: Gasto[];

  constructor(
    
  ) { 
    this.gasto = new Gasto('',new Date(),null,'');
    //this.productos = [];
  }

  ngOnInit(): void {
    
  }

  agregarProducto(){    
    this.gasto = new Gasto(this.gasto.id,this.gasto.fecha,this.gasto.valor,this.gasto.concepto);
    console.log(this.gasto);
    this.gasto = new Gasto('',new Date(),null,'');
    //console.log(this.transactions);
    //console.log(this.transactions);
  }

}
