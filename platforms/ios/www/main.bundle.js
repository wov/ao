webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__box_box_component__ = __webpack_require__("./src/app/box/box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approve_approve_component__ = __webpack_require__("./src/app/approve/approve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__approve_pending_approve_pending_component__ = __webpack_require__("./src/app/approve-pending/approve-pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__approve_finished_approve_finished_component__ = __webpack_require__("./src/app/approve-finished/approve-finished.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__attence_attence_component__ = __webpack_require__("./src/app/attence/attence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__attence_mine_attence_mine_component__ = __webpack_require__("./src/app/attence-mine/attence-mine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__attence_team_attence_team_component__ = __webpack_require__("./src/app/attence-team/attence-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vacation_vacation_component__ = __webpack_require__("./src/app/vacation/vacation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__event_event_component__ = __webpack_require__("./src/app/event/event.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'box', component: __WEBPACK_IMPORTED_MODULE_4__box_box_component__["a" /* BoxComponent */] },
    { path: 'approve',
        component: __WEBPACK_IMPORTED_MODULE_5__approve_approve_component__["a" /* ApproveComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__approve_pending_approve_pending_component__["a" /* ApprovePendingComponent */] },
            { path: 'pending', component: __WEBPACK_IMPORTED_MODULE_6__approve_pending_approve_pending_component__["a" /* ApprovePendingComponent */] },
            { path: 'finished', component: __WEBPACK_IMPORTED_MODULE_7__approve_finished_approve_finished_component__["a" /* ApproveFinishedComponent */] }
        ]
    },
    { path: 'attence',
        component: __WEBPACK_IMPORTED_MODULE_8__attence_attence_component__["a" /* AttenceComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_9__attence_mine_attence_mine_component__["a" /* AttenceMineComponent */] },
            { path: 'mine', component: __WEBPACK_IMPORTED_MODULE_9__attence_mine_attence_mine_component__["a" /* AttenceMineComponent */] },
            { path: 'team', component: __WEBPACK_IMPORTED_MODULE_10__attence_team_attence_team_component__["a" /* AttenceTeamComponent */] }
        ]
    },
    { path: 'vacation',
        component: __WEBPACK_IMPORTED_MODULE_11__vacation_vacation_component__["a" /* VacationComponent */],
    },
    { path: 'event',
        component: __WEBPACK_IMPORTED_MODULE_12__event_event_component__["a" /* EventComponent */],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '首页';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__box_box_component__ = __webpack_require__("./src/app/box/box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__approve_approve_component__ = __webpack_require__("./src/app/approve/approve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boxicons_boxicons_component__ = __webpack_require__("./src/app/boxicons/boxicons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__approve_pending_approve_pending_component__ = __webpack_require__("./src/app/approve-pending/approve-pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__approve_finished_approve_finished_component__ = __webpack_require__("./src/app/approve-finished/approve-finished.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__subtabs_subtabs_component__ = __webpack_require__("./src/app/subtabs/subtabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attence_attence_component__ = __webpack_require__("./src/app/attence/attence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__attence_mine_attence_mine_component__ = __webpack_require__("./src/app/attence-mine/attence-mine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__attence_team_attence_team_component__ = __webpack_require__("./src/app/attence-team/attence-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vacation_vacation_component__ = __webpack_require__("./src/app/vacation/vacation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__eventlist_eventlist_component__ = __webpack_require__("./src/app/eventlist/eventlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__event_event_component__ = __webpack_require__("./src/app/event/event.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__box_box_component__["a" /* BoxComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__approve_approve_component__["a" /* ApproveComponent */],
                __WEBPACK_IMPORTED_MODULE_11__boxicons_boxicons_component__["a" /* BoxiconsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__approve_pending_approve_pending_component__["a" /* ApprovePendingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__approve_finished_approve_finished_component__["a" /* ApproveFinishedComponent */],
                __WEBPACK_IMPORTED_MODULE_14__subtabs_subtabs_component__["a" /* SubtabsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__attence_attence_component__["a" /* AttenceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__attence_mine_attence_mine_component__["a" /* AttenceMineComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attence_team_attence_team_component__["a" /* AttenceTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__vacation_vacation_component__["a" /* VacationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__eventlist_eventlist_component__["a" /* EventlistComponent */],
                __WEBPACK_IMPORTED_MODULE_21__event_event_component__["a" /* EventComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/approve-finished/approve-finished.component.html":
/***/ (function(module, exports) {

module.exports = "<app-subtabs [tabs]=\"tabs\"></app-subtabs>\n<app-eventlist [events]=\"events\"></app-eventlist>"

/***/ }),

/***/ "./src/app/approve-finished/approve-finished.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/approve-finished/approve-finished.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveFinishedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApproveFinishedComponent = /** @class */ (function () {
    function ApproveFinishedComponent() {
        this.tabs = [{
                "url": "/approve/pending",
                "name": "我的代办"
            }, {
                "url": "/approve/finished",
                "name": "我的已办",
                "current": true
            }];
        this.events = [{
                link: "/event"
            }];
    }
    ApproveFinishedComponent.prototype.ngOnInit = function () {
    };
    ApproveFinishedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-approve-finished',
            template: __webpack_require__("./src/app/approve-finished/approve-finished.component.html"),
            styles: [__webpack_require__("./src/app/approve-finished/approve-finished.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApproveFinishedComponent);
    return ApproveFinishedComponent;
}());



/***/ }),

/***/ "./src/app/approve-pending/approve-pending.component.html":
/***/ (function(module, exports) {

module.exports = "<app-subtabs [tabs]=\"tabs\"></app-subtabs>\n<app-eventlist [events]=\"events\"></app-eventlist>"

/***/ }),

/***/ "./src/app/approve-pending/approve-pending.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/approve-pending/approve-pending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovePendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApprovePendingComponent = /** @class */ (function () {
    function ApprovePendingComponent() {
        this.tabs = [{
                "url": "/approve/pending",
                "name": "我的代办",
                "current": true
            }, {
                "url": "/approve/finished",
                "name": "我的已办"
            }];
        this.events = [{
                link: "/event"
            }, {
                link: "/event"
            }];
    }
    ApprovePendingComponent.prototype.ngOnInit = function () {
    };
    ApprovePendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-approve-pending',
            template: __webpack_require__("./src/app/approve-pending/approve-pending.component.html"),
            styles: [__webpack_require__("./src/app/approve-pending/approve-pending.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApprovePendingComponent);
    return ApprovePendingComponent;
}());



/***/ }),

/***/ "./src/app/approve/approve.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [header]=\"header\" ></app-header>\n\n<div class=\"page\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/approve/approve.component.scss":
/***/ (function(module, exports) {

module.exports = ".page {\n  min-height: 100%;\n  padding-top: 45px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(241, 245, 249, 0.5); }\n"

/***/ }),

/***/ "./src/app/approve/approve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApproveComponent = /** @class */ (function () {
    function ApproveComponent() {
        this.header = {
            title: "审批"
        };
    }
    ApproveComponent.prototype.ngOnInit = function () {
    };
    ApproveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-approve',
            template: __webpack_require__("./src/app/approve/approve.component.html"),
            styles: [__webpack_require__("./src/app/approve/approve.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApproveComponent);
    return ApproveComponent;
}());



/***/ }),

/***/ "./src/app/attence-mine/attence-mine.component.html":
/***/ (function(module, exports) {

module.exports = "<app-subtabs [tabs]=\"tabs\"></app-subtabs>"

/***/ }),

/***/ "./src/app/attence-mine/attence-mine.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/attence-mine/attence-mine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttenceMineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttenceMineComponent = /** @class */ (function () {
    function AttenceMineComponent() {
        this.tabs = [{
                "url": "/attence/mine",
                "name": "我的考勤"
            }, {
                "url": "/attence/team",
                "name": "我的团队"
            }];
    }
    AttenceMineComponent.prototype.ngOnInit = function () {
    };
    AttenceMineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-attence-mine',
            template: __webpack_require__("./src/app/attence-mine/attence-mine.component.html"),
            styles: [__webpack_require__("./src/app/attence-mine/attence-mine.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AttenceMineComponent);
    return AttenceMineComponent;
}());



/***/ }),

/***/ "./src/app/attence-team/attence-team.component.html":
/***/ (function(module, exports) {

module.exports = "<app-subtabs [tabs]=\"tabs\"></app-subtabs>"

/***/ }),

/***/ "./src/app/attence-team/attence-team.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/attence-team/attence-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttenceTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttenceTeamComponent = /** @class */ (function () {
    function AttenceTeamComponent() {
        this.tabs = [{
                "url": "/attence/mine",
                "name": "我的考勤"
            }, {
                "url": "/attence/team",
                "name": "我的团队"
            }];
    }
    AttenceTeamComponent.prototype.ngOnInit = function () {
    };
    AttenceTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-attence-team',
            template: __webpack_require__("./src/app/attence-team/attence-team.component.html"),
            styles: [__webpack_require__("./src/app/attence-team/attence-team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AttenceTeamComponent);
    return AttenceTeamComponent;
}());



/***/ }),

