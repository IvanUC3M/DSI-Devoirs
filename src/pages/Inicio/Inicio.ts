import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {NotasServicios} from "../../servicios/notas.servicios";
import {DetalleNotaPage} from "../detalle-nota/detalle-nota";
import { TabsPage } from '../tabs/tabs';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'Inicio.html'
})
export class InicioPage {
date:any= new Date ();
daysInThisMonth: any;
daysInLastMonth: any;
daysInNextMonth: any;
monthNames: string[];
currentMonth: any;
currentYear: any;
currentDate: any;

  getDaysOfMonth() {
  this.daysInThisMonth = new Array();
  this.daysInLastMonth = new Array();
  this.daysInNextMonth = new Array
  this.monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', ' Dic'];
  this.currentMonth = this.monthNames[this.date.getMonth()];
  this.currentYear = this.date.getFullYear();
  if(this.date.getMonth() === new Date().getMonth()) {
    this.currentDate = new Date().getDate();
  } else {
    this.currentDate = 999;
  }

  var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
  var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
  for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
    this.daysInLastMonth.push(i);
  }

  var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
  for (var ii = 0; ii < thisNumOfDays; ii++) {
    this.daysInThisMonth.push(ii+1);
  }

  var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
  for (var iii = 0; iii < (6-lastDayThisMonth); iii++) {
    this.daysInNextMonth.push(iii+1);
  }
  var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
  if(totalDays<36) {
    for(var iiii = (7-lastDayThisMonth); iiii < ((7-lastDayThisMonth)+7); iiii++) {
      this.daysInNextMonth.push(iiii);
    }
  }
}
  goToLastMonth() {
  this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
  this.getDaysOfMonth();
}
goToNextMonth() {
  this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
  this.getDaysOfMonth();
}


notas=[];
listaNotas:any;

 @ViewChild('myNav') nav: NavController
constructor(public navCtrl: NavController, public navParams: NavParams, public notasServicio : NotasServicios, public dbFirebase:FirebaseDbProvider, private alertCtrl: AlertController) {
this.notas=notasServicio.getNotas();


}

public irDetalleNota(id){
	alert(id);
this.navCtrl.push(DetalleNotaPage,{id:id});

}
public crearNota(){
this.navCtrl.push(DetalleNotaPage,{id:0});
}
ionViewWillEnter()
{
	this.getDaysOfMonth();
}
needHelp(){
 let alert = this.alertCtrl.create({
   title: '¿Necesitas ayuda?',
   subTitle: 'Ayuda en página de Inicio',
   message:'¡Vaya! Parece que tienes problemas. En esta página podrás añadir, o editar notificaciones, que serán leidas por todos los integrantes de la vivienda. Para ello simplemente prueba a pulsar en una nota para editarla, o bien, en crear nota para crear una nueva nota. El botón crear nota te ofrecerá una serie de campos en los que podrás introducir, tanto tu mensaje, como la fecha en la que ha sido escrito. Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
   buttons: ['Dismiss']
 });
 alert.present();
}
ionViewDidEnter()
{
	this.dbFirebase.getNotas().subscribe(listaNotas=>{this.notas=listaNotas;
	});
}
}
