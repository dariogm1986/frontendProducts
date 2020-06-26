import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {UnidadMedida} from '../../models/unidadmedida';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  //@ViewChild('myTable') myTable: MatTableModule;

  unidadmedida: UnidadMedida;
  unidadesmedidas: UnidadMedida[];

  constructor(
    
  ) { 
    this.unidadmedida = new UnidadMedida('','');
    //this.productos = [];
  }

  ngOnInit(): void {
    
  }

  agregarProducto(){
    
    this.unidadmedida = new UnidadMedida(this.unidadmedida.id,this.unidadmedida.unidad_medida);
    console.log(this.unidadmedida);
    this.unidadmedida = new UnidadMedida('','');
    //console.log(this.transactions);
    //console.log(this.transactions);
  }

}
