import {Injectable} from "@angular/core";

@Injectable()
export class TareasServicios{

  tareas=[
    {id:1,fecha:"11/10/17",actividad:"Actividad 1",persona:"Borja"},
    {id:2,fecha:"11/10/17",actividad:"Actividad 2",persona:"Juan"},
    {id:3,fecha:"12/10/17",actividad:"Actividad 3",persona:"Pepe"},
    {id:4,fecha:"13/10/17",actividad:"Actividad 4",persona:"Eugenio"}
  ];
public getTareas(){
return this.tareas;
}
public getTarea(id){
  return this.tareas.filter(function(e,i){return e.id==id})[0]||{id:null,fecha:null,actividad:null,persona:null};
}
public crearTarea(tarea){
  this.tareas.push(tarea);
}
public editarTarea(tarea){
  for(let i=0;i<this.tareas.length;i++){
    if(this.tareas[i].id==tarea.id){
      this.tareas[i]=tarea;
    }
  }
}
public eliminarTarea(tarea){
  for(let i=0;i<this.tareas.length;i++){
    if(this.tareas[i].id==tarea.id){
      this.tareas.splice(i,1);
    }
  }
}

}
