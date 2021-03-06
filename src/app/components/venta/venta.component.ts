import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {Product} from '../../models/product';
import {Venta} from '../../models/venta';
import { MatTable, MatTableModule } from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}

export interface Transaction {
  codigo: string;
  descripcion:string;
  unidad_medida:string;
  cantidad:number;
  cost: number;
  comision:number;
  importe:number;
}

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  //@ViewChild('myTable') myTable: MatTableModule;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  displayedColumns = ['codigo', 'descripcion', 'unidad_medida','cantidad','cost', 'comision','importe', 'accion'];
  transactions: Venta[] = [];
  /*transactions: Transaction[] = [
    {codigo: 'Beach ball', descripcion:'desc', unidad_medida:'unidad', cantidad:4, cost: 4, importe:4},
    {codigo: 'Towel', descripcion:'desc', unidad_medida:'unidad', cantidad:4, cost: 5, importe:4},
    {codigo: 'Frisbee', descripcion:'desc', unidad_medida:'unidad', cantidad:4, cost: 2, importe:4},
    {codigo: 'Sunscreen', descripcion:'desc', unidad_medida:'unidad', cantidad:4, cost: 4, importe:4},
    {codigo: 'Cooler', descripcion:'desc', unidad_medida:'unidad', cantidad:4, cost: 25, importe:4},
    {codigo: 'Swim suit', descripcion:'desc', unidad_medida:'unidad', cantidad:4, cost: 35, importe:4},
  ];*/
/*
  codigo:String;
  descripcion:String;
  unidad_medida:String;
  cantidad:Number;
  precio:Number;
  */
  producto: Product;
  venta: Venta;
  productos: Product[];

  constructor(
    
  ) { 
    this.producto = new Product('','','','',null,null,null);
    this.venta = new Venta('','','','',null,null,null,null);
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.importe).reduce((acc, value) => Number(acc) + Number(value), 0);
  }

  /** Gets the total cost of all transactions. */
  getTotalCom() {
    return this.transactions.map(t => t.comision).reduce((acc, value) => Number(acc) + Number(value), 0);
  }

  agregarProducto(){
    let importe = Number(this.venta.cantidad)*Number(this.venta.precio);
    let comision = Number(this.venta.cantidad)*Number(this.venta.comision);
    let venta = new Venta(this.venta.id,this.venta.codigo,this.venta.descripcion,this.venta.unidad_medida,this.venta.cantidad,this.venta.precio,comision,importe);
    this.transactions.push(venta);
    this.table.renderRows();
    this.venta = new Venta('','','','',null,null,null,null);
    //console.log(this.transactions);
    //console.log(this.transactions);
  }

  eliminarFila(fila: number){
    this.transactions.splice(fila, 1);
    this.table.renderRows();
    //console.log(fila);
  }

}
