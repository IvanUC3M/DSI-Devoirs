import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TareasServicios} from "../../servicios/tareas.servicios";
/**
 * Generated class for the DetalleTareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-tarea',
  templateUrl: 'detalle-tarea.html',
})
export class DetalleTareaPage {
tarea={id:null,fecha:null,actividad:null,persona:null};
id:null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public tareasServicio:TareasServicios) {
  this.id=navParams.get("id");
  if(this.id!=0){
      this.tarea=tareasServicio.getTarea(this.id);
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleTareaPage');
  }
 addTarea(){
   if(this.id!=0){
     this.tareasServicio.editarTarea(this.tarea);
     alert("Tarea modificada");

   }else{
     this.tarea.id=Date.now();
     this.tareasServicio.crearTarea(this.tarea);
     alert("Tarea añadida al horario");

   }
   this.navCtrl.pop();
 }
 eliminarNota(){
   this.tareasServicio.eliminarTarea(this.tarea);
   alert("Se ha eliminado la tarea del horario");
   this.navCtrl.pop();
 }
}
