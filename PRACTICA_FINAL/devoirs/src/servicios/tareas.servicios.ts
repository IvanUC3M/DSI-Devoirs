import {Injectable} from "@angular/core";

@Injectable()
export class TareasServicios{

  tareas=[
  ];
public getTareas(){
return this.tareas;
}
public getTarea(id){
  return this.tareas.filter(function(e,i){return e.id==id})[0]||{id:null,fecha:null,actividad:null,persona:null};
}
public crearTarea(tarea){
  for(var itarea = 0; itarea < this.tareas.length; itarea++)	
  {
	if(tarea.fecha < this.tareas[itarea].fecha)
	{
	  this.tareas.splice(itarea,0,tarea);
	  return;
	}
	if(tarea.fecha == this.tareas[itarea].fecha)
	{
	  if(tarea.hora == null || tarea.hora < this.tareas[itarea].fecha)
	  {
	    this.tareas.splice(itarea,0,tarea);
		return;
	  }
	}
  }
  this.tareas.push(tarea);
}
public editarTarea(tarea){
  this.eliminarTarea(tarea);
  this.crearTarea(tarea);
}
public eliminarTarea(tarea){
  for(let i=0;i<this.tareas.length;i++){
    if(this.tareas[i].id==tarea.id){
      this.tareas.splice(i,1);
    }
  }
}

}
