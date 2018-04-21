import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/Inicio/Inicio';
import { CarritoPage } from '../pages/Carrito/Carrito';
import { HorarioPage } from '../pages/Horario/Horario';
import { TabsPage } from '../pages/tabs/tabs';
import { GastosPage } from '../pages/Gastos/Gastos';
import { PerfilPage } from '../pages/Perfil/Perfil';
import { InicioSesionPage } from '../pages/InicioSesion/InicioSesion';
import { PrincipalPage } from '../pages/Principal/Principal';
import { RegistroPage } from '../pages/Registro/Registro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
  declarations: [
    MyApp,
  InicioPage,
  CarritoPage,
  HorarioPage,
  GastosPage,
  InicioSesionPage,
  PrincipalPage,
  PerfilPage,
  RegistroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  InicioPage,
  CarritoPage,
  HorarioPage,
  GastosPage,
  PrincipalPage,
  InicioSesionPage,
  RegistroPage,
  PerfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