/***/ "./src/app/attence/attence.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [header]=\"header\" ></app-header>\n\n<div class=\"page\">\n    <app-profile></app-profile>\n    <router-outlet></router-outlet>\n</div>\n\n\n<app-footer [navs]=\"navs\"></app-footer>\n"

/***/ }),

/***/ "./src/app/attence/attence.component.scss":
/***/ (function(module, exports) {

module.exports = ".page {\n  min-height: 100%;\n  padding-top: 44px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(241, 245, 249, 0.5); }\n"

/***/ }),

/***/ "./src/app/attence/attence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttenceComponent = /** @class */ (function () {
    function AttenceComponent() {
        this.header = { "title": "考勤" };
        this.navs = [{
                "url": "/vacation",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "假期"
            }, {
                "url": "/attence",
                "name": "考勤",
                "image": "http://placeholder.qiniudn.com/48x48",
                "current": true
            }, {
                "url": "",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "公告"
            }];
    }
    AttenceComponent.prototype.ngOnInit = function () {
    };
    AttenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-attence',
            template: __webpack_require__("./src/app/attence/attence.component.html"),
            styles: [__webpack_require__("./src/app/attence/attence.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AttenceComponent);
    return AttenceComponent;
}());



/***/ }),

/***/ "./src/app/box/box.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [header]=\"header\" ></app-header>\n\n<div class=\"page\">\n    <app-boxicons [box]=\"box\"></app-boxicons> \n</div>\n\n\n<app-footer [navs]=\"navs\"></app-footer>\n"

