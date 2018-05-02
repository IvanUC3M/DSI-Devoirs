import { Component } from '@angular/core';
import {CompraFinalPage} from "../compra-final/compra-final";
import {NavController, NavParams} from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Compra} from "../../models/carrito.model";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-carrito',
  templateUrl: 'Carrito.html'
})

export class CarritoPage {
	items:any[];
	elem: any;
	item: {id:null, compra:null}
	listaCompras:any;
	clientId:any;
	constructor(public navCtrl: NavController,public params: NavParams,public dbFirebase:FirebaseDbProvider,private alertCtrl: AlertController){
		this.clientId = this.params.get('id');
	}

	newitem(elem){
		this.items.push(elem);
		var identificador = ""+Date.now();
		let datoscompra:Compra=new Compra();
		datoscompra.id=identificador;
		datoscompra.compra=elem.value;
		this.dbFirebase.guardaCompra(datoscompra);
	}
	
	//Función para realizar la compra
	allItems(){
		this.navCtrl.push(CompraFinalPage,{id:this.clientId});
	}
	
	//Función para eliminar un elemento de la lista
	borrarCompra(item){
		let index = this.items.indexOf(item);
		this.items.splice(index,1);
		this.dbFirebase.delCompra(item.id);
	}
	
	//Función para abrir la ayuda
	needHelp(){
	 let alert = this.alertCtrl.create({
	   title: '¿Necesitas ayuda?',
	   message:'¡Vaya! Parece que tienes problemas. En esta pagina podrás añadir o eliminar productos, además de marcarlos una vez obtenidos. Una vez realizada toda la compra selecciona "Compra realizada" para introducir gastos y completar la compra',
	   buttons: ['Dismiss']
	 });
	 alert.present();
	}

	ionViewDidEnter()
	{
		this.dbFirebase.getCompras().subscribe(listaCompras=>{this.items=listaCompras;
		});
	}
}
