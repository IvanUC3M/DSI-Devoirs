import {Injectable} from "@angular/core";

@Injectable()
export class NotasServicios{
  notas=[]; 

  public getNotas(){
return this.notas;
}

public getNota(id){
  return this.notas.filter(function(e, i){return e.id==id})[0] || {id:null, propietario:null,descripcion:null};
}
public crearNota(nota){
this.notas.splice(0,0,nota);
}

public editarNota(nota){
  for(let i=0;i<this.notas.length;i++){
    if(this.notas[i]==nota){
    this.notas[i]=nota;
    }
  }
}
public eliminarNota(nota){
 for(let i=0;i<this.notas.length;i++){
    if(this.notas[i]==nota){
     this.notas.splice(i,1);
    }
  }
}



}