/***/ }),

/***/ "./src/app/box/box.component.scss":
/***/ (function(module, exports) {

module.exports = ".page {\n  padding-top: 44px; }\n"

/***/ }),

/***/ "./src/app/box/box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxComponent = /** @class */ (function () {
    function BoxComponent(location) {
        this.location = location;
        this.header = {
            "title": "百宝盒"
        };
        this.navs = [{
                "url": "/",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "首页",
            }, {
                "url": "",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "消息"
            }, {
                "url": "/box",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "百宝箱",
                "current": true
            }, {
                "url": "",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "我的"
            }];
        this.box = {
            headline: "所有功能",
            subTitle: "可在此定制化展示在首页的功能",
            boxicons: [{
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "差旅管理"
                }, {
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "薪资查询"
                }, {
                    "url": "/approve/pending",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "统一审批"
                }, {
                    "url": "/attence",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "考勤假期"
                }, {
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "及时通信"
                }, {
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "问卷调查"
                }, {
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "会议管理"
                }]
        };
    }
    BoxComponent.prototype.ngOnInit = function () {
    };
    BoxComponent.prototype.goBack = function () {
        this.location.back();
    };
    BoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-box',
            template: __webpack_require__("./src/app/box/box.component.html"),
            styles: [__webpack_require__("./src/app/box/box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], BoxComponent);
    return BoxComponent;
}());



