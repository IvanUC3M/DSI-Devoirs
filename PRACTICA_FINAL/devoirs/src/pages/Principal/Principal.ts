import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InicioSesionPage} from '../InicioSesion/InicioSesion';
import {RegistroPage} from '../Registro/Registro';

@Component({
  selector: 'page-principal',
  templateUrl: 'Principal.html'
})
export class PrincipalPage {
	constructor(public navCtrl: NavController) 
	{

	}
	//Función para ir a la pagina de inicio sesión
	irSesion(){
		this.navCtrl.push(InicioSesionPage);
	}

	//Función para ir a la pagina de registro
	irRegistrarse(){
		this.navCtrl.push(RegistroPage);
	}
}
