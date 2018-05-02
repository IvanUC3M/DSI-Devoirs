import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InicioSesionPage} from '../InicioSesion/InicioSesion';
import {RegistroPage} from '../Registro/Registro';

@Component({
  selector: 'page-principal',
  templateUrl: 'Principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {

  }
irSesion(){
    this.navCtrl.push(InicioSesionPage);
  }

irRegistrarse(){
  this.navCtrl.push(RegistroPage);
}

}
