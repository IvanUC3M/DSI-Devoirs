import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-gastos',
  templateUrl: 'Gastos.html'
})
export class GastosPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
}
    needHelp(){
     let alert = this.alertCtrl.create({
       title: '¿Necesitas ayuda?',
       subTitle: 'Ayuda en página Gastos',
       message:'¡Vaya! Parece que tienes problemas.TEXTO A RELLENAR Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
       buttons: ['Dismiss']
     });
     alert.present();
   }

}
