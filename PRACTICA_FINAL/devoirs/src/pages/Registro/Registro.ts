import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../Principal/Principal';
import {Cliente} from '../../models/cliente.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';


@Component({
  selector: 'page-registro',
  templateUrl: 'Registro.html'
})
export class RegistroPage {
 name: string;
 password: string;
 email: string;
 secondpassword: string;
 address: string;
 checkbox: string;
 constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider, /*public name: String, public password: String, public email: String, public address: String, public secondpassword: String, public checkbox: Number*/) {
}
  irPrincipal(){
	  let datoscliente:Cliente=new Cliente();
	  datoscliente.id=""+Date.now();
	  datoscliente.nombre=this.name;
	  datoscliente.contraseña=this.password;
	  datoscliente.correo=this.email;
	  datoscliente.direccion=this.address;
	  datoscliente.gasto=0;
	  var contraseña2 = this.secondpassword;
	  var comprobacion = this.checkbox;
	  if(!datoscliente.nombre || !datoscliente.correo || !datoscliente.contraseña || !datoscliente.direccion || !contraseña2 )
	  {
		  alert("Por favor, rellene todos los datos");
		  return;
	  }
	  if(!comprobacion)
	  {
		  alert("Por favor, acepte las condiciones para continuar");
		  return;
	  }
	  if(datoscliente.contraseña != contraseña2)
	  {
		  alert("Las contraseñas no coinciden");
		  return;
	  }
	  this.dbFirebase.guardaCliente(datoscliente)
	  this.navCtrl.push(PrincipalPage);

    }
}
