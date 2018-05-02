webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasServicios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TareasServicios = /** @class */ (function () {
    function TareasServicios() {
        this.tareas = [];
    }
    TareasServicios.prototype.getTareas = function () {
        return this.tareas;
    };
    TareasServicios.prototype.getTarea = function (id) {
        return this.tareas.filter(function (e, i) { return e.id == id; })[0] || { id: null, fecha: null, actividad: null, persona: null };
    };
    TareasServicios.prototype.crearTarea = function (tarea) {
        for (var itarea = 0; itarea < this.tareas.length; itarea++) {
            if (tarea.fecha < this.tareas[itarea].fecha) {
                this.tareas.splice(itarea, 0, tarea);
                return;
            }
            if (tarea.fecha == this.tareas[itarea].fecha) {
                if (tarea.hora == null || tarea.hora < this.tareas[itarea].fecha) {
                    this.tareas.splice(itarea, 0, tarea);
                    return;
                }
            }
        }
        this.tareas.push(tarea);
    };
    TareasServicios.prototype.editarTarea = function (tarea) {
        this.eliminarTarea(tarea);
        this.crearTarea(tarea);
    };
    TareasServicios.prototype.eliminarTarea = function (tarea) {
        for (var i = 0; i < this.tareas.length; i++) {
            if (this.tareas[i].id == tarea.id) {
                this.tareas.splice(i, 1);
            }
        }
    };
    TareasServicios = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TareasServicios);
    return TareasServicios;
}());

//# sourceMappingURL=tareas.servicios.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasServicios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotasServicios = /** @class */ (function () {
    function NotasServicios() {
        this.notas = [];
    }
    NotasServicios.prototype.getNotas = function () {
        return this.notas;
    };
    NotasServicios.prototype.getNota = function (id) {
        return this.notas.filter(function (e, i) { return e.id == id; })[0] || { id: null, propietario: null, descripcion: null };
    };
    NotasServicios.prototype.crearNota = function (nota) {
        this.notas.splice(0, 0, nota);
    };
    NotasServicios.prototype.editarNota = function (nota) {
        for (var i = 0; i < this.notas.length; i++) {
            if (this.notas[i] == nota) {
                this.notas[i] = nota;
            }
        }
    };
    NotasServicios.prototype.updateNotas = function (nnotas) {
        this.notas = nnotas;
    };
    NotasServicios.prototype.eliminarNota = function (nota) {
        for (var i = 0; i < this.notas.length; i++) {
            if (this.notas[i] == nota) {
                this.notas.splice(i, 1);
            }
        }
    };
    NotasServicios = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NotasServicios);
    return NotasServicios;
}());

//# sourceMappingURL=notas.servicios.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InicioSesion_InicioSesion__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Registro_Registro__ = __webpack_require__(283);
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
            selector: 'page-principal',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Principal\Principal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Principal\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="bg-principal">\n  <div>\n  <img src="../assets/imgs/devoirs.png" align="center">\n</div>\n\n<button ion-button (click)="irSesion()" round color="secondary">\n  Iniciar sesión\n</button>\n\n <p class ="texto">\n<b>¿No conoces Devoirs?</b>\n</p>\n\n<p class ="texto">\n<b>Registrate gratis y organiza tus tareas del hogar</b>\n</p>\n<button ion-button (click)="irRegistrarse()" round>\n  Registrarte\n</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Principal\Principal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=Principal.js.map

/***/ }),

