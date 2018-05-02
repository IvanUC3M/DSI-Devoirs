import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Cliente} from "../../models/cliente.model";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'Perfil.html'
})

export class PerfilPage {
	listaClientes:any;
	clientId:any;
	nombre:any;
	email:any;
	residencia:any;
	gastos:any;
	
	constructor(public navCtrl: NavController,public params: NavParams,public dbFirebase:FirebaseDbProvider, private alertCtrl: AlertController) 
	{
		this.clientId = this.params.get('id');
	}

	//Función para obtener los datos de la base
	ionViewDidEnter()
	{
		this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;
			var list = this.listaClientes;
			for(var icliente in list)
			{
				if(this.clientId == list[icliente].id)
				{
					this.nombre = list[icliente].nombre;
					this.email = list[icliente].correo;
					this.residencia = list[icliente].direccion;
					this.gastos = list[icliente].gasto;
					return;
				}
			}
		});
	}

	//Función para desplegar ayuda
	needHelp(){
		let alert = this.alertCtrl.create({
			title: '¿Necesitas ayuda?',
			subTitle: 'Ayuda en página Perfil',
			message:'¡Vaya! Parece que tienes problemas. En esta página podrás ver los datos de tu perfil además del gasto acumulado hasta el momento. Si algún campo es incorrecto, o ha sido actualizado, podrás modificarlo pulsando Modificar campos.',
			buttons: ['Dismiss']
		});
		alert.present();
	}
	
	//Función para editar el perfil
	editarPerfil() {
		let alert = this.alertCtrl.create({
			title: 'Edita tus datos',
			inputs: [
			{
				name: 'nombre',
				placeholder: this.nombre,
			},
			{
				name: 'email',
				placeholder: this.email,
			},
			{
				name: 'direccion',
				placeholder: this.residencia,
			}
			],
			buttons: [
			{
				text: 'Cancelar',
				role: 'cancel',
				handler: data => {
			}
			},
			{
				text: 'Confirmar',
				handler: data => {
				var list = this.listaClientes;
				let datoscliente:Cliente=new Cliente();
			for(var icliente in list)
			{
				if(this.clientId == list[icliente].id)
				{
					datoscliente.id=list[icliente].id;
					if(data.nombre == null)
					{
						datoscliente.nombre=list[icliente].nombre;
					}
					else
					{
						datoscliente.nombre=data.nombre;
					}
					datoscliente.contraseña=list[icliente].contraseña;
					if(data.email == null)
					{
						datoscliente.correo=list[icliente].correo;
					}
					else
					{
						datoscliente.correo=data.email;
					}
					if(data.direccion == null)
					{
						datoscliente.direccion=list[icliente].direccion;
					}
					else
					{
						datoscliente.direccion=data.direccion;
					}
					datoscliente.gasto=list[icliente].gasto;
				}
			}
			this.dbFirebase.guardaCliente(datoscliente);
			}
			}
			]
		});
		alert.present();
	}
}
