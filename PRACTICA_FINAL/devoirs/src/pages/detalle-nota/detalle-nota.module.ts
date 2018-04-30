import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleNotaPage } from './detalle-nota';

@NgModule({
  declarations: [
    DetalleNotaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleNotaPage),
  ],
})
export class DetalleNotaPageModule {}
