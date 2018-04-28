//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {Cliente} from '../../models/cliente.model';
import {Nota} from '../../models/nota.model';
/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
  }

  guardaCliente(cliente:Cliente)
  {
	  if (cliente.id=='') {cliente.id=""+Date.now();}
	  return this.afDB.database.ref('clientes/'+cliente.id).set(cliente);
  }

  private clientesRef=this.afDB.list<Cliente>('clientes');

  getClientes()
  {
        return this.clientesRef.valueChanges();
  }

  delCliente(id)
  {
	  this.afDB.database.ref('clientes/'+id).remove();
  }
  
  guardaNota(nota:Nota)
  {
	  if (nota.id=='') {nota.id=""+Date.now();}
	  return this.afDB.database.ref('notas/'+nota.id).set(nota);
  }
  
  delNota(id)
  {
	  this.afDB.database.ref('notas/'+id).remove();
  }
  
  private notasRef=this.afDB.list<Nota>('notas');
  
  getNotas()
  {
	 return this.notasRef.valueChanges();
  }


}
