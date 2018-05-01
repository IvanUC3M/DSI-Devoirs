import { Component } from '@angular/core';
import {CompraFinalPage} from "../compra-final/compra-final";
import {NavController, NavParams} from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Compra} from "../../models/carrito.model";
@Component({
  selector: 'page-carrito',
  templateUrl: 'Carrito.html'
})

export class CarritoPage {
  items: string[];
  elem: string;
  ident: string[];
  item: {id:null, compra:null}
  listaCompras:any;
  clientId:any;
  constructor(public navCtrl: NavController,public params: NavParams,public dbFirebase:FirebaseDbProvider){
    this.items = [];
	this.ident = [];
	this.clientId = this.params.get('id');
  }

  newitem(elem){
    this.items.push(elem.value);
	var identificador = ""+Date.now();
	this.ident.push(identificador);
    let datoscompra:Compra=new Compra();
	datoscompra.id=identificador;
	datoscompra.compra=elem.value;
	this.dbFirebase.guardaCompra(datoscompra);  
    
}

  allItems(){
	this.navCtrl.push(CompraFinalPage,{id:this.clientId});
}

borrarCompra(item){
	let index = this.items.indexOf(item);
	this.items.splice(index,1);
	this.dbFirebase.delCompra(this.ident[index]); 
}

ionViewDidEnter()
{
	this.dbFirebase.getCompras().subscribe(listaCompras=>{this.listaCompras=listaCompras;
		var list = this.listaCompras;
		this.items=[];
		for(var ncompra in list)
		{
			this.items.push(list[ncompra].compra);
			this.ident.push(list[ncompra].id);
		}
	});
}
}
