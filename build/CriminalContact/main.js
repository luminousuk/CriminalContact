(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/renderer/$$_lazy_route_resource lazy recursive":
/*!*******************************************************************!*\
  !*** ./src/renderer/$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************************/
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
webpackEmptyAsyncContext.id = "./src/renderer/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/renderer/app/app-routing.module.ts":
/*!************************************************!*\
  !*** ./src/renderer/app/app-routing.module.ts ***!
  \************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/renderer/app/dashboard/dashboard.component.ts");
/* harmony import */ var _banking_banking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banking/banking.component */ "./src/renderer/app/banking/banking.component.ts");
/* harmony import */ var _bank_test_bank_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-test/bank-test.component */ "./src/renderer/app/bank-test/bank-test.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./players/players.component */ "./src/renderer/app/players/players.component.ts");







var routes = [
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: "players", component: _players_players_component__WEBPACK_IMPORTED_MODULE_6__["PlayersComponent"] },
    { path: "banking", component: _banking_banking_component__WEBPACK_IMPORTED_MODULE_4__["BankingComponent"] },
    { path: "bank-test", component: _bank_test_bank_test_component__WEBPACK_IMPORTED_MODULE_5__["BankTestComponent"] },
    { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: false
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/renderer/app/app.component.html":
/*!*********************************************!*\
  !*** ./src/renderer/app/app.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cc-sidebar></cc-sidebar>\n<div class=\"container-fluid pl-5 pt-2\">\n  <div class=\"row\">\n    <main role=\"main\" class=\"col\">\n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/renderer/app/app.component.scss":
/*!*********************************************!*\
  !*** ./src/renderer/app/app.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcmVuZGVyZXIvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/renderer/app/app.component.ts":
/*!*******************************************!*\
  !*** ./src/renderer/app/app.component.ts ***!
  \*******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/file.service */ "./src/renderer/app/services/file.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(fileService) {
        this.fileService = fileService;
        this.title = 'CriminalContact';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.fileService.getFiles()
        //   .then((files: string[]) => {
        //     console.log(files);
        //   });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/renderer/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/renderer/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/renderer/app/app.module.ts":
/*!****************************************!*\
  !*** ./src/renderer/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/renderer/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/renderer/app/app.component.ts");
/* harmony import */ var _bank_test_bank_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bank-test/bank-test.component */ "./src/renderer/app/bank-test/bank-test.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/renderer/app/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/renderer/app/dashboard/dashboard.component.ts");
/* harmony import */ var _banking_banking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banking/banking.component */ "./src/renderer/app/banking/banking.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./players/players.component */ "./src/renderer/app/players/players.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _bank_test_bank_test_component__WEBPACK_IMPORTED_MODULE_7__["BankTestComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _banking_banking_component__WEBPACK_IMPORTED_MODULE_10__["BankingComponent"],
                _players_players_component__WEBPACK_IMPORTED_MODULE_11__["PlayersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/renderer/app/bank-test/bank-test.component.html":
/*!*************************************************************!*\
  !*** ./src/renderer/app/bank-test/bank-test.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-8\">\n    <h2>Players</h2>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Account #</th>\n          <th scope=\"col\">Balance</th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let player of players\">\n        <tr>\n          <td>{{player.name}}</td>\n          <td>{{player.account.accountNumber}}</td>\n          <td>{{player.account.balance | currency:\"£\"}}</td>\n          <td>\n              <button class=\"btn btn-sm btn-secondary\" (click)=\"showTransactions(player)\">Transactions</button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deletePlayer(player)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <th></th>\n          <th></th>\n          <th>{{getTotalPlayerBalance() | currency:\"£\"}}</th>\n          <th></th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n  <div class=\"col-4\">\n    <div class=\"card mb-2\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Interest</h5>\n        <div class=\"form-group\">\n          <label for=\"interestPct\">Interest %</label>\n          <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"interestPct\" id=\"interestPct\">\n        </div>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"addInterest()\">Add Interest</button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Transfer money</h5>\n        <div class=\"form-group\">\n          <label for=\"newPlayerName\">From</label>\n          <select [(ngModel)]=\"transferFrom\" class=\"form-control form-control-sm\">\n              <option *ngFor=\"let player of players\" [ngValue]=\"player\">{{player.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"newPlayerName\">To</label>\n            <select [(ngModel)]=\"transferTo\" class=\"form-control form-control-sm\">\n                <option *ngFor=\"let player of players\" [ngValue]=\"player\">{{player.name}}</option>\n            </select>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"newPlayerName\">Amount</label>\n          <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"transferAmount\" id=\"transferAmount\">\n        </div>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"transfer()\">Transfer</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/renderer/app/bank-test/bank-test.component.scss":
/*!*************************************************************!*\
  !*** ./src/renderer/app/bank-test/bank-test.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcmVuZGVyZXIvYXBwL2JhbmstdGVzdC9iYW5rLXRlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/renderer/app/bank-test/bank-test.component.ts":
/*!***********************************************************!*\
  !*** ./src/renderer/app/bank-test/bank-test.component.ts ***!
  \***********************************************************/
/*! exports provided: BankTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankTestComponent", function() { return BankTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bank.service */ "./src/renderer/app/services/bank.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/player.service */ "./src/renderer/app/services/player.service.ts");




var BankTestComponent = /** @class */ (function () {
    function BankTestComponent(_bankService, _playerService) {
        this._bankService = _bankService;
        this._playerService = _playerService;
        this.interestPct = 0.1;
    }
    BankTestComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BankTestComponent.prototype, "players", {
        get: function () {
            return this._playerService.players;
        },
        enumerable: true,
        configurable: true
    });
    BankTestComponent.prototype.deletePlayer = function (player) {
        this._playerService.deletePlayer(player);
    };
    BankTestComponent.prototype.transfer = function () {
        var from = this.transferFrom.account.accountNumber;
        var to = this.transferTo.account.accountNumber;
        this._bankService.TransferFunds(from, to, this.transferAmount);
    };
    BankTestComponent.prototype.getTotalPlayerBalance = function () {
        var total = 0;
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            total += player.account.balance;
        }
        return total;
    };
    BankTestComponent.prototype.addInterest = function () {
        this._bankService.GenerateInterest(this.interestPct);
    };
    BankTestComponent.prototype.showTransactions = function (player) {
        console.log("Transaction history for " + player.name);
        player.account.transactions.forEach(function (t) {
            console.log(t.description + " - \u00A3" + t.amount.toFixed(2) + " - \u00A3" + t.cumulativeBalance.toFixed(2));
        });
        console.log("Current balance: \u00A3" + player.account.balance);
    };
    BankTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cc-bank-test',
            template: __webpack_require__(/*! ./bank-test.component.html */ "./src/renderer/app/bank-test/bank-test.component.html"),
            styles: [__webpack_require__(/*! ./bank-test.component.scss */ "./src/renderer/app/bank-test/bank-test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bank_service__WEBPACK_IMPORTED_MODULE_2__["BankService"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], BankTestComponent);
    return BankTestComponent;
}());



/***/ }),