/***/ 134:
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

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleTareaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_tareas_servicios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tarea_model__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetalleTareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleTareaPage = /** @class */ (function () {
    function DetalleTareaPage(navCtrl, navParams, tareasServicio, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tareasServicio = tareasServicio;
        this.dbFirebase = dbFirebase;
        this.tarea = { id: null, fecha: null, actividad: null, persona: null, hora: null };
        this.id = navParams.get("id");
        if (this.id != 0) {
            this.tarea = tareasServicio.getTarea(this.id);
        }
    }
    DetalleTareaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleTareaPage');
    };
    DetalleTareaPage.prototype.addTarea = function () {
        if (this.tarea.actividad == null) {
            alert("Introduce una actividad");
            return;
        }
        if (this.tarea.fecha == null) {
            alert("Introduce una fecha");
            return;
        }
        if (this.id != 0) {
            this.tareasServicio.editarTarea(this.tarea);
            alert("Tarea modificada");
        }
        else {
            this.tarea.id = Date.now();
            this.tareasServicio.crearTarea(this.tarea);
            alert("Tarea añadida al horario");
        }
        var datostarea = new __WEBPACK_IMPORTED_MODULE_3__models_tarea_model__["a" /* Tarea */]();
        datostarea.id = this.tarea.id;
        datostarea.persona = this.tarea.persona;
        datostarea.actividad = this.tarea.actividad;
        datostarea.fecha = this.tarea.fecha;
        if (datostarea.fecha == null) {
        }
        datostarea.hora = this.tarea.hora;
        this.dbFirebase.guardaTarea(datostarea);
        this.navCtrl.pop();
    };
    DetalleTareaPage.prototype.eliminarTarea = function () {
        this.tareasServicio.eliminarTarea(this.tarea);
        this.dbFirebase.delTarea(this.tarea.id);
        alert("Se ha eliminado la tarea del horario");
        this.navCtrl.pop();
    };
    DetalleTareaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getTareas().subscribe(function (listaTareas) {
            _this.tareas = listaTareas;
            for (var nlist in _this.tareas) {
                if (_this.tareas[nlist].id == _this.id) {
                    _this.fecha = _this.tareas[nlist].fecha;
                    _this.actividad = _this.tareas[nlist].actividad;
                    _this.persona = _this.tareas[nlist].persona;
                    _this.hora = _this.tareas[nlist].hora;
                    _this.tarea = { id: _this.id, persona: _this.persona, actividad: _this.actividad, hora: _this.hora, fecha: _this.fecha };
                }
            }
        });
    };
    DetalleTareaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle-tarea',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\detalle-tarea\detalle-tarea.html"*/'<!--\n  Generated template for the DetalleTareaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle de Tarea</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Fecha</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="tarea.fecha"></ion-datetime>\n    </ion-item>\n	\n	<ion-item>\n      <ion-label floating>Hora</ion-label>\n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="tarea.hora"></ion-datetime>\n    </ion-item>\n	\n    <ion-item>\n      <ion-label floating>Actividad</ion-label>\n      <ion-textarea [(ngModel)]="tarea.actividad" ></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Encargado</ion-label>\n      <ion-textarea [(ngModel)]="tarea.persona" ></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n<div padding>\n<button padding ion-button block (click)="addTarea()"> Guardar Tarea </button>\n</div>\n<div padding>\n<button padding *ngIf="id!=0" ion-button block color="danger" (click)="eliminarTarea()"> Eliminar Tarea </button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\detalle-tarea\detalle-tarea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__servicios_tareas_servicios__["a" /* TareasServicios */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], DetalleTareaPage);
    return DetalleTareaPage;
}());

