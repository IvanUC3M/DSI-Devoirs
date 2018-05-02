import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TareasServicios} from "../../servicios/tareas.servicios";
import {DetalleTareaPage} from "../detalle-tarea/detalle-tarea";
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-horario',
  templateUrl: 'Horario.html'
})
export class HorarioPage {
	tareas=[];
	listaTareas:any;
	aux:any;
	
	@ViewChild('myNav') nav: NavController
	constructor(public navCtrl: NavController,public tareasServicio:TareasServicios,public dbFirebase:FirebaseDbProvider,private alertCtrl: AlertController) 
	{
		this.tareas=tareasServicio.getTareas();
	}
	
	//Función para llegar a la pagina en la que se crea/edita una nota para editarla
	public irDetalleTarea(id)
	{
		this.navCtrl.push(DetalleTareaPage,{id:id});
	}
	
	//Función para llegar a la pagina en la que se crea/edita una nota para crearla
	public crearTarea()
	{
		this.navCtrl.push(DetalleTareaPage,{id:0});
	}
	
	//Función para desplegar la ayuda
	needHelp()
	{
		let alert = this.alertCtrl.create({
			title: '¿Necesitas ayuda?',
			message:'¡Vaya! Parece que tienes problemas. En esta pagina podrás ver las distintas tareas que tiene asignado cada miembro y su fecha y hora de realización, puedes editar estas tareas pulsando en ellas', 
			buttons: ['Dismiss']
		});
		alert.present();
	}

	ionViewDidEnter()
	{
		this.dbFirebase.getTareas().subscribe(listaTareas=>{this.tareas=listaTareas;
		});
	}
}
