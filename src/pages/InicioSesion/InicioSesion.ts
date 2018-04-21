import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-inicio',
  templateUrl: 'InicioSesion.html'
})
export class InicioSesionPage {

  constructor(public navCtrl: NavController) {

  }
  irApp(){
      this.navCtrl.push(TabsPage);
    }
}