//# sourceMappingURL=detalle-tarea.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleNotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_notas_servicios__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_nota_model__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetalleNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleNotaPage = /** @class */ (function () {
    function DetalleNotaPage(navCtrl, navParams, notasServicio, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notasServicio = notasServicio;
        this.dbFirebase = dbFirebase;
        this.nota = { id: null, propietario: null, descripcion: null };
        this.id = null;
        this.id = navParams.get("id");
    }
    DetalleNotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleNotaPage');
    };
    DetalleNotaPage.prototype.anadirNota = function () {
        if (this.id != 0) {
            this.notasServicio.editarNota(this.nota);
            alert("Nota editada con éxito");
        }
        else {
            this.nota.id = Date.now();
            this.notasServicio.crearNota(this.nota);
            alert("Nota creada con éxito");
        }
        var datosnota = new __WEBPACK_IMPORTED_MODULE_3__models_nota_model__["a" /* Nota */]();
        datosnota.id = this.nota.id;
        datosnota.propietario = this.nota.propietario;
        datosnota.descripcion = this.nota.descripcion;
        this.dbFirebase.guardaNota(datosnota);
        this.navCtrl.pop();
    };
    DetalleNotaPage.prototype.eliminarNota = function () {
        this.notasServicio.eliminarNota(this.nota);
        this.dbFirebase.delNota(this.nota.id);
        alert("Nota eliminada con éxito");
        this.navCtrl.pop();
    };
    DetalleNotaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.id != 0) {
            this.dbFirebase.getNotas().subscribe(function (listaNotas) {
                _this.notas = listaNotas;
                for (var nlist in _this.notas) {
                    if (_this.notas[nlist].id == _this.id) {
                        _this.propietario = _this.notas[nlist].propietario;
                        _this.descripcion = _this.notas[nlist].descripcion;
                        _this.nota = { id: _this.id, propietario: _this.propietario, descripcion: _this.descripcion };
                    }
                }
            });
        }
    };
    DetalleNotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle-nota',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\detalle-nota\detalle-nota.html"*/'<!--\n  Generated template for the DetalleNotaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalles de la Nota</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Propietario</ion-label>\n      <ion-input type="text" [(ngModel)]="nota.propietario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Descripción</ion-label>\n      <ion-textarea [(ngModel)]="nota.descripcion"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n  <div padding>\n  <button ion-button block (click)="anadirNota()"> Guardar Nota </button>\n  <button *ngIf="id!=0" ion-button block (click)="eliminarNota()" color="danger"> Eliminar Nota </button>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\detalle-nota\detalle-nota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__servicios_notas_servicios__["a" /* NotasServicios */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], DetalleNotaPage);
    return DetalleNotaPage;
}());

//# sourceMappingURL=detalle-nota.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalle-nota/detalle-nota.module": [
		433,
		1
	],
	"../pages/detalle-tarea/detalle-tarea.module": [
		432,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(191);
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
        this.notasRef = this.afDB.list('notas');
        this.tareasRef = this.afDB.list('tareas');
        this.comprasRef = this.afDB.list('compras');
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
    FirebaseDbProvider.prototype.guardaNota = function (nota) {
        if (nota.id == '') {
            nota.id = "" + Date.now();
        }
        return this.afDB.database.ref('notas/' + nota.id).set(nota);
    };
    FirebaseDbProvider.prototype.delNota = function (id) {
        this.afDB.database.ref('notas/' + id).remove();
    };
    FirebaseDbProvider.prototype.getNotas = function () {
        return this.notasRef.valueChanges();
    };
    FirebaseDbProvider.prototype.guardaTarea = function (tarea) {
        if (tarea.id == '') {
            tarea.id = "" + Date.now();
        }
        return this.afDB.database.ref('tareas/' + tarea.id).set(tarea);
    };
    FirebaseDbProvider.prototype.delTarea = function (id) {
        this.afDB.database.ref('tareas/' + id).remove();
    };
    FirebaseDbProvider.prototype.getTareas = function () {
        return this.tareasRef.valueChanges();
    };
    FirebaseDbProvider.prototype.guardaCompra = function (compra) {
        return this.afDB.database.ref('compras/' + compra.id).set(compra);
    };
    FirebaseDbProvider.prototype.delCompra = function (id) {
        this.afDB.database.ref('compras/' + id).remove();
    };
    FirebaseDbProvider.prototype.getCompras = function () {
        return this.comprasRef.valueChanges();
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioSesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(27);
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
        var notas = this.listaNotas;
        var email = this.email;
        var password = this.password;
        for (var cliente in list) {
            if (list[cliente].correo == email) {
                if (list[cliente].contraseña == password) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { id: list[cliente].id }); //Hay que pasarle parametros
                    return;
                }
            }
        }
        alert("Email o contraseña incorrectos");
    };
    InicioSesionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\InicioSesion\InicioSesion.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inicio de sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding class="bg-inicioSesion">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Correo electronico</ion-label>\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n      <button ion-button  (click) ="irApp()" color="primary" block>Entrar</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\InicioSesion\InicioSesion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], InicioSesionPage);
    return InicioSesionPage;
}());