/***/ "./src/renderer/app/banking/banking.component.html":
/*!*********************************************************!*\
  !*** ./src/renderer/app/banking/banking.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  banking works!\n</p>\n"

/***/ }),

/***/ "./src/renderer/app/banking/banking.component.scss":
/*!*********************************************************!*\
  !*** ./src/renderer/app/banking/banking.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcmVuZGVyZXIvYXBwL2JhbmtpbmcvYmFua2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/renderer/app/banking/banking.component.ts":
/*!*******************************************************!*\
  !*** ./src/renderer/app/banking/banking.component.ts ***!
  \*******************************************************/
/*! exports provided: BankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingComponent", function() { return BankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BankingComponent = /** @class */ (function () {
    function BankingComponent() {
    }
    BankingComponent.prototype.ngOnInit = function () {
    };
    BankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cc-banking',
            template: __webpack_require__(/*! ./banking.component.html */ "./src/renderer/app/banking/banking.component.html"),
            styles: [__webpack_require__(/*! ./banking.component.scss */ "./src/renderer/app/banking/banking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BankingComponent);
    return BankingComponent;
}());



/***/ }),

/***/ "./src/renderer/app/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./src/renderer/app/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-3\">Criminal Contact</h1>\n<hr />\n<div class=\"card-deck\">\n    <div class=\"card\">\n      <a routerLink=\"/players\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Players</h5>\n          <p class=\"card-text h1 text-success\">{{playerCount}}</p>\n        </div>\n      </a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Transactions</h5>\n        <p class=\"card-text h1 text-warning\">{{transactionCount}}</p>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Deaths</h5>\n        <p class=\"card-text h1 text-danger\">{{deathCount}}</p>\n      </div>\n    </div>\n  </div>\n  <hr />\n  <button class=\"btn btn-primary btn-lg\" (click)=\"seedPlayers()\">Seed Players</button>"

