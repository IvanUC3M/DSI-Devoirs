import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';
import { InicioPage } from '../Inicio/Inicio';
import { CarritoPage } from '../Carrito/Carrito';
import { HorarioPage } from '../Horario/Horario';
import { GastosPage } from '../Gastos/Gastos';
import { PerfilPage } from '../Perfil/Perfil';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
	parametros: any;
  constructor(public params: NavParams) {
	  this.params = params;
		this.parametros = this.params.data;
  }
  tab1Root = InicioPage;
  tab2Root = HorarioPage;
  tab3Root = CarritoPage;
  tab4Root = GastosPage;
  tab5Root = PerfilPage;
}
