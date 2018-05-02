import { Component } from '@angular/core';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {CarritoPage} from "../Carrito/Carrito";
import {NavController, NavParams} from 'ionic-angular';
import {Cliente} from "../../models/cliente.model";
/**
 * Generated class for the CompraFinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-compra-final',
  templateUrl: 'compra-final.html',
})
export class CompraFinalPage {
  compra: any;
  listaClientes:any;
  listaCompras:any;
  clientId:any;
  constructor(public navCtrl: NavController,public params: NavParams, public dbFirebase:FirebaseDbProvider) {
	  	this.clientId = this.params.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraFinalPage');
  }
ionViewDidEnter()
 {
	  this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
	  this.dbFirebase.getCompras().subscribe(listaCompras=>{this.listaCompras=listaCompras;});
	  
 }
completarCompra(){
    let datoscliente:Cliente=new Cliente();
	for(var llist in this.listaClientes)
	{
		if(this.listaClientes[llist].id == this.clientId)
		{
			 datoscliente.id=this.listaClientes[llist].id;
			 datoscliente.nombre=this.listaClientes[llist].nombre;
			 datoscliente.contraseña=this.listaClientes[llist].contraseña;
			 datoscliente.correo=this.listaClientes[llist].correo;
			 datoscliente.direccion=this.listaClientes[llist].direccion;
			 datoscliente.gasto=Number(this.listaClientes[llist].gasto)+Number(this.compra);
			 this.dbFirebase.guardaCliente(datoscliente);
			 
		}
	}
	for(var icompra in this.listaCompras)
	{
			this.dbFirebase.delCompra(this.listaCompras[icompra].id); 
	}
	this.navCtrl.pop();
}
}