/***/ }),

/***/ "./src/renderer/app/dashboard/dashboard.component.scss":
/*!*************************************************************!*\
  !*** ./src/renderer/app/dashboard/dashboard.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card a {\n  color: inherit; }\n  .card a:hover {\n    text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlci9hcHAvZGFzaGJvYXJkL0Q6XFxDT0RFXFxHSVRcXExVTUlOT1VTXFxDcmltaW5hbENvbnRhY3Qvc3JjXFxyZW5kZXJlclxcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWMsRUFBQTtFQUZ0QjtJQUtZLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9yZW5kZXJlci9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/renderer/app/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/renderer/app/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player.service */ "./src/renderer/app/services/player.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_playerService) {
        this._playerService = _playerService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DashboardComponent.prototype, "playerCount", {
        get: function () {
            return this._playerService.players.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "transactionCount", {
        get: function () {
            var transactionCount = 0;
            for (var _i = 0, _a = this._playerService.players; _i < _a.length; _i++) {
                var player = _a[_i];
                transactionCount += player.account.transactions.length;
            }
            return transactionCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "deathCount", {
        get: function () {
            return this._playerService.players.filter(function (p) { return p.isDead; }).length;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.seedPlayers = function () {
        var _this = this;
        [
            { firstName: "Jeff", lastName: "Goldblum", startingAmount: 5000 },
            { firstName: "Brian", lastName: "Blessed", startingAmount: 1750 },
            { firstName: "Tony", lastName: "Hawk", startingAmount: 4500 },
            { firstName: "Lionel", lastName: "Ritchie", startingAmount: 9900 },
            { firstName: "Bruce", lastName: "Willis", startingAmount: 7420 },
            { firstName: "Bill", lastName: "Gates", startingAmount: 50000 },
            { firstName: "Katy", lastName: "Price", startingAmount: 2130 },
            { firstName: "Princess", lastName: "Peach", startingAmount: 6400 },
            { firstName: "Snoop", lastName: "Dogg", startingAmount: 420 },
            { firstName: "Arnold", lastName: "Schwarzeneggar", startingAmount: 6666 }
        ].forEach(function (p) {
            _this._playerService.createPlayer(p.firstName, p.lastName, p.startingAmount);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cc-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/renderer/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/renderer/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/renderer/app/players/players.component.html":
/*!*********************************************************!*\
  !*** ./src/renderer/app/players/players.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  <span>Players</span>\n  <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"createPlayer()\">\n    Create Player\n  </button>\n</h2>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Account #</th>\n      <th scope=\"col\">Balance</th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let player of players\" [class.table-danger]=\"player.isDead\">\n      <td>{{player.name}}</td>\n      <td>{{player.account.accountNumber}}</td>\n      <td>{{player.account.balance | currency:\"£\"}}</td>\n      <td class=\"text-right\">\n        <div ngbDropdown placement=\"bottom-right\">\n          <button class=\"btn btn-sm btn-light\" ngbDropdownToggle>Actions</button>\n          <div ngbDropdownMenu class=\"dropdown-menu-right\">\n            <button class=\"dropdown-item\">Transactions</button>\n            <div class=\"dropdown-divider\"></div>\n            <button class=\"dropdown-item\">Edit</button>\n            <button class=\"dropdown-item text-danger\" (click)=\"setDead(player)\">Mark as Dead</button>\n            <button class=\"dropdown-item text-danger\" (click)=\"deletePlayer(player)\">Delete</button>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<ng-template #confirmDeleteModal let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete Player</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    Are you sure you wish to delete this player?\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" ngbAutofocus (click)=\"modal.dismiss()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close()\">Delete</button>\n  </div>\n</ng-template>\n<ng-template #addPlayerModal let-modal>\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Player</h5>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"create-player-name\" class=\"col-form-label\">First Name:</label>\n        <input type=\"text\" class=\"form-control\" id=\"create-player-name\" [(ngModel)]=\"createPlayerFirstName\" ngbAutofocus required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"create-player-name\" class=\"col-form-label\">Last Name:</label>\n        <input type=\"text\" class=\"form-control\" id=\"create-player-name\" [(ngModel)]=\"createPlayerLastName\" ngbAutofocus required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"create-player-amount\" class=\"col-form-label\">Starting amount:</label>\n        <input type=\"number\" class=\"form-control\" id=\"create-player-amount\" value=\"1000\" step=\"100\" [(ngModel)]=\"createPlayerAmount\" required>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" ngbAutofocus (click)=\"modal.dismiss()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"modal.close()\">Create</button>\n    </div>\n  </ng-template>\n  <ng-template #confirmDeadModal let-modal>\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Player Death</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure you wish to mark this player as dead?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" ngbAutofocus (click)=\"modal.dismiss()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close()\">Mark Dead</button>\n      </div>\n    </ng-template>"

/***/ }),

/***/ "./src/renderer/app/players/players.component.scss":
/*!*********************************************************!*\
  !*** ./src/renderer/app/players/players.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcmVuZGVyZXIvYXBwL3BsYXllcnMvcGxheWVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/renderer/app/players/players.component.ts":
/*!*******************************************************!*\
  !*** ./src/renderer/app/players/players.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/player.service */ "./src/renderer/app/services/player.service.ts");




var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(_playerService, _modalService) {
        this._playerService = _playerService;
        this._modalService = _modalService;
        this.createPlayerFirstName = "";
        this.createPlayerLastName = "";
        this.createPlayerAmount = 1000;
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PlayersComponent.prototype, "players", {
        get: function () {
            return this._playerService.players;
        },
        enumerable: true,
        configurable: true
    });
    PlayersComponent.prototype.createPlayer = function () {
        var _this = this;
        this._modalService.open(this._addPlayerModal).result.then(function () {
            _this._playerService.createPlayer(_this.createPlayerFirstName, _this.createPlayerLastName, _this.createPlayerAmount);
            _this.clearCreatePlayerInputs();
        }, function () {
            _this.clearCreatePlayerInputs();
        });
    };
    PlayersComponent.prototype.clearCreatePlayerInputs = function () {
        this.createPlayerFirstName = "";
        this.createPlayerLastName = "";
    };
    PlayersComponent.prototype.deletePlayer = function (player) {
        var _this = this;
        this._modalService.open(this._confirmDeleteModal).result.then(function () {
            _this._playerService.deletePlayer(player);
        }, function () { });
    };
    PlayersComponent.prototype.setDead = function (player) {
        this._modalService.open(this._confirmDeadModal).result.then(function () {
            player.setDead();
        }, function () { });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("confirmDeleteModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PlayersComponent.prototype, "_confirmDeleteModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("addPlayerModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PlayersComponent.prototype, "_addPlayerModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("confirmDeadModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PlayersComponent.prototype, "_confirmDeadModal", void 0);
    PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cc-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/renderer/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.scss */ "./src/renderer/app/players/players.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/renderer/app/services/bank.service.ts":
/*!***************************************************!*\
  !*** ./src/renderer/app/services/bank.service.ts ***!
  \***************************************************/
/*! exports provided: BankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function() { return BankService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_account_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/account.model */ "./src/renderer/app/shared/models/account.model.ts");



var BankService = /** @class */ (function () {
    function BankService() {
        this._accounts = new Map();
    }
    BankService.prototype.OpenAccount = function (openingBalance) {
        var accountNumber = this.GetNextAccountNumber();
        var account = new _shared_models_account_model__WEBPACK_IMPORTED_MODULE_2__["Account"](accountNumber, openingBalance);
        this._accounts.set(accountNumber, account);
        return account;
    };
    BankService.prototype.GetAccount = function (accountNumber) {
        if (!this._accounts.has(accountNumber)) {
            throw new Error("Account #" + accountNumber + " does not exist");
        }
        return this._accounts.get(accountNumber);
    };
    BankService.prototype.TransferFunds = function (from, to, amount) {
        if (amount <= 0) {
            throw new Error("Cannot transfer a negative amount");
        }
        var fromAccount = this.GetAccount(from);
        var toAccount = this.GetAccount(to);
        fromAccount.Withdraw(amount, "Transfer to #" + to);
        toAccount.Deposit(amount, "Transfer from #" + from);
    };
    BankService.prototype.GenerateInterest = function (interestPct) {
        this._accounts.forEach(function (act, key) {
            var interestAmount = act.balance * interestPct;
            act.Deposit(interestAmount, "Interest");
        });
    };
    BankService.prototype.GetNextAccountNumber = function () {
        var min = 1000;
        var max = 9999;
        var accountNumber;
        do {
            accountNumber = Math.floor(Math.random() * (max - min)) + min;
        } while (this._accounts.has(accountNumber));
        return accountNumber;
    };
    BankService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BankService);
    return BankService;
}());



/***/ }),

/***/ "./src/renderer/app/services/file.service.ts":
/*!***************************************************!*\
  !*** ./src/renderer/app/services/file.service.ts ***!
  \***************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileService = /** @class */ (function () {
    function FileService() {
        if (window.require) {
            try {
                this.ipc = window.require("electron").ipcRenderer;
            }
            catch (error) {
                throw error;
            }
        }
        else {
            console.warn("Could not load electron ipc");
        }
    }
    FileService.prototype.getFiles = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.ipc.once("getFilesResponse", function (event, arg) {
                            resolve(arg);
                        });
                        _this.ipc.send("getFiles");
                    })];
            });
        });
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/renderer/app/services/player.service.ts":
/*!*****************************************************!*\
  !*** ./src/renderer/app/services/player.service.ts ***!
  \*****************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/player.model */ "./src/renderer/app/shared/models/player.model.ts");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank.service */ "./src/renderer/app/services/bank.service.ts");