//# sourceMappingURL=InicioSesion.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inicio_Inicio__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Carrito_Carrito__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Horario_Horario__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Gastos_Gastos__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Perfil_Perfil__ = __webpack_require__(282);
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
    function TabsPage(params) {
        this.params = params;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__Inicio_Inicio__["a" /* InicioPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__Horario_Horario__["a" /* HorarioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__Carrito_Carrito__["a" /* CarritoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__Gastos_Gastos__["a" /* GastosPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__Perfil_Perfil__["a" /* PerfilPage */];
        this.params = params;
        this.parametros = this.params.data;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="ios-information-circle" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Horario" tabIcon="ios-clock"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Carrito" tabIcon="ios-cart" [rootParams]="parametros"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Gastos" tabIcon="logo-euro"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Perfil" tabIcon="md-person" [rootParams]="parametros"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_notas_servicios__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_nota_detalle_nota__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(27);
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
    function InicioPage(navCtrl, navParams, notasServicio, dbFirebase, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notasServicio = notasServicio;
        this.dbFirebase = dbFirebase;
        this.alertCtrl = alertCtrl;
        this.date = new Date();
        this.notas = [];
        this.notas = notasServicio.getNotas();
    }
    InicioPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array;
        this.monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', ' Dic'];
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var ii = 0; ii < thisNumOfDays; ii++) {
            this.daysInThisMonth.push(ii + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        for (var iii = 0; iii < (6 - lastDayThisMonth); iii++) {
            this.daysInNextMonth.push(iii + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var iiii = (7 - lastDayThisMonth); iiii < ((7 - lastDayThisMonth) + 7); iiii++) {
                this.daysInNextMonth.push(iiii);
            }
        }
    };
    InicioPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    InicioPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    InicioPage.prototype.irDetalleNota = function (id) {
        alert(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_nota_detalle_nota__["a" /* DetalleNotaPage */], { id: id });
    };
    InicioPage.prototype.crearNota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_nota_detalle_nota__["a" /* DetalleNotaPage */], { id: 0 });
    };
    InicioPage.prototype.ionViewWillEnter = function () {
        this.getDaysOfMonth();
    };
    InicioPage.prototype.needHelp = function () {
        var alert = this.alertCtrl.create({
            title: '¿Necesitas ayuda?',
            subTitle: 'Ayuda en página de Inicio',
            message: '¡Vaya! Parece que tienes problemas. En esta página podrás añadir, o editar notificaciones, que serán leidas por todos los integrantes de la vivienda. Para ello simplemente prueba a pulsar en una nota para editarla, o bien, en crear nota para crear una nueva nota. El botón crear nota te ofrecerá una serie de campos en los que podrás introducir, tanto tu mensaje, como la fecha en la que ha sido escrito. Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    InicioPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getNotas().subscribe(function (listaNotas) {
            _this.notas = listaNotas;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], InicioPage.prototype, "nav", void 0);
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Inicio\Inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Inicio\n    </ion-title>\n\n\n  </ion-navbar>\n</ion-header>\n\n  <ion-content class="princ" >\n    <div padding-bottom>\n      <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n    </div>\n    <div padding>\n      <div class="calendar-header">\n        <ion-row class="calendar-month">\n          <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n          <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n          <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n        </ion-row>\n      </div>\n      <div class="calendar-body">\n        <ion-grid>\n          <ion-row class="calendar-weekday">\n            <ion-col>Dom</ion-col>\n            <ion-col>Lu</ion-col>\n            <ion-col>Mar</ion-col>\n            <ion-col>Mie</ion-col>\n            <ion-col>Jue</ion-col>\n            <ion-col>Vie</ion-col>\n            <ion-col>Sa</ion-col>\n          </ion-row>\n          <ion-row class="calendar-date">\n            <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n            <ion-col col-1 *ngFor="let day of daysInThisMonth">\n              <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n              <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n            </ion-col>\n            <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class="notes">\n        <ion-list>\n          <button ion-item *ngFor="let nota of notas" (click)="irDetalleNota(nota.id)">\n            {{ nota.propietario}}\n          </button>\n        </ion-list>\n        <div padding>\n          <button ion-button block (click)="crearNota()"> Crear Nota </button>\n        </div>\n      </div>\n    </div>\n    <button id="buttonHelp" ion-button small (click)="needHelp()">\n      <p width="70%">Ayuda </p>\n    </button>\n  </ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Inicio\Inicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__servicios_notas_servicios__["a" /* NotasServicios */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=Inicio.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compra_final_compra_final__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_carrito_model__ = __webpack_require__(431);
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
    function CarritoPage(navCtrl, params, dbFirebase, alertCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.dbFirebase = dbFirebase;
        this.alertCtrl = alertCtrl;
        this.clientId = this.params.get('id');
    }
    CarritoPage.prototype.newitem = function (elem) {
        this.items.push(elem);
        var identificador = "" + Date.now();
        var datoscompra = new __WEBPACK_IMPORTED_MODULE_4__models_carrito_model__["a" /* Compra */]();
        datoscompra.id = identificador;
        datoscompra.compra = elem.value;
        this.dbFirebase.guardaCompra(datoscompra);
    };
    CarritoPage.prototype.allItems = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__compra_final_compra_final__["a" /* CompraFinalPage */], { id: this.clientId });
    };
    CarritoPage.prototype.borrarCompra = function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.dbFirebase.delCompra(item.id);
    };
    CarritoPage.prototype.needHelp = function () {
        var alert = this.alertCtrl.create({
            title: '¿Necesitas ayuda?',
            subTitle: 'Ayuda en página Carrito',
            message: '¡Vaya! Parece que tienes problemas. En esta pagina podrás añadir o eliminar elementos, a lo que denominamos la lista de la compra. Una vez realizada podrás clicar en compra realizada introduciendo el gasto generado por dicha compra. Una vez pulsado el boton de compra realizada la lista pasará a estar en blanco de nuevo. Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CarritoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getCompras().subscribe(function (listaCompras) {
            _this.items = listaCompras;
        });
    };
    CarritoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrito',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Carrito\Carrito.html"*/'\n\n<!--Header-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Carrito\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class= "carrito" >\n\n    <div>\n      <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n    </div>\n\n    <div>\n      <button class="button button-icon ion-minus-circled">\n      </button>\n      </div>\n\n  <ion-list inset >\n    <ion-item *ngFor="let item of items">\n	<ion-label>{{item.compra}}</ion-label>\n	<button ion-button color="danger" clear item-right (click)="borrarCompra(item)">Borrar</button>\n	<ion-checkbox></ion-checkbox>\n    </ion-item>\n        <ion-icon class="ion-minus-circled"></ion-icon>\n  </ion-list>\n\n    <div class = "add-rem" ion-item>\n      <div id = "aña">  Añadir </div>\n      <form id ="fform" (submit)="newitem(elem)"><input #elem type="search"></form>\n    </div>\n<!-- Poner el color del boton a    -->\n    <div class = "add-rem">\n    <button (click)="allItems()" ion-item>\n      Compra realizada\n      <ion-icon name="basket" item-end></ion-icon>\n    </button>\n  </div>\n  <button id="buttonHelp" ion-button small (click)="needHelp()">\n    <p width="70%">Ayuda </p>\n  </button>\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Carrito\Carrito.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CarritoPage);
    return CarritoPage;
}());

