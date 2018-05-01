import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotasServicios} from "../../servicios/notas.servicios";
import {Nota} from "../../models/nota.model";
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
 
/**
 * Generated class for the DetalleNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-nota',
  templateUrl: 'detalle-nota.html',
})
export class DetalleNotaPage {
propietario: string;
descripcion: string;
nota={id:null, propietario:null, descripcion: null};
id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public notasServicio:NotasServicios, public dbFirebase:FirebaseDbProvider) {
    this.id=navParams.get("id");
    if(this.id!=0){
      this.nota=notasServicio.getNota(this.id);
    }
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad DetalleNotaPage');
  }
anadirNota (){

if(this.id!=0){
  this.notasServicio.editarNota(this.nota);
  alert("Nota editada con éxito");
  }
  else{
  this.nota.id=Date.now();
  this.notasServicio.crearNota(this.nota);
  alert("Nota creada con éxito");
    }
let datosnota:Nota=new Nota();
datosnota.id=this.nota.id;  
datosnota.propietario=this.nota.propietario;
datosnota.descripcion=this.nota.descripcion;
this.dbFirebase.guardaNota(datosnota);  
this.navCtrl.pop();
  }
eliminarNota(){
  this.notasServicio.eliminarNota(this.nota);
  this.dbFirebase.delNota(this.nota.id);  
  alert("Nota eliminada con éxito");
  this.navCtrl.pop();
}

}