var PlayerService = /** @class */ (function () {
    function PlayerService(_bankService) {
        this._bankService = _bankService;
        this._players = [];
    }
    Object.defineProperty(PlayerService.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: true,
        configurable: true
    });
    PlayerService.prototype.createPlayer = function (firstName, lastName, startingBalance) {
        var account = this._bankService.OpenAccount(startingBalance);
        var player = new _shared_models_player_model__WEBPACK_IMPORTED_MODULE_2__["Player"](firstName, lastName, account);
        this._players.push(player);
        return player;
    };
    PlayerService.prototype.deletePlayer = function (player) {
        this._players = this._players.filter(function (p) { return p !== player; });
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bank_service__WEBPACK_IMPORTED_MODULE_3__["BankService"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/renderer/app/shared/models/account.model.ts":
/*!*********************************************************!*\
  !*** ./src/renderer/app/shared/models/account.model.ts ***!
  \*********************************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var _transaction_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.model */ "./src/renderer/app/shared/models/transaction.model.ts");

var Account = /** @class */ (function () {
    function Account(_accountNumber, openingBalance) {
        this._accountNumber = _accountNumber;
        this._transactions = [];
        this._balance = 0;
        this.CreateTransaction(openingBalance, "Opening balance");
    }
    Object.defineProperty(Account.prototype, "accountNumber", {
        get: function () {
            return this._accountNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "transactions", {
        get: function () {
            return this._transactions;
        },
        enumerable: true,
        configurable: true
    });
    Account.prototype.Deposit = function (amount, description) {
        if (amount <= 0) {
            throw new Error("Cannot deposit a negative amount");
        }
        this.CreateTransaction(amount, description);
    };
    Account.prototype.Withdraw = function (amount, description) {
        if (amount <= 0) {
            throw new Error("Cannot withdraw a negative amount");
        }
        if (amount > this._balance) {
            throw new Error("Insufficient balance");
        }
        this.CreateTransaction(amount * -1, description);
    };
    Account.prototype.CreateTransaction = function (amount, description) {
        this._balance += amount;
        var transaction = new _transaction_model__WEBPACK_IMPORTED_MODULE_0__["Transaction"](this, amount, description);
        this._transactions.push(transaction);
        //console.log(`Account #${this._accountNumber} new balance £${this._balance}`);
    };
    return Account;
}());



/***/ }),

/***/ "./src/renderer/app/shared/models/entity.model.ts":
/*!********************************************************!*\
  !*** ./src/renderer/app/shared/models/entity.model.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_0__);

var Entity = /** @class */ (function () {
    function Entity() {
        this._id = guid_typescript__WEBPACK_IMPORTED_MODULE_0__["Guid"].create();
    }
    Object.defineProperty(Entity.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());
/* harmony default export */ __webpack_exports__["default"] = (Entity);


/***/ }),

/***/ "./src/renderer/app/shared/models/player.model.ts":
/*!********************************************************!*\
  !*** ./src/renderer/app/shared/models/player.model.ts ***!
  \********************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity.model */ "./src/renderer/app/shared/models/entity.model.ts");


var Player = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Player, _super);
    function Player(_firstName, _lastName, _account) {
        var _this = _super.call(this) || this;
        _this._firstName = _firstName;
        _this._lastName = _lastName;
        _this._account = _account;
        return _this;
    }
    Object.defineProperty(Player.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "isDead", {
        get: function () {
            return this._isDead;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.setDead = function () {
        this._isDead = true;
    };
    return Player;
}(_entity_model__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/renderer/app/shared/models/transaction.model.ts":
/*!*************************************************************!*\
  !*** ./src/renderer/app/shared/models/transaction.model.ts ***!
  \*************************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction(_account, _amount, _description) {
        this._account = _account;
        this._amount = _amount;
        this._description = _description;
        this._timestamp = new Date();
        this.__cumulativeBalance = _account.balance;
    }
    Object.defineProperty(Transaction.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transaction.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transaction.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transaction.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transaction.prototype, "cumulativeBalance", {
        get: function () {
            return this.__cumulativeBalance;
        },
        enumerable: true,
        configurable: true
    });
    return Transaction;
}());



/***/ }),

/***/ "./src/renderer/app/sidebar/sidebar.component.html":
/*!*********************************************************!*\
  !*** ./src/renderer/app/sidebar/sidebar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col d-flex flex-column cc-sidebar p-0 h-100\">\n  <a *ngFor=\"let item of items\"\n    class=\"cc-sidebar-item\"\n    [class.mt-auto]=\"item.floatBottom\"\n    routerLink=\"{{item.route}}\"\n    routerLinkActive=\"active\"\n    placement=\"right\"\n    ngbTooltip=\"{{item.title}}\"\n    data-container=\"body\">\n      <span class=\"oi oi-{{item.iconClass}}\"></span>\n  </a>\n</nav>"

/***/ }),