//# sourceMappingURL=Carrito.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraFinalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_db_firebase_db__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CompraFinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompraFinalPage = /** @class */ (function () {
    function CompraFinalPage(navCtrl, params, dbFirebase) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.dbFirebase = dbFirebase;
        this.clientId = this.params.get('id');
    }
    CompraFinalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompraFinalPage');
    };
    CompraFinalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (listaClientes) { _this.listaClientes = listaClientes; });
        this.dbFirebase.getCompras().subscribe(function (listaCompras) { _this.listaCompras = listaCompras; });
    };
    CompraFinalPage.prototype.completarCompra = function () {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__["a" /* Cliente */]();
        for (var llist in this.listaClientes) {
            if (this.listaClientes[llist].id == this.clientId) {
                datoscliente.id = this.listaClientes[llist].id;
                datoscliente.nombre = this.listaClientes[llist].nombre;
                datoscliente.contraseña = this.listaClientes[llist].contraseña;
                datoscliente.correo = this.listaClientes[llist].correo;
                datoscliente.direccion = this.listaClientes[llist].direccion;
                datoscliente.gasto = Number(this.listaClientes[llist].gasto) + Number(this.compra);
                this.dbFirebase.guardaCliente(datoscliente);
            }
        }
        for (var icompra in this.listaCompras) {
            this.dbFirebase.delCompra(this.listaCompras[icompra].id);
        }
        this.navCtrl.pop();
    };
    CompraFinalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compra-final',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\compra-final\compra-final.html"*/'<!--\n  Generated template for the CompraFinalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Confirmación de compra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n  \n    <ion-item>\n      <ion-label floating>Gasto total</ion-label>\n      <ion-input type="number" value=0 [(ngModel)]="compra"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <div padding>\n  <button ion-button block (click)="completarCompra()"> Realizar compra </button>\n</div>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\compra-final\compra-final.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], CompraFinalPage);
    return CompraFinalPage;
}());

