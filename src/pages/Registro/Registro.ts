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
 constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {
}
  irPrincipal(){
	  let datoscliente:Cliente=new Cliente();
	  datoscliente.id=""+Date.now();
	  datoscliente.nombre=this.name;
	  datoscliente.contraseña=this.password;
	  datoscliente.correo=this.email;
	  datoscliente.direccion=this.address;
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
