import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TareasServicios} from "../../servicios/tareas.servicios";
import {Tarea} from "../../models/tarea.model";
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
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
tarea={id:null,fecha:null,actividad:null,persona:null,hora:null};
id:null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public tareasServicio:TareasServicios, public dbFirebase:FirebaseDbProvider) {
  this.id=navParams.get("id");
  if(this.id!=0){
      this.tarea=tareasServicio.getTarea(this.id);
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleTareaPage');
  }
 addTarea(){
   if(this.tarea.actividad == null)
   {
	alert("Introduce una actividad");  
	return;
   }
   if(this.tarea.fecha == null) 
   {
	alert("Introduce una fecha");
	return;	
   }
   if(this.id!=0){
     this.tareasServicio.editarTarea(this.tarea);
     alert("Tarea modificada");

   }else{
     this.tarea.id=Date.now();
     this.tareasServicio.crearTarea(this.tarea);
     alert("Tarea añadida al horario");
   }
    let datostarea:Tarea=new Tarea();
	datostarea.id=this.tarea.id; 
	datostarea.persona=this.tarea.persona;
	datostarea.actividad=this.tarea.actividad;
	datostarea.fecha=this.tarea.fecha;
	if(datostarea.fecha == null)
	{
		
	}
	datostarea.hora=this.tarea.hora;
	this.dbFirebase.guardaTarea(datostarea);   
	this.navCtrl.pop();
 }
 eliminartarea(){
   this.tareasServicio.eliminarTarea(this.tarea);
   alert("Se ha eliminado la tarea del horario");
   this.navCtrl.pop();
 }
}
