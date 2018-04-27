webpackJsonp([0],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InicioSesion_InicioSesion__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Registro_Registro__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PrincipalPage.prototype.irSesion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__InicioSesion_InicioSesion__["a" /* InicioSesionPage */]);
    };
    PrincipalPage.prototype.irRegistrarse = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Registro_Registro__["a" /* RegistroPage */]);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\Principal\Principal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Principal\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="bg-principal">\n  <div>\n  <img src="../assets/imgs/devoirs.png" align="center">\n</div>\n\n<button ion-button (click)="irSesion()" round color="secondary">\n  Iniciar sesión\n</button>\n\n <p class ="texto">\n<b>¿No conoces Devoirs?</b>\n</p>\n\n<p class ="texto">\n<b>Registrate gratis y organiza tus tareas del hogar</b>\n</p>\n<button ion-button (click)="irRegistrarse()" round>\n  Registrarse\n</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\Principal\Principal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=Principal.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseDbProvider = /** @class */ (function () {
    function FirebaseDbProvider(afDB) {
        this.afDB = afDB;
        this.clientesRef = this.afDB.list('clientes');
        console.log('Hello FirebaseDbProvider Provider');
    }
    FirebaseDbProvider.prototype.guardaCliente = function (cliente) {
        if (cliente.id == '') {
            cliente.id = "" + Date.now();
        }
        return this.afDB.database.ref('clientes/' + cliente.id).set(cliente);
    };
    FirebaseDbProvider.prototype.getClientes = function () {
        return this.clientesRef.valueChanges();
    };
    FirebaseDbProvider.prototype.delCliente = function (id) {
        this.afDB.database.ref('clientes/' + id).remove();
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioSesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioSesionPage = /** @class */ (function () {
    function InicioSesionPage(navCtrl, dbFirebase) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
    }
    InicioSesionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (listaClientes) { _this.listaClientes = listaClientes; });
    };
    InicioSesionPage.prototype.irApp = function () {
        var list = this.listaClientes;
        var email = this.email;
        var password = this.password;
        for (var cliente in list) {
            if (list[cliente].correo == email) {
                if (list[cliente].contraseña == password) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]); //Hay que pasarle parametros
                    return;
                }
            }
        }
        alert("Email o contraseña incorrectos");
    };
    InicioSesionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\InicioSesion\InicioSesion.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inicio de sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding class="bg-inicioSesion">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Correo electronico</ion-label>\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n      <button ion-button  (click) ="irApp()" color="primary" block>Entrar</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\InicioSesion\InicioSesion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], InicioSesionPage);
    return InicioSesionPage;
}());

//# sourceMappingURL=InicioSesion.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inicio_Inicio__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Carrito_Carrito__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Horario_Horario__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Gastos_Gastos__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Perfil_Perfil__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__Inicio_Inicio__["a" /* InicioPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__Horario_Horario__["a" /* HorarioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__Carrito_Carrito__["a" /* CarritoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__Gastos_Gastos__["a" /* GastosPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__Perfil_Perfil__["a" /* PerfilPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="ios-information-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Horario" tabIcon="ios-clock"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Carrito" tabIcon="ios-cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Gastos" tabIcon="logo-euro"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Perfil" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\Inicio\Inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Inicio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n  <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\Inicio\Inicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=Inicio.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarritoPage = /** @class */ (function () {
    function CarritoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            'Patatas',
            'Tomate',
            'Lechuga',
            'Leche',
            'Cacao',
            'Papel',
            'Pan'
        ];
    }
    CarritoPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    CarritoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrito',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\Carrito\Carrito.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Carrito\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class= "carrito" >\n  <div>\n  <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n  </div>\n\n  <button>\n    \n  </button>\n\n\n  <ion-list inset>\n    <button ion-item *ngFor="let item of items">\n      {{ item }}\n    </button>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  ¿Necesitas ayuda?\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\Carrito\Carrito.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CarritoPage);
    return CarritoPage;
}());

