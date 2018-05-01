import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TareasServicios} from "../../servicios/tareas.servicios";
import {DetalleTareaPage} from "../detalle-tarea/detalle-tarea";
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-horario',
  templateUrl: 'Horario.html'
})
export class HorarioPage {
  tareas=[];
  listaTareas:any;
  aux:any;
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController,public tareasServicio:TareasServicios,public dbFirebase:FirebaseDbProvider) {
    this.tareas=tareasServicio.getTareas();
  }
public irDetalleTarea(id){
  this.navCtrl.push(DetalleTareaPage,{id:id});
}
public crearTarea(){
  this.navCtrl.push(DetalleTareaPage,{id:0});
}

ionViewDidEnter()
{
	this.dbFirebase.getTareas().subscribe(listaTareas=>{this.tareas=listaTareas;
	});
}
}
