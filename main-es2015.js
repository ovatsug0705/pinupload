(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/boards/boards.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/boards/boards.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Pastas</h1>\n\n<mat-accordion *ngIf=\"boards.length > 0\">\n   <mat-expansion-panel *ngFor=\"let board of boards\" (opened)=\"fetchPins(board.name)\">\n      <mat-expansion-panel-header>\n\n         <mat-panel-title>\n            {{ board.name }}\n         </mat-panel-title>\n\n      </mat-expansion-panel-header>\n\n      <mat-card *ngFor=\"let pin of boardPins[board.name]\" class=\"pin-preview\">\n         <img mat-card-image [src]=\"pin.image.original.url\" [alt]=\"pin.note\">\n         <mat-card-content>\n           <p>\n             {{ pin.note }}\n           </p>\n         </mat-card-content>         \n       </mat-card>\n\n   </mat-expansion-panel>\n</mat-accordion>\n\n<p *ngIf=\"boards.length <= 0\">Você não criou nenhuma pasta ainda.</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <button mat-button color=\"primary\" (click)=\"doLogin()\">\n      Fazer login no Pinterest\n   </button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/o-auth2-callback/o-auth2-callback.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/o-auth2-callback/o-auth2-callback.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>o-auth2-callback works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/header/header.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/header/header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z8\">\n   <mat-toolbar-row>\n      <app-main-menu></app-main-menu>\n      <span>{{ appName }}</span>\n   </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/main-menu/main-menu.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/main-menu/main-menu.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"menu\" #state=\"matMenuTrigger\">\n   <mat-icon *ngIf=\"! state.menuOpen\">menu</mat-icon>\n   <mat-icon *ngIf=\"state.menuOpen\">close</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n   <a *ngIf=\"hasUser()\" mat-menu-item [routerLink]=\"['/user']\">Perfil</a>\n   <a *ngIf=\"hasUser()\" mat-menu-item [routerLink]=\"['/boards']\">Pastas</a>\n   <a *ngIf=\"! hasUser()\" mat-menu-item [routerLink]=\"['/login']\">Entrar</a>\n   <button *ngIf=\"hasUser()\" mat-menu-item (click)=\"logOff()\">Sair</button>   \n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar>\n        <img mat-card-image [src]=\"avatarImage\" [alt]=\"avatarAlt\">\n      </div>\n      <mat-card-title>{{ user.username }}</mat-card-title>\n      <mat-card-subtitle>{{ user.first_name }} {{ user.last_name }}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>{{ user.bio }}</p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" (click)=\"doLogoff()\">Sair</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _o_auth2_callback_o_auth2_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./o-auth2-callback/o-auth2-callback.component */ "./src/app/o-auth2-callback/o-auth2-callback.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boards/boards.component */ "./src/app/boards/boards.component.ts");