//# sourceMappingURL=compra-final.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_tareas_servicios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_tarea_detalle_tarea__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(27);
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
    function HorarioPage(navCtrl, tareasServicio, dbFirebase, alertCtrl) {
        this.navCtrl = navCtrl;
        this.tareasServicio = tareasServicio;
        this.dbFirebase = dbFirebase;
        this.alertCtrl = alertCtrl;
        this.tareas = [];
        this.tareas = tareasServicio.getTareas();
    }
    HorarioPage.prototype.irDetalleTarea = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_tarea_detalle_tarea__["a" /* DetalleTareaPage */], { id: id });
    };
    HorarioPage.prototype.crearTarea = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_tarea_detalle_tarea__["a" /* DetalleTareaPage */], { id: 0 });
    };
    HorarioPage.prototype.needHelp = function () {
        var alert = this.alertCtrl.create({
            title: '¿Necesitas ayuda?',
            subTitle: 'Ayuda en página Horario',
            message: '¡Vaya! Parece que tienes problemas. En esta página podrás ver las tareas asignadas a cada miembro mediante notificaciones. En estas notificaciones se observa la actividad a realizar, el día, la hora, y el miembro que va a realizarlas. Estas notificaciones pueden editarse pulsando sobre ellas, o bien, crearse mediante el botón Crear tarea. Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HorarioPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getTareas().subscribe(function (listaTareas) {
            _this.tareas = listaTareas;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], HorarioPage.prototype, "nav", void 0);
    HorarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horario',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Horario\Horario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Horario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="Hor">\n  <div>\n  <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n  </div>\n<div padding>\n  <ion-list>\n    <button id="but" ion-item *ngFor="let tarea of tareas" (click)="irDetalleTarea(tarea.id)">\n      <p>{{tarea.fecha  | date:\'dd/MM/yyyy\'}}  {{tarea.hora}} </p>\n	    <p>{{tarea.actividad}}</p>\n      <p align="right">{{tarea.persona}}</p>\n      <ion-icon ios="ios-more" md="md-more"></ion-icon>\n    </button>\n\n  </ion-list>\n  <div padding>\n  <button padding ion-button block (click)="crearTarea()" >Crear Tarea </button>\n  </div>\n</div>\n<button id="buttonHelp" ion-button small (click)="needHelp()">\n  <p width="70%">Ayuda </p>\n</button>\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Horario\Horario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__servicios_tareas_servicios__["a" /* TareasServicios */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HorarioPage);
    return HorarioPage;
}());

