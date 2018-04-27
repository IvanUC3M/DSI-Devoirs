import {Injectable} from "@angular/core";

@Injectable()
export class NotasServicios{
  notas=[
    {id:1, propietario:"Nota 1", descripcion:"Descripcion 1"},
    {id:2, propietario:"Nota 2", descripcion:"Descripcion 2"},
    {id:3, propietario:"Nota 3", descripcion:"Descripcion 3"}
  ];

  public getNotas(){
return this.notas;
}

public getNota(id){
  return this.notas.filter(function(e, i){return e.id==id})[0] || {id:null, propietario:null,descripcion:null};
}
public crearNota(nota){
this.notas.push(nota);
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