const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'boards', component: _boards_boards_component__WEBPACK_IMPORTED_MODULE_6__["BoardsComponent"] },
    { path: 'oauth2/callback', component: _o_auth2_callback_o_auth2_callback_component__WEBPACK_IMPORTED_MODULE_4__["OAuth2CallbackComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Pinupload';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <app-header [appName]="title"></app-header>
    <router-outlet></router-outlet>
  `
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _o_auth2_callback_o_auth2_callback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./o-auth2-callback/o-auth2-callback.component */ "./src/app/o-auth2-callback/o-auth2-callback.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/main-menu/main-menu.component */ "./src/app/ui/main-menu/main-menu.component.ts");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./boards/boards.component */ "./src/app/boards/boards.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _o_auth2_callback_o_auth2_callback_component__WEBPACK_IMPORTED_MODULE_9__["OAuth2CallbackComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
            _ui_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _ui_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"],
            _boards_boards_component__WEBPACK_IMPORTED_MODULE_14__["BoardsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/boards/boards.component.scss":
/*!**********************************************!*\
  !*** ./src/app/boards/boards.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkcy9ib2FyZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/boards/boards.component.ts":
/*!********************************************!*\
  !*** ./src/app/boards/boards.component.ts ***!
  \********************************************/
/*! exports provided: BoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pinterest.service */ "./src/app/services/pinterest.service.ts");



let BoardsComponent = class BoardsComponent {
    constructor(pinterest) {
        this.pinterest = pinterest;
        this.boards = [];
        this.boardPins = {};
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let result = yield this.pinterest.listBoards();
                this.boards = result['data'];
                console.log(this.boards);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    fetchPins(boardName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.boardPins[boardName]);
            // Se ainda não houver carregado a lista de imagens do board
            if (!this.boardPins[boardName]) {
                try {
                    let result = yield this.pinterest.listBoardPins(boardName);
                    this.boardPins[boardName] = result['data'];
                    console.log(result);
                }
                catch (error) {
                    console.log(error);
                }
            }
        });
    }
};
BoardsComponent.ctorParameters = () => [
    { type: _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__["PinterestService"] }
];
BoardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boards',
        template: __webpack_require__(/*! raw-loader!./boards.component.html */ "./node_modules/raw-loader/index.js!./src/app/boards/boards.component.html"),
        styles: [__webpack_require__(/*! ./boards.component.scss */ "./src/app/boards/boards.component.scss")]
    })
], BoardsComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFwxMDkwNDgxNzEzMDE0XFxEZXNrdG9wXFxOb3ZhIHBhc3RhXFxwaW51cGxvYWQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxrQkFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsImRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pinterest.service */ "./src/app/services/pinterest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(pinterest, router) {
        this.pinterest = pinterest;
        this.router = router;
    }
    ngOnInit() {
        // Já tem usuário logado, não precisa fazer login
        if (this.pinterest.getUser()) {
            this.router.navigate(['user']);
        }
    }
    doLogin() {
        this.pinterest.initLogin();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__["PinterestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/o-auth2-callback/o-auth2-callback.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/o-auth2-callback/o-auth2-callback.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL28tYXV0aDItY2FsbGJhY2svby1hdXRoMi1jYWxsYmFjay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/o-auth2-callback/o-auth2-callback.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/o-auth2-callback/o-auth2-callback.component.ts ***!
  \****************************************************************/
/*! exports provided: OAuth2CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2CallbackComponent", function() { return OAuth2CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_pinterest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pinterest.service */ "./src/app/services/pinterest.service.ts");




let OAuth2CallbackComponent = class OAuth2CallbackComponent {
    constructor(router, route, pinterest) {
        this.router = router;
        this.route = route;
        this.pinterest = pinterest;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.code) { // Se existir o parâmetro chamado 'code'
                console.log('Access code:');
                console.log(params.code);
                // Salva o access code para uso posterior
                this.pinterest.setAccessCode(params.code);
                // Retorna à página inicial
                //this.router.navigate(['/']); 
            }
            else {
                console.error('ERRO DE ACCESS CODE');
                // Deu erro no login; retornamos à página de login
                // this.router.navigate(['/login']);          
            }
        });
    }
};
OAuth2CallbackComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_pinterest_service__WEBPACK_IMPORTED_MODULE_3__["PinterestService"] }
];
OAuth2CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-o-auth2-callback',
        template: __webpack_require__(/*! raw-loader!./o-auth2-callback.component.html */ "./node_modules/raw-loader/index.js!./src/app/o-auth2-callback/o-auth2-callback.component.html"),
        styles: [__webpack_require__(/*! ./o-auth2-callback.component.scss */ "./src/app/o-auth2-callback/o-auth2-callback.component.scss")]
    })
], OAuth2CallbackComponent);



/***/ }),

/***/ "./src/app/services/pinterest.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pinterest.service.ts ***!
  \***********************************************/
/*! exports provided: PinterestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterestService", function() { return PinterestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PinterestService = class PinterestService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        /* accessCode e accessToken podem ser string ou null */
        this.accessCode = null;
        this.reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', 'https://' + window.location.hostname)
            .set('Access-Control-Allow-Credentials', 'true')
            .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
            //.set('Access-Control-Request-Headers', 'Authorization, X-PING')
            .set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With, X-PING');
    }
    //private accessToken : string|null = null;
    //private loggedInUser : any = null;
    initLogin() {
        // Só inicia o login caso não existam o access code e o acess token
        if (this.accessCode && sessionStorage.getItem('accessToken')) {
            this.router.navigate(['/']); // Volta para a página inicial
            return;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('response_type', 'code')
            .set('client_id', this.env.clientId)
            .set('scope', 'read_public,write_public')
            .set('redirect_uri', this.env.redirectUri);
        // Redireciona para o site do Pinterest para fazer login
        window.location.href = this.env.authUrl + '?' + params.toString();
    }
    setAccessCode(accessCode) {
        this.accessCode = accessCode;
        this.getAccessToken();
    }
    getLoggedInUser() {
        // Somente procede à chamada de API se existir um access token
        if (!sessionStorage.getItem('accessToken')) {
            this.logOff(); // Log off forçado;
            return;
        }
        const endPoint = 'me/';
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('access_token', sessionStorage.getItem('accessToken'))
            .set('fields', 'id,username,first_name,last_name,bio,image');
        this.http.get(this.env.apiUri + endPoint, { params: params }).subscribe(user => {
            // JSON.stringify(): converte JSON para string
            sessionStorage.setItem('user', JSON.stringify(user['data']));
            console.log(user);
            this.router.navigate(['user']);
        }, error => {
            console.error(error);
        });
    }
    getUser() {
        let user = sessionStorage.getItem('user');
        if (user) {
            // JSON.parse(): converte string em JSON
            return JSON.parse(user);
        }
        else {
            return null;
        }
    }
    getAccessToken() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('grant_type', 'authorization_code')
            .set('client_id', this.env.clientId)
            .set('client_secret', this.env.clientSecret)
            .set('code', this.accessCode);
        this.http.post(this.env.tokenUri, null, { params: params }).subscribe(res => {
            console.log('--TOKEN--');
            sessionStorage.setItem('accessToken', res['access_token']);
            console.log(sessionStorage.getItem('accessToken'));
            this.getLoggedInUser();
            //this.router.navigate(['/']);
        }, error => {
            console.error('ERRO DE TOKEN');
            console.error(error);
            //this.router.navigate(['/login']);
        });
    }
    logOff() {
        this.accessCode = null;
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('user');
        this.router.navigate(['login']);
    }
    listBoards() {
        // Somente procede à chamada de API se existir um access token
        if (!sessionStorage.getItem('accessToken')) {
            this.logOff(); // Log off forçado;
            return;
        }
        const endPoint = 'me/boards';
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('access_token', sessionStorage.getItem('accessToken'))
            .set('scope', 'read_public');
        let fullUri = this.env.apiUri + endPoint + '?' + params.toString();
        return this.http.jsonp(fullUri, 'callback').toPromise();
    }
    listBoardPins(boardName) {
        // Somente procede à chamada de API se existir um access token
        if (!sessionStorage.getItem('accessToken')) {
            this.logOff(); // Log off forçado;
            return;
        }
        const endPoint = `boards/${this.getUser()['username']}/${boardName}/pins`;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('access_token', sessionStorage.getItem('accessToken'))
            .set('fields', 'id,url,note,image')
            .set('scope', 'read_public');
        let fullUri = this.env.apiUri + endPoint + '?' + params.toString();
        console.log(fullUri);
        return this.http.jsonp(fullUri, 'callback').toPromise();
    }
    isLoggedIn() {
        return sessionStorage.getItem('accessToken') != null;
    }
};
PinterestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PinterestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PinterestService);



/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "appName", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/ui/main-menu/main-menu.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/main-menu/main-menu.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/main-menu/main-menu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-menu/main-menu.component.ts ***!
  \*****************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pinterest.service */ "./src/app/services/pinterest.service.ts");



let MainMenuComponent = class MainMenuComponent {
    constructor(pinterest) {
        this.pinterest = pinterest;
    }
    ngOnInit() {
    }
    logOff() {
        this.pinterest.logOff();
    }
    hasUser() {
        return this.pinterest.getUser();
    }
};
MainMenuComponent.ctorParameters = () => [
    { type: _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__["PinterestService"] }
];
MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-menu',
        template: __webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/main-menu/main-menu.component.html"),
        styles: [__webpack_require__(/*! ./main-menu.component.scss */ "./src/app/ui/main-menu/main-menu.component.scss")]
    })
], MainMenuComponent);



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-image {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n}\n\n.example-card {\n  max-width: 400px;\n  margin: 0 auto;\n}\n\n.example-header-image {\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9DOlxcVXNlcnNcXDEwOTA0ODE3MTMwMTRcXERlc2t0b3BcXE5vdmEgcGFzdGFcXHBpbnVwbG9hZC9zcmNcXGFwcFxcdXNlclxcdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4gXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSIsIi5tYXQtY2FyZC1pbWFnZSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pinterest.service */ "./src/app/services/pinterest.service.ts");



let UserComponent = class UserComponent {
    constructor(pinterest) {
        this.pinterest = pinterest;
        this.avatarImage = '';
        this.avatarAlt = '';
    }
    ngOnInit() {
        // Busca os dados dos usuário no service
        this.user = this.pinterest.getUser();
        // Se existir a imagem 60x60
        if (this.user.image['60x60']) {
            this.avatarImage = this.user.image['60x60'].url;
            this.avatarAlt = `Foto de ${this.user.first_name} ${this.user.last_name}`;
        }
    }
    doLogoff() {
        this.pinterest.logOff();
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_pinterest_service__WEBPACK_IMPORTED_MODULE_2__["PinterestService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
    })
], UserComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    authUrl: 'https://api.pinterest.com/oauth/',
    redirectUri: 'https://ovatsug0705.github.io/pinupload/oauth2/callback',
    clientId: '5048714420883072404',
    tokenUri: 'https://api.pinterest.com/v1/oauth/token',
    apiUri: 'https://api.pinterest.com/v1/',
    clientSecret: 'd4346c7bb1c10673e46d6316f069c86916c363f65dc9e372d92f7b1048796011',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\1090481713014\Desktop\Nova pasta\pinupload\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map