//# sourceMappingURL=Horario.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function GastosPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    GastosPage.prototype.needHelp = function () {
        var alert = this.alertCtrl.create({
            title: '¿Necesitas ayuda?',
            subTitle: 'Ayuda en página Gastos',
            message: '¡Vaya! Parece que tienes problemas.TEXTO A RELLENAR Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    GastosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gastos',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Gastos\Gastos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Gastos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n <ion-content padding>\n   <div>\n   <img src="../assets/imgs/devoirs.png" width="75" height="50">\n   </div>\n   <button id="buttonHelp" ion-button small (click)="needHelp()">\n     <p width="70%">Ayuda </p>\n   </button>\n </ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Gastos\Gastos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=Gastos.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__ = __webpack_require__(134);
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
    function PerfilPage(navCtrl, params, dbFirebase, alertCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.dbFirebase = dbFirebase;
        this.alertCtrl = alertCtrl;
        this.clientId = this.params.get('id');
    }
    PerfilPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (listaClientes) {
            _this.listaClientes = listaClientes;
            var list = _this.listaClientes;
            for (var icliente in list) {
                if (_this.clientId == list[icliente].id) {
                    _this.nombre = list[icliente].nombre;
                    _this.email = list[icliente].correo;
                    _this.residencia = list[icliente].direccion;
                    _this.gastos = list[icliente].gasto;
                    return;
                }
            }
        });
    };
    PerfilPage.prototype.needHelp = function () {
        var alert = this.alertCtrl.create({
            title: '¿Necesitas ayuda?',
            subTitle: 'Ayuda en página Perfil',
            message: '¡Vaya! Parece que tienes problemas. En esta página podrás ver los datos de tu perfil además del gasto acumulado hasta el momento. Si algún campo es incorrecto, o ha sido actualizado, podrás modificarlo pulsando Modificar campos. Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PerfilPage.prototype.editarPerfil = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Edita tus datos',
            inputs: [
                {
                    name: 'nombre',
                    placeholder: 'nombre'
                },
                {
                    name: 'email',
                    placeholder: 'email',
                },
                {
                    name: 'direccion',
                    placeholder: 'direccion',
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        var list = _this.listaClientes;
                        var datoscliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__["a" /* Cliente */]();
                        for (var icliente in list) {
                            if (_this.clientId == list[icliente].id) {
                                datoscliente.id = list[icliente].id;
                                console.log(JSON.stringify(datoscliente));
                                if (data.nombre == null) {
                                    datoscliente.nombre = list[icliente].nombre;
                                }
                                else {
                                    datoscliente.nombre = data.nombre;
                                }
                                datoscliente.contraseña = list[icliente].contraseña;
                                if (data.email == null) {
                                    datoscliente.correo = list[icliente].correo;
                                }
                                else {
                                    datoscliente.correo = data.email;
                                }
                                if (data.direccion == null) {
                                    datoscliente.direccion = list[icliente].direccion;
                                }
                                else {
                                    datoscliente.direccion = data.direccion;
                                }
                                datoscliente.gasto = list[icliente].gasto;
                            }
                        }
                        _this.dbFirebase.guardaCliente(datoscliente);
                    }
                }
            ]
        });
        alert.present();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Perfil\Perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mi perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="perfil">\n  <div>\n  <img src="../assets/imgs/devoirs.png"  width="75" height="50">\n  </div>\n\n\n<div class="principal">\n\n  <div class="im">\n  <img class= "imagen" src="../assets/imgs/perfil.png">\n  <h5>{{ nombre }}</h5>\n\n    <p class="bold">e-mail:</p><p> {{ email }} </p>\n    <p class="bold">Direccion:</p><p> {{ residencia }}</p>\n    <p class="bold">Gastos:</p><p>{{ gastos }} €</p>\n\n    <button id="buttonMod" ion-button (click)="editarPerfil()">\n      <p width="70%">Modificar campos <ion-icon class="buu" name="build"></ion-icon> </p>\n    </button>\n\n  </div>\n</div>\n\n<button id="buttonHelp" ion-button small (click)="needHelp()">\n  <p width="70%">Ayuda </p>\n</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Perfil\Perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=Perfil.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Principal_Principal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__ = __webpack_require__(27);
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
        datoscliente.gasto = 0;
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
            selector: 'page-registro',template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Registro\Registro.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class ="bg-registro">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>NOMBRE Y APELLIDOS</ion-label>\n        <ion-input type="text" [(ngModel)]="name"></ion-input>\n	</ion-item>\n\n      <ion-item>\n        <ion-label stacked>CORREO ELECTRONICO </ion-label>\n        <ion-input type="email" [value]="correo" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked id="p">CONTRASEÑA</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>CONFIRMAR CONTRASEÑA</ion-label>\n        <ion-input type="password" [(ngModel)]="secondpassword"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>COMUNIDAD</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>DIRECCIÓN</ion-label>\n        <ion-input type="text" [(ngModel)]="address"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n       <label class = "checkbox">\n       <input type = "checkbox" [(ngModel)]="checkbox"/>\n       <b>Acepto las condiciones del registro</b>\n       </label>\n\n\n\n      <div padding>\n      <button ion-button (click) ="irPrincipal()" color="secondary" block>LISTO</button>\n     </div>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\pages\Registro\Registro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=Registro.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicios_tareas_servicios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_notas_servicios__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Inicio_Inicio__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detalle_nota_detalle_nota__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detalle_tarea_detalle_tarea__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_compra_final_compra_final__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Carrito_Carrito__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Horario_Horario__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Gastos_Gastos__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Perfil_Perfil__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_InicioSesion_InicioSesion__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Principal_Principal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Registro_Registro__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(274);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_Inicio_Inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Carrito_Carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Horario_Horario__["a" /* HorarioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Gastos_Gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_InicioSesion_InicioSesion__["a" /* InicioSesionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Principal_Principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Perfil_Perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalle_nota_detalle_nota__["a" /* DetalleNotaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalle_tarea_detalle_tarea__["a" /* DetalleTareaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compra_final_compra_final__["a" /* CompraFinalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Registro_Registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detalle-tarea/detalle-tarea.module#DetalleTareaPageModule', name: 'DetalleTareaPage', segment: 'detalle-tarea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-nota/detalle-nota.module#DetalleNotaPageModule', name: 'DetalleNotaPage', segment: 'detalle-nota', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseConfig), __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Inicio_Inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Carrito_Carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Horario_Horario__["a" /* HorarioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Gastos_Gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Principal_Principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_InicioSesion_InicioSesion__["a" /* InicioSesionPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Registro_Registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Perfil_Perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalle_nota_detalle_nota__["a" /* DetalleNotaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compra_final_compra_final__["a" /* CompraFinalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalle_tarea_detalle_tarea__["a" /* DetalleTareaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__servicios_tareas_servicios__["a" /* TareasServicios */],
                __WEBPACK_IMPORTED_MODULE_8__servicios_notas_servicios__["a" /* NotasServicios */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarea; });
var Tarea = /** @class */ (function () {
    function Tarea() {
        this.id = "";
    }
    return Tarea;
}());

//# sourceMappingURL=tarea.model.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nota; });
var Nota = /** @class */ (function () {
    function Nota() {
        this.id = "";
    }
    return Nota;
}());

//# sourceMappingURL=nota.model.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Principal_Principal__ = __webpack_require__(133);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\PELICULAS\wqewqq\DSI-Devoirs-master\PRACTICA_FINAL\devoirs\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compra; });
var Compra = /** @class */ (function () {
    function Compra() {
        this.id = "";
    }
    return Compra;
}());

//# sourceMappingURL=carrito.model.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map