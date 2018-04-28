import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TareasServicios} from "../../servicios/tareas.servicios";
import {DetalleTareaPage} from "../detalle-tarea/detalle-tarea";
@Component({
  selector: 'page-horario',
  templateUrl: 'Horario.html'
})
export class HorarioPage {
  tareas=[];
  aux:any;
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController,public tareasServicio:TareasServicios) {
    this.tareas=tareasServicio.getTareas();
  }
public irDetalleTarea(id){
  this.navCtrl.push(DetalleTareaPage,{id:id});
}
public crearTarea(){
  this.navCtrl.push(DetalleTareaPage,{id:0});
}

}
