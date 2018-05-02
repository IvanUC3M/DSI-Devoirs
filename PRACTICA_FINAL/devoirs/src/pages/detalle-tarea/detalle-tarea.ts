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
	fecha:null;
	persona:null;
	hora:null;
	actividad:null;
	tareas:any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams,public tareasServicio:TareasServicios, public dbFirebase:FirebaseDbProvider) 
	{
		this.id=navParams.get("id");
		if(this.id!=0){
		this.tarea=tareasServicio.getTarea(this.id);
		}
	}

	//Función para añadir una tarea o editar una tarea
	addTarea()
	{
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
		if(this.id!=0)
		{
			this.tareasServicio.editarTarea(this.tarea);
		}
		else
		{
			this.tarea.id=Date.now();
			this.tareasServicio.crearTarea(this.tarea);
		}
		let datostarea:Tarea=new Tarea();
		datostarea.id=this.tarea.id; 
		datostarea.persona=this.tarea.persona;
		datostarea.actividad=this.tarea.actividad;
		datostarea.fecha=this.tarea.fecha;
		datostarea.hora=this.tarea.hora;
		this.dbFirebase.guardaTarea(datostarea);   
		this.navCtrl.pop();
	}
	
	//Función para eliminar una tarea
	eliminarTarea(){
		this.tareasServicio.eliminarTarea(this.tarea);
		this.dbFirebase.delTarea(this.tarea.id);  
		this.navCtrl.pop();
	}
	
	//Función para obtener los datos de la base
	ionViewDidEnter()
	{
		this.dbFirebase.getTareas().subscribe(listaTareas=>{this.tareas=listaTareas;
			for(var nlist in this.tareas)
			{
				if(this.tareas[nlist].id==this.id)
				{
					this.fecha=this.tareas[nlist].fecha;
					this.actividad=this.tareas[nlist].actividad;
					this.persona=this.tareas[nlist].persona;
					this.hora=this.tareas[nlist].hora;
					this.tarea={id:this.id, persona:this.persona, actividad:this.actividad, hora: this.hora, fecha: this.fecha};
				}
			}
		});
	}
}
