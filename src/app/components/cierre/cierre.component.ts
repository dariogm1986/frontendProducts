import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Trabajador} from '../../models/trabajador';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cierre',
  templateUrl: './cierre.component.html',
  styleUrls: ['./cierre.component.css']
})
export class CierreComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  //@ViewChild('myTable') myTable: MatTableModule;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  trabajador: Trabajador;
  trabajadores: Trabajador[];

  constructor(
    
  ) { 
    this.trabajador = new Trabajador('','');
    //this.productos = [];
  }

  ngOnInit(): void {
    
  }

  agregarProducto(){
    
    this.trabajador = new Trabajador(this.trabajador.id,this.trabajador.nombre);
    console.log(this.trabajador);
    this.trabajador = new Trabajador('','');
    //console.log(this.transactions);
    //console.log(this.transactions);
  }

}
