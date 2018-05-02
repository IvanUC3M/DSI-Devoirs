import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-inicio',
  templateUrl: 'InicioSesion.html'
})
export class InicioSesionPage {
  email: string;
  password: string;
  listaClientes:any;
  listaNotas:any;
  constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {

  }
  ionViewDidEnter()
  {
	  this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
	  
  }
  irApp(){
	  var list = this.listaClientes;
	  var notas = this.listaNotas;
	  var email = this.email;
	  var password = this.password;
	  for(var cliente in list)
	  {
		if(list[cliente].correo == email)
		{
				if(list[cliente].contraseña == password)
				{
					      this.navCtrl.push(TabsPage,{id:list[cliente].id});	//Hay que pasarle parametros
						  return;
				}
		}
	  }
	alert("Email o contraseña incorrectos");
    }
}
