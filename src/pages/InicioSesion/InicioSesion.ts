import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {Cliente} from '../../models/cliente.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-inicio',
  templateUrl: 'InicioSesion.html'
})
export class InicioSesionPage {

  constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {

  }
  listaClientes:any;
  irApp(){
      this.navCtrl.push(TabsPage);
    }
}
