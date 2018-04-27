import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

import {NotasServicios} from "../servicios/notas.servicios";
import { InicioPage } from '../pages/Inicio/Inicio';
import { DetalleNotaPage } from '../pages/detalle-nota/detalle-nota';
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

export const fireBaseConfig={
apiKey: "AIzaSyA9COxghIHgJCqOcev9I4rNt11I33ctxIo",
    authDomain: "devoirs-efd11.firebaseapp.com",
    databaseURL: "https://devoirs-efd11.firebaseio.com",
    projectId: "devoirs-efd11",
    storageBucket: "",
    messagingSenderId: "69980728743"};



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
  DetalleNotaPage,
  RegistroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),AngularFireDatabaseModule
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
  DetalleNotaPage,
    TabsPage
  ],
  providers: [
    FirebaseDbProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotasServicios
  ]
})
export class AppModule {}