//# sourceMappingURL=Carrito.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HorarioPage = /** @class */ (function () {
    function HorarioPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HorarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horario',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\Horario\Horario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Horario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n  <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\Horario\Horario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HorarioPage);
    return HorarioPage;
}());

//# sourceMappingURL=Horario.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GastosPage = /** @class */ (function () {
    function GastosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GastosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gastos',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\Gastos\Gastos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Gastos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n <ion-content padding>\n   <div>\n   <img src="../assets/imgs/devoirs.png" width="75" height="50">\n   </div>\n\n </ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\Gastos\Gastos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=Gastos.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\Perfil\Perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mi perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n  <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\Perfil\Perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=Perfil.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Principal_Principal__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, dbFirebase) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
    }
    RegistroPage.prototype.irPrincipal = function () {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__["a" /* Cliente */]();
        datoscliente.id = "" + Date.now();
        datoscliente.nombre = this.name;
        datoscliente.contraseña = this.password;
        datoscliente.correo = this.email;
        datoscliente.direccion = this.address;
        var contraseña2 = this.secondpassword;
        var comprobacion = this.checkbox;
        if (!datoscliente.nombre || !datoscliente.correo || !datoscliente.contraseña || !datoscliente.direccion || !contraseña2) {
            alert("Por favor, rellene todos los datos");
            return;
        }
        if (!comprobacion) {
            alert("Por favor, acepte las condiciones para continuar");
            return;
        }
        if (datoscliente.contraseña != contraseña2) {
            alert("Las contraseñas no coinciden");
            return;
        }
        this.dbFirebase.guardaCliente(datoscliente);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Principal_Principal__["a" /* PrincipalPage */]);
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\pages\Registro\Registro.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class ="bg-registro">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>NOMBRE Y APELLIDOS</ion-label>\n        <ion-input type="text" [(ngModel)]="name"></ion-input>\n	</ion-item>\n \n      <ion-item>\n        <ion-label stacked>CORREO ELECTRONICO </ion-label>\n        <ion-input type="email" [value]="correo" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked id="p">CONTRASEÑA</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>CONFIRMAR CONTRASEÑA</ion-label>\n        <ion-input type="password" [(ngModel)]="secondpassword"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>COMUNIDAD</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>DIRECCIÓN</ion-label>\n        <ion-input type="text" [(ngModel)]="address"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n       <label class = "checkbox">\n       <input type = "checkbox" [(ngModel)]="checkbox"/>\n       <b>Acepto las condiciones del registro</b>\n       </label>\n\n\n\n      <div padding>\n      <button ion-button (click) ="irPrincipal()" color="secondary" block>LISTO</button>\n     </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\pages\Registro\Registro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=Registro.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(298);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Inicio_Inicio__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Carrito_Carrito__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Horario_Horario__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Gastos_Gastos__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Perfil_Perfil__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_InicioSesion_InicioSesion__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Principal_Principal__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Registro_Registro__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var fireBaseConfig = {
    apiKey: "AIzaSyA9COxghIHgJCqOcev9I4rNt11I33ctxIo",
    authDomain: "devoirs-efd11.firebaseapp.com",
    databaseURL: "https://devoirs-efd11.firebaseio.com",
    projectId: "devoirs-efd11",
    storageBucket: "",
    messagingSenderId: "69980728743"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Inicio_Inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Carrito_Carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Horario_Horario__["a" /* HorarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Gastos_Gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_InicioSesion_InicioSesion__["a" /* InicioSesionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Principal_Principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Perfil_Perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Registro_Registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig), __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Inicio_Inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Carrito_Carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Horario_Horario__["a" /* HorarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Gastos_Gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Principal_Principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_InicioSesion_InicioSesion__["a" /* InicioSesionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Registro_Registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Perfil_Perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Principal_Principal__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Principal_Principal__["a" /* PrincipalPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ivan\devoirs\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Ivan\devoirs\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.id = "";
    }
    return Cliente;
}());

//# sourceMappingURL=cliente.model.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map