/***/ "./src/renderer/app/sidebar/sidebar.component.scss":
/*!*********************************************************!*\
  !*** ./src/renderer/app/sidebar/sidebar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cc-sidebar {\n  position: fixed;\n  width: 50px;\n  top: 0;\n  left: 0;\n  flex: 0 0 50px;\n  background-color: #EEE;\n  box-shadow: 0 0 5px 1px #444; }\n  .cc-sidebar-item {\n    color: #000;\n    height: 50px;\n    min-height: 50px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 25px; }\n  .cc-sidebar-item:hover {\n      background-color: #DDD;\n      text-decoration: none; }\n  .cc-sidebar-item.active .oi {\n      color: var(--blue); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlci9hcHAvc2lkZWJhci9EOlxcQ09ERVxcR0lUXFxMVU1JTk9VU1xcQ3JpbWluYWxDb250YWN0L3NyY1xccmVuZGVyZXJcXGFwcFxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQWU7RUFDZixXQUp1QjtFQUt2QixNQUFNO0VBQ04sT0FBTztFQUNQLGNBUHVCO0VBUXZCLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTtFQUU1QjtJQUNJLFdBQVc7SUFDWCxZQWJtQjtJQWNuQixnQkFkbUI7SUFlbkIsV0FmbUI7SUFnQm5CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUF3QyxFQUFBO0VBUjNDO01BV08sc0JBQXNCO01BQ3RCLHFCQUFxQixFQUFBO0VBWjVCO01BaUJXLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9yZW5kZXJlci9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNjLXNpZGViYXItaXRlbS1zaXplOiA1MHB4O1xuXG4uY2Mtc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAkY2Mtc2lkZWJhci1pdGVtLXNpemU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZmxleDogMCAwICRjYy1zaWRlYmFyLWl0ZW0tc2l6ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICM0NDQ7XG4gICAgXG4gICAgJi1pdGVtIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGhlaWdodDogJGNjLXNpZGViYXItaXRlbS1zaXplO1xuICAgICAgICBtaW4taGVpZ2h0OiAkY2Mtc2lkZWJhci1pdGVtLXNpemU7XG4gICAgICAgIHdpZHRoOiAkY2Mtc2lkZWJhci1pdGVtLXNpemU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkY2Mtc2lkZWJhci1pdGVtLXNpemUgLyAyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIC5vaSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/renderer/app/sidebar/sidebar.component.ts":
/*!*******************************************************!*\
  !*** ./src/renderer/app/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.items = [
            {
                iconClass: "home",
                title: "Dashboard",
                route: "/dashboard",
                floatBottom: false
            },
            {
                iconClass: "people",
                title: "Players",
                route: "/players",
                floatBottom: false
            },
            {
                iconClass: "credit-card",
                title: "Banking",
                route: "/banking",
                floatBottom: false
            },
            {
                iconClass: "code",
                title: "Bank Test",
                route: "/bank-test",
                floatBottom: false
            },
            {
                iconClass: "cog",
                title: "Settings",
                route: "/settings",
                floatBottom: true
            }
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cc-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/renderer/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/renderer/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/renderer/environments/environment.ts":
/*!**************************************************!*\
  !*** ./src/renderer/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/renderer/main.ts":
/*!******************************!*\
  !*** ./src/renderer/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/renderer/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/renderer/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderer/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CODE\GIT\LUMINOUS\CriminalContact\src\renderer\main.ts */"./src/renderer/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map