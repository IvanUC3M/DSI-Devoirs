import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Gasto} from "../../models/gasto.model";
import { AlertController } from 'ionic-angular';
import {Cliente} from "../../models/cliente.model";

@Component({
  selector: 'page-gastos',
  templateUrl: 'Gastos.html'
})
export class GastosPage {
	items:any[];
	listaClientes:any;
	elem: any;
	item: {id:null,concepto:null,gasto:null}
	concepto:any;
	gasto:any;
	listaGasto:any;
	clientId:any;
	
	constructor(public navCtrl: NavController,public params: NavParams,public dbFirebase:FirebaseDbProvider, private alertCtrl: AlertController)
	{
		this.items=[];
		this.clientId = this.params.get('id');
	}
	
	//Creamos un nuevo pago/gasto
	newitem(){
		var identificador = ""+Date.now();
		let datosgasto:Gasto=new Gasto();
		datosgasto.id=identificador;
		datosgasto.concepto=this.concepto;
		datosgasto.gasto=this.gasto;
		this.items.push(datosgasto);
		this.dbFirebase.guardaGastos(datosgasto);
	}
	
	//Sacamos datos de la base
	ionViewDidEnter()
	{
		this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
		this.dbFirebase.getGastos().subscribe(listaGasto=>{this.items=listaGasto;});
	}
	
	//Borramos un gasto
	borrarGasto(item){
		let index = this.items.indexOf(item);
		this.items.splice(index,1);
		this.dbFirebase.delGastos(item.id);
	}

	//Damos todos los gastos por pagados
	pagar(){
		let alert = this.alertCtrl.create({
			title: 'Confirmar Pagos',
			message: '',
			buttons: [
			{
				text: 'NO',
				role: 'cancel',
			},
			{
				text: 'SI',
				role: 'cancel',
				handler: () => {
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
							datoscliente.gasto=0;
							for(var ngastos in this.items){
								datoscliente.gasto=Number(this.listaClientes[llist].gasto)+Number(this.items[ngastos].gasto);
								this.dbFirebase.guardaCliente(datoscliente);
							}
						}
					}
					for(var igasto in this.items)
					{
					this.dbFirebase.delGastos(this.items[igasto].id);
					}
				}
			}
			]
		});
		alert.present();
	}
	
	//Función para abrir el mensaje de ayuda:
	needHelp()
	{
		 let alert = this.alertCtrl.create({
			   title: '¿Necesitas ayuda?',
			   message:'¡Vaya! Parece que tienes problemas.  En esta página podrás añadir gastos o pagos que se añadiran a tu cuenta cuando pulses "Confirmar Pagos"',
			   buttons: ['Cerrar']
		 });
		alert.present();
	}
}
