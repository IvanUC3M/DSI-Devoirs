import {Injectable} from "@angular/core";

@Injectable()
export class NotasServicios{
	notas=[]; 

	//Función para coger las notas
	public getNotas(){
		return this.notas;
	}

	//Función para coger una nota especifica
	public getNota(id){
	  return this.notas.filter(function(e, i){return e.id==id})[0] || {id:null, propietario:null,descripcion:null};
	}
	
	//Función para crear una nota
	public crearNota(nota){
		this.notas.splice(0,0,nota);
	}

	//Función para editar una nota
	public editarNota(nota){
	  for(let i=0;i<this.notas.length;i++){
		if(this.notas[i]==nota){
			this.notas[i]=nota;
		}
	  }
	}
	
	//Función para actualizar una nota
	public updateNotas(nnotas){
	  this.notas=nnotas;
	}
	
	//Función para eliminar una nota
	public eliminarNota(nota){
	 for(let i=0;i<this.notas.length;i++){
		if(this.notas[i]==nota){
		 this.notas.splice(i,1);
		}
	  }
	}



}