/***/ }),

/***/ "./src/app/boxicons/boxicons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"commonFn\">\n    <div class=\"head\">\n        <h2>{{box.headline}}</h2>\n        <p class=\"desc\">{{box.subTitle}}</p>\n    </div>\n\n    <ul class=\"iconList\">\n        <li *ngFor=\"let icon of box.boxicons\"\n            [class.current]=\"icon.current\"\n            >\n            <a \n                routerLink={{icon.url}}\n                [class.unactived]=\"!icon.url\"\n                >\n                <div class=\"iconBox\">\n                    <img src=\"{{icon.image}}\" alt=\"\">\n                </div>\n                <div class=\"iconText\">{{icon.name}}</div>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/boxicons/boxicons.component.scss":
/***/ (function(module, exports) {

module.exports = ".commonFn {\n  margin: 20px; }\n\n.head h2 {\n  line-height: 30px;\n  font-size: 16px;\n  font-weight: normal;\n  color: #000; }\n\n.head .desc {\n  line-height: 16px;\n  color: #000; }\n\n.iconList:after {\n  content: '';\n  display: table;\n  clear: both; }\n\n.iconList li {\n  float: left;\n  width: 22%;\n  margin-top: 10px;\n  margin-right: 4%; }\n\n.iconList li:nth-child(4n) {\n    margin-right: 0; }\n\n.iconList li a {\n    display: block;\n    color: #000; }\n\n.iconList li a.unactived {\n      opacity: 0.3;\n      pointer-events: none; }\n\n.iconList li .iconBox {\n    width: 48px;\n    height: 48px;\n    margin: 0 auto;\n    padding: 10px 0 5px;\n    overflow: hidden;\n    border-radius: 50%; }\n\n.iconList li .iconBox img {\n      display: block;\n      width: 48px;\n      height: 48px;\n      border-radius: 50%; }\n\n.iconList li .iconText {\n    line-height: 26px;\n    overflow: hidden;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/boxicons/boxicons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxiconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxiconsComponent = /** @class */ (function () {
    function BoxiconsComponent() {
    }
    BoxiconsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BoxiconsComponent.prototype, "box", void 0);
    BoxiconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-boxicons',
            template: __webpack_require__("./src/app/boxicons/boxicons.component.html"),
            styles: [__webpack_require__("./src/app/boxicons/boxicons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BoxiconsComponent);
    return BoxiconsComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [header]=\"header\"></app-header>\n<div class=\"page\">\n    <div class=\"eventTab\">\n        <ul>\n            <li class=\"current\">\n                基本信息\n            </li>\n            <li>\n                审批信息\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"basicInfo\">\n        <div class=\"info\">\n            <ul>\n                <li>\n                    <div class=\"label\">发起人</div>\n                    <div class=\"centent\">张丹</div>\n                </li>\n                <li>\n                    <div class=\"label\">申请日期</div>\n                    <div class=\"centent\">2018/03/21</div>\n                </li>\n                <li>\n                    <div class=\"label\">单据号</div>\n                    <div class=\"centent\">10101010101001</div>\n                </li>\n                <li>\n                    <div class=\"label\">附件</div>\n                    <div class=\"centent\">休假期间工作交接说明.word</div>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"period\">\n            <div class=\"from\">\n                <div class=\"day\">18</div>\n                <div class=\"monthandweek\">\n                    <div class=\"month\">9月</div>\n                    <div class=\"week\">周一</div>\n                </div>\n            </div>\n            <div class=\"time\">\n                3 days\n            </div>\n            <div class=\"end\">\n                <div class=\"day\">20</div>\n                <div class=\"monthandweek\">\n                    <div class=\"month\">9月</div>\n                    <div class=\"week\">周三</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"explanation\">\n            <div class=\"title\">休假说明</div>\n            <div class=\"content\">\n                <div class=\"textarea\">家中有急事，需要回家处理，工作我已经交接好，请领导放心</div>\n            </div>\n        </div>\n\n        <div class=\"backup\">\n            <div class=\"title\">工作托管</div>\n\n            <div class=\"avatars\">\n                <ul>\n                    <li>\n                        <div class=\"avatar\">\n                            <img src=\"http://placeholder.qiniudn.com/64x64\" alt=\"\">\n                        </div>\n                        <div class=\"name\">李勋</div>\n                    </li>\n                    <li>\n                        <div class=\"avatar\">\n                            <img src=\"http://placeholder.qiniudn.com/64x64\" alt=\"\">\n                        </div>\n                        <div class=\"name\">李勋</div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"processInfo\">\n\n\n    </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/event/event.component.scss":
/***/ (function(module, exports) {

module.exports = ".page {\n  min-height: 100%;\n  padding-top: 45px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(241, 245, 249, 0.5); }\n\n.eventTab {\n  margin-bottom: 1px; }\n\n.eventTab ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 50px;\n    background-color: #fff; }\n\n.eventTab ul li {\n      line-height: 50px;\n      margin: 0 30px;\n      padding: 0 10px;\n      font-size: 14px; }\n\n.eventTab ul li.current {\n        position: relative; }\n\n.eventTab ul li.current::after {\n          content: '';\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 2px;\n          background-color: #007AFF; }\n\n.info {\n  margin-bottom: 10px;\n  background-color: #fff; }\n\n.info ul {\n    padding: 8px 12px; }\n\n.info li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    line-height: 26px;\n    font-size: 13px; }\n\n.info li .label {\n      width: 5em; }\n\n.info li .content {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n\n.period {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 66px;\n  background-color: #fff; }\n\n.period .from, .period .end {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.period .from .day, .period .end .day {\n      width: 55px;\n      font-size: 32px; }\n\n.period .from .monthandweek .month, .period .from .monthandweek .week, .period .end .monthandweek .month, .period .end .monthandweek .week {\n      line-height: 16px;\n      font-size: 10px; }\n\n.period .time {\n    width: 70px;\n    height: 24px;\n    line-height: 24px;\n    border-radius: 10px;\n    text-align: center;\n    background-color: #007AFF;\n    font-size: 10px; }\n\n.explanation .title {\n  line-height: 34px;\n  padding: 0 12px;\n  font-size: 14px; }\n\n.explanation .content {\n  padding: 12px;\n  background-color: #fff; }\n\n.explanation .content .textarea {\n    line-height: 22px;\n    padding: 10px 12px;\n    border-radius: 3px;\n    border: 1px solid #D2D6DA;\n    font-size: 14px; }\n\n.backup .title {\n  line-height: 34px;\n  padding: 0 12px;\n  font-size: 14px; }\n\n.backup .avatars {\n  background-color: #fff; }\n\n.backup .avatars ul {\n    padding: 0 10px 10px; }\n\n.backup .avatars ul::after {\n      content: '';\n      display: table;\n      clear: both; }\n\n.backup .avatars ul li {\n      float: left;\n      margin: 12px 8px 0 8px; }\n\n.backup .avatars ul li .avatar {\n        width: 46px;\n        height: 46px;\n        border-radius: 50%;\n        overflow: hidden; }\n\n.backup .avatars ul li .avatar img {\n          display: block;\n          width: 46px;\n          height: 46px;\n          border-radius: 50%; }\n\n.backup .avatars ul li .name {\n        line-height: 30px;\n        text-align: center; }\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventComponent = /** @class */ (function () {
    function EventComponent() {
        this.header = {
            "title": "待审批事件名称",
            "left": {
                "type": "back"
            }
        };
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("./src/app/event/event.component.html"),
            styles: [__webpack_require__("./src/app/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/eventlist/eventlist.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let event of events\">\n        <a routerLink={{event.link}}>\n            <div class=\"img\">\n                <img src=\"http://placeholder.qiniudn.com/64x64\" alt=\"\">\n            </div>\n\n            <div class=\"info\">\n                <div class=\"name\">Lu yu</div>\n                <div class=\"content\">休假日期：2018/09/18-09/20</div>\n                <div class=\"content\">串休日期：2018/09/18-09/20</div>\n            </div>\n\n            <div class=\"period\">3<span>day</span></div>\n        </a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/eventlist/eventlist.component.scss":
/***/ (function(module, exports) {

module.exports = "ul li {\n  margin-bottom: 3px;\n  background-color: #fff; }\n  ul li a {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 12px 20px;\n    color: #000; }\n  ul li .img {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    overflow: hidden; }\n  ul li .img img {\n      display: block;\n      width: 32px;\n      height: 32px;\n      border-radius: 50%; }\n  ul li .info {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    min-height: 66px;\n    margin: 0 15px; }\n  ul li .info .name {\n      line-height: 22px; }\n  ul li .info .content {\n      line-height: 22px;\n      opacity: .4; }\n  ul li .period {\n    margin: auto;\n    font-size: 30px; }\n  ul li .period span {\n      opacity: .4;\n      font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/eventlist/eventlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventlistComponent = /** @class */ (function () {
    function EventlistComponent() {
    }
    EventlistComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EventlistComponent.prototype, "events", void 0);
    EventlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eventlist',
            template: __webpack_require__("./src/app/eventlist/eventlist.component.html"),
            styles: [__webpack_require__("./src/app/eventlist/eventlist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventlistComponent);
    return EventlistComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <ul>\n        <li *ngFor=\"let nav of navs\"\n            [class.current]=\"nav.current\"\n            >\n            <a \n                routerLink={{nav.url}}\n                [class.unactived]=\"!nav.url\"\n                >\n                <div class=\"iconBox\">\n                    <img src=\"{{nav.image}}\" alt=\"\">\n                </div>\n                <div class=\"iconText\">{{nav.name}}</div>\n            </a>\n        </li>\n    </ul>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "footer {\n  height: 50px;\n  line-height: 50px;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  z-index: 250;\n  background: #F8F8F8; }\n  footer ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  footer li {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  footer li a {\n      display: block;\n      padding-top: 5px;\n      color: #929292; }\n  footer li a.unactived {\n        opacity: 0.3;\n        pointer-events: none; }\n  footer li .iconBox {\n      width: 24px;\n      height: 24px;\n      margin: 0 auto;\n      overflow: hidden;\n      border-radius: 50%; }\n  footer li .iconBox img {\n        display: block;\n        width: 24px;\n        height: 24px;\n        border-radius: 50%; }\n  footer li .iconText {\n      line-height: 20px;\n      overflow: hidden;\n      text-align: center;\n      font-size: 10px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "navs", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
// header.ts
var Header = /** @class */ (function () {
    function Header() {
    }
    return Header;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <a *ngIf=\"header.left\" class=\"leftIcon icon\">\n        <img src=\"/assets/icons/back.svg\" />\n    </a>\n\n\n    <div class=\"name\">{{header.title}}</div>\n    <a href=\"\" class=\"rightIcon icon\"></a>\n</header>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  height: 44px;\n  line-height: 44px;\n  position: fixed;\n  top: 0;\n  z-index: 150;\n  width: 100%;\n  background: #fff;\n  z-index: 100;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  header .icon {\n    width: 30px; }\n  header .icon img {\n      width: 100%;\n      height: 100%;\n      display: inline-block; }\n  header .name {\n    text-align: center;\n    font-size: 19px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__("./src/app/header.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__header__["a" /* Header */])
    ], HeaderComponent.prototype, "header", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [header]=\"header\" ></app-header>\n\n<div class=\"page\">\n    <div class=\"carousel\">\n        <img src=\"assets/img/header.jpg\" alt=\"\">\n    </div>\n\n    <app-boxicons [box]=\"box\"></app-boxicons> \n\n    <div class=\"news\">\n        <img src=\"assets/img/news.jpg\" alt=\"\">\n    </div>\n</div>\n\n<app-footer [navs]=\"navs\"></app-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".page {\n  padding-top: 44px; }\n\n.carousel {\n  opacity: 0.3; }\n\nimg {\n  max-width: 100%; }\n\n.news {\n  opacity: 0.3; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.header = { "title": "首页" };
        this.navs = [{
                "url": "/",
                "name": "首页",
                "image": "http://placeholder.qiniudn.com/48x48",
                "current": true
            }, {
                "url": "",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "消息"
            }, {
                "url": "/box",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "百宝箱"
            }, {
                "url": "",
                "image": "http://placeholder.qiniudn.com/48x48",
                "name": "我的"
            }];
        this.box = {
            headline: "常用功能",
            subTitle: "定制化首页功能",
            boxicons: [{
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "差旅管理"
                }, {
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "薪资查询"
                }, {
                    "url": "/approve/pending",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "统一审批"
                }, {
                    "url": "/attence",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "考勤假期"
                }, {
                    "url": "",
                    "image": "http://placeholder.qiniudn.com/96x96",
                    "name": "会议管理"
                }]
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <img src=\"\" alt=\"上汽集团\">\n</div>\n\n<form>\n    <ul>\n        <li>\n            <label >\n                <input type=\"text\" [(ngModel)]=\"user.name\" placeholder=\"请输入账号\">\n            </label>\n        </li>\n        <li>\n            <label>\n                <input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"请输入密码\" >\n            </label>\n        </li>\n    </ul>\n\n    <button>登陆</button>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\n    <div class=\"avatar\">\n        <img src=\"http://placeholder.qiniudn.com/92x92\" alt=\"\">\n    </div>\n    <div class=\"info\">\n        <div class=\"nameAndId\">\n            <span>name</span> <span>id</span>\n        </div>\n        <div class=\"organizationAndTitle\">\n            <span>organization</span>|\n            <span>IT开发工程师</span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".profile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  padding: 16px 20px;\n  background-color: #fff; }\n  .profile .avatar {\n    width: 46px;\n    height: 46px;\n    margin-right: 15px;\n    border-radius: 50%;\n    overflow: hidden; }\n  .profile .avatar img {\n      display: block;\n      width: 46px;\n      height: 46px;\n      border-radius: 50%; }\n  .profile .info {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .profile .info .nameAndId {\n      line-height: 20px;\n      font-size: 14px; }\n  .profile .info .nameAndId span {\n        margin-right: 5px; }\n  .profile .info .organizationAndTitle {\n      line-height: 20px; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/subtabs/subtabs.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let tab of tabs\"\n        [class.current]=\"tab.current\"\n        >\n        <a routerLink={{tab.url}}>\n            {{tab.name}}\n        </a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/subtabs/subtabs.component.scss":
/***/ (function(module, exports) {

module.exports = "ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  background-color: #fff;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  overflow-scrolling: touch; }\n  ul li {\n    line-height: 50px;\n    margin: 0 10px 0 20px; }\n  ul li a {\n      display: block;\n      font-size: 14px;\n      color: #000;\n      white-space: nowrap; }\n  ul li.current {\n      position: relative; }\n  ul li.current::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        height: 2px;\n        background-color: #007AFF; }\n"

/***/ }),

/***/ "./src/app/subtabs/subtabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubtabsComponent = /** @class */ (function () {
    function SubtabsComponent() {
    }
    SubtabsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SubtabsComponent.prototype, "tabs", void 0);
    SubtabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subtabs',
            template: __webpack_require__("./src/app/subtabs/subtabs.component.html"),
            styles: [__webpack_require__("./src/app/subtabs/subtabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubtabsComponent);
    return SubtabsComponent;
}());



/***/ }),

/***/ "./src/app/vacation/vacation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  vacation works!\n</p>\n"

/***/ }),

/***/ "./src/app/vacation/vacation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vacation/vacation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VacationComponent = /** @class */ (function () {
    function VacationComponent() {
    }
    VacationComponent.prototype.ngOnInit = function () {
    };
    VacationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vacation',
            template: __webpack_require__("./src/app/vacation/vacation.component.html"),
            styles: [__webpack_require__("./src/app/vacation/vacation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VacationComponent);
    return VacationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map