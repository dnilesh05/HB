(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\t\n  <div style=\"margin-top: 0px;\">\n  \t<router-outlet></router-outlet>\n  </div>  \n <!--  <app-advanced-search></app-advanced-search> -->\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

// https://bootsnipp.com/snippets/RlOe3


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/search-panel/search-panel.component */ "./src/app/component/search-panel/search-panel.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/advanced-search/advanced-search.component */ "./src/app/component/advanced-search/advanced-search.component.ts");
/* harmony import */ var _component_confirm_booking_confirm_booking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/confirm-booking/confirm-booking.component */ "./src/app/component/confirm-booking/confirm-booking.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _component_hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/hotel-details/hotel-details.component */ "./src/app/component/hotel-details/hotel-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _component_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_7__["SearchPanelComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _component_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_9__["AdvancedSearchComponent"],
                _component_confirm_booking_confirm_booking_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmBookingComponent"],
                _component_hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_12__["HotelDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11__["GooglePlaceModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: 'result', component: _component_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_9__["AdvancedSearchComponent"] },
                    { path: 'confirm', component: _component_confirm_booking_confirm_booking_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmBookingComponent"] },
                    { path: 'details', component: _component_hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_12__["HotelDetailsComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/advanced-search/advanced-search.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/advanced-search/advanced-search.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/advanced-search/advanced-search.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/advanced-search/advanced-search.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" style=\"background-color: #F4F4F4;padding: 15px 0;margin-top: 40px;font-size: 16px;\">\n\t<div class=\"col-sm-6\">\n\t</div>\n\t<div class=\"col-sm-2\">\n\t\tfilters\n\t</div>\n\t<div class=\"col-sm-2\">\n\t\tMap\n\t</div>\n\t<div class=\"col-sm-2\">\n\t\t<form >\n\t\t\tSort By\n\t\t  <select name=\"cars\">\n\t\t    <option value=\"top\">Top rated</option>\n\t\t    <option value=\"high\">Low to high</option>\n\t\t    <option value=\"low\">High to low </option>\n\t\t  </select>\n\t\t</form>\n\t</div>\n</div>\n<div class=\"col-sm-12\" style=\"background-color: #F4F4F4; \">\n\n\t<div class=\"col-sm-3 shadow p-3 mb-5 bg-white rounded\" style=\"padding: 15px 15px 0 15px; background-color: #fff;border: 1px solid #fff;padding: 10px;box-shadow: 5px 10px 18px #ccc;margin-bottom: 20px;\">\n\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n    <form class=\"form-inline\" style=\"padding: 0px;\">\n      <div class=\"col-md-12  col-sm-12 search-text\" style=\"padding:10px 0 0 0px;\">\n        <div class=\"form-group input-group\" style=\"padding: 0px;\">\n          <span class=\"input-group-addon\"> <i class=\"fa fa-globe\" aria-hidden=\"true\"></i></span>\n          <input type=\"text\" class=\"form-control ip-height\" id=\"input-search-dest\" placeholder=\"Where are you going?\">\n        </div>\n      </div>\n      <div class=\"col-sm-12\" style=\"padding:10px 0px;\">\n        <div class=\"form-group input-group\" style=\"padding: 0px;\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n          <input type=\"text\" class=\"form-control ip-height datepicker\"  id=\"check-in-time\" placeholder=\"Check in Date\">\n        </div>\n      </div>\n       <div class=\"col-sm-12 check-out-date\" style=\"padding: 0px;\">\n        <div class=\"form-group input-group\" data-provide=\"datepicker\" style=\"padding: 0px;\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n          <input type=\"text\" class=\"form-control ip-height\" id=\"check-out-time\" placeholder=\"Check out Date\">\n        </div>\n      </div>\n  \n      <div class=\"col-sm-12\" style=\"margin-top: 10px;padding: 0px;\">\n        <div class=\"col-sm-5 col-xs-12\" style=\"padding: 0;\">\n          <div class=\"form-group input-group\" style=\"padding: 0px;\">\n            <span class=\"input-group-addon\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control ip-height\" id=\"\" placeholder=\"No of Adults\">\n          </div>\n        </div>\n        <div class=\"col-sm-5 col-xs-12\" style=\"padding: 0 0 0 10px;\">\n          <div class=\"form-group input-group\" style=\"padding: 0px;\">\n            <span class=\"input-group-addon\"> <i class=\"fa fa-child\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control ip-height\" id=\"\" placeholder=\"No of children\">\n          </div>\n        </div>\n        <div class=\"col-sm-6 no-of-room\" style=\"padding: 10px 0px;\">\n          <div class=\"form-group input-group\" style=\"padding: 0px;\">\n            <span class=\"input-group-addon\"> <i class=\"fa fa-bed\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control ip-height\" id=\"\" placeholder=\"No of rooms\">\n          </div>\n        </div>\n      </div>\n      \n       <div class=\"col-sm-9 col-sm-offset-1\" style=\"margin-top: 20px;\">\n        <div class=\"checkbox\">\n          <label><input type=\"checkbox\"> I am travelling for work</label>\n        </div>\n      </div>   \n      <div class=\"col-sm-12\" style=\"margin-top: 20px;\">\n        <div class=\"col-sm-7 col-sm-offset-1\">\n          <button type=\"submit\" class=\"btn btn-default\" style=\"width: 100%;height: 50px;background: blue;color: #ffffff;font-size: 22px;\"><b>SEARCH</b></button>\n        </div>\n      </div>            \n    </form>\n  </div>     \n\t</div>\n\n\t<div class=\"col-sm-9\">\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 10px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n            <a routerLink=\"/details\">\n\t  \t\t\t\t <b>The orchid hotel</b>\n            </a>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\" style=\"text-align: right;\">\n          <div class=\"col-sm-2 col-sm-offset-8\" >\n            <button type=\"button\" class=\"btn  btn-primary\" >\n              <a routerLink=\"/details\" style=\"color: #fff;\"><b>More details</b></a>\n            </button>\n          </div>  \n          <div class=\"col-sm-2\">\n            <button type=\"button\" class=\"btn  btn-primary\" style=\"margin-left: 10px;\">\n              <a routerLink=\"/confirm\" style=\"color: #fff;\"><b>check out</b></a>\n            </button>\n          </div>      \n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 10px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n\t  \t\t\t\t<b>The orchid hotel</b>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\">\n  \t\t\t\t<button type=\"button\" class=\"btn  btn-primary\" style=\"float: right;\">\n  \t\t\t\t\t<b>check out</b>\n  \t\t\t\t</button>\n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 15px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n\t  \t\t\t\t<b>The orchid hotel</b>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\">\n  \t\t\t\t<button type=\"button\" class=\"btn  btn-primary\" style=\"float: right;\">\n  \t\t\t\t\t<b>check out</b>\n  \t\t\t\t</button>\n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 10px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n\t  \t\t\t\t<b>The orchid hotel</b>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\">\n  \t\t\t\t<button type=\"button\" class=\"btn  btn-primary\" style=\"float: right;\">\n  \t\t\t\t\t<b>check out</b>\n  \t\t\t\t</button>\n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 10px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n\t  \t\t\t\t<b>The orchid hotel</b>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\">\n  \t\t\t\t<button type=\"button\" class=\"btn  btn-primary\" style=\"float: right;\">\n  \t\t\t\t\t<b>check out</b>\n  \t\t\t\t</button>\n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 10px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n\t  \t\t\t\t<b>The orchid hotel</b>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\">\n  \t\t\t\t<button type=\"button\" class=\"btn  btn-primary\" style=\"float: right;\">\n  \t\t\t\t\t<b>check out</b>\n  \t\t\t\t</button>\n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 10px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n\t  \t\t\t\t<b>The orchid hotel</b>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\">\n  \t\t\t\t<button type=\"button\" class=\"btn  btn-primary\" style=\"float: right;\">\n  \t\t\t\t\t<b>check out</b>\n  \t\t\t\t</button>\n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\" style=\"background-color: #fff;padding: 0px;margin:0 0 10px 0;\"> \t\n  \t\t<div class=\"col-sm-4\" style=\"padding: 0px;\">\n  \t\t\t\t<img src=\"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" class=\"img-responsive\" style=\"width: 100%;height: 230px;\">\n  \t\t</div>\t\t  \t\t\t\n  \t\t<div class=\"col-sm-8\">\n  \t\t\t<div class=\"\">\n  \t\t\t\t<h3 class=\"\" style=\"color: blue;\">\n\t  \t\t\t\t<b>The orchid hotel</b>\n  \t\t\t\t</h3>\n  \t\t\t\t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n  \t\t\t\t</p>\n  \t\t\t\t<p>\n  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n  \t\t\t\t</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n  \t\t\t\t<p>\n  \t\t\t\t\t<span style=\"background-color: blue;color: #fff;padding: 4px 10px;border-radius: 15px;\">\n  \t\t\t\t\t\tPrice\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"color: green;font-size: 20px;padding-left: 5px;\">\n  \t\t\t\t\t\t<b>20000</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span style=\"font-size: 13px;padding-left: 15px;\">\n  \t\t\t\t\t\t<b>For 2 days</b>\n  \t\t\t\t\t</span>\n  \t\t\t\t</p>\n  \t\t\t</div>\t\n  \t\t\t<div class=\"col-sm-12\">\n  \t\t\t\t<button type=\"button\" class=\"btn  btn-primary\" style=\"float: right;\">\n  \t\t\t\t\t<b>check out</b>\n  \t\t\t\t</button>\n  \t\t\t</div>\t  \t\t\t\n  \t\t</div>\t\t\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/component/advanced-search/advanced-search.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/advanced-search/advanced-search.component.ts ***!
  \************************************************************************/
/*! exports provided: AdvancedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchComponent", function() { return AdvancedSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvancedSearchComponent = /** @class */ (function () {
    function AdvancedSearchComponent() {
    }
    AdvancedSearchComponent.prototype.ngOnInit = function () {
    };
    AdvancedSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advanced-search',
            template: __webpack_require__(/*! ./advanced-search.component.html */ "./src/app/component/advanced-search/advanced-search.component.html"),
            styles: [__webpack_require__(/*! ./advanced-search.component.css */ "./src/app/component/advanced-search/advanced-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
}());



/***/ }),

/***/ "./src/app/component/confirm-booking/confirm-booking.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/confirm-booking/confirm-booking.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "stepper .nav-tabs {position: relative;}\n.stepper .nav-tabs > li {\n  width: 33.3%;\n  position: relative;\n}\n.stepper .nav-tabs > li:after {\n  content: '';\n  position: absolute;\n  background: #f1f1f1;\n  display: block;\n  width: 100%;\n  height: 5px;\n  top: 30px;\n  left: 50%;\n  z-index: 1;\n}\n.stepper .nav-tabs > li.completed::after {\n  background: #5bc0de ;\n}\n.stepper .nav-tabs > li:last-child::after {\n  background: transparent;\n}\n.stepper .nav-tabs > li.active:last-child .round-tab {\n  background: #5bc0de ;\n}\n.stepper .nav-tabs > li.active:last-child .round-tab::after {\n  content: '✔';\n  color: #fff;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 0;\n  display: block;\n}\n.stepper .nav-tabs [data-toggle='tab'] {\n  width: 25px;\n  height: 25px;\n  margin: 20px auto;\n  border-radius: 100%;\n  border: none;\n  padding: 0;\n  color: #f1f1f1;\n}\n.stepper .nav-tabs [data-toggle='tab']:hover {\n  background: transparent;\n  border: none;\n}\n.stepper .nav-tabs > .active > [data-toggle='tab'], .stepper .nav-tabs > .active > [data-toggle='tab']:hover, .stepper .nav-tabs > .active > [data-toggle='tab']:focus {\n  color: #5bc0de ;\n  cursor: default;\n  border: none;\n}\n.stepper .tab-pane {\n  position: relative;\n  padding-top: 50px;\n}\n.stepper .round-tab {\n  width: 25px;\n  height: 25px;\n  line-height: 22px;\n  display: inline-block;\n  border-radius: 25px;\n  background: #fff;\n  border: 2px solid #5bc0de ;\n  color: #5bc0de ;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  font-size: 14px;\n}\n.stepper .completed .round-tab {\n  background: #5bc0de ;\n}\n.stepper .completed .round-tab::after {\n  content: '✔';\n  color: #fff;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 0;\n  display: block;\n}\n.stepper .active .round-tab {\n  background: #fff;\n  border: 2px solid #5bc0de ;\n}\n.stepper .active .round-tab:hover {\n  background: #fff;\n  border: 2px solid #5bc0de ;\n}\n.stepper .active .round-tab::after {\n  display: none;\n}\n.stepper .disabled .round-tab {\n  background: #fff;\n  color: #f1f1f1;\n  border-color: #f1f1f1;\n}\n.stepper .disabled .round-tab:hover {\n  color: #4dd3b6;\n  border: 2px solid #a6dfd3;\n}\n.stepper .disabled .round-tab::after {\n  display: none;\n}\n.input-hidden {\n  position: absolute;\n  left: -9999px;\n}\ninput[type=radio]:checked + label>img {\n  border: 1px solid #fff;\n  box-shadow: 0 0 3px 3px #090;\n}\n/* Stuff after this is only to make things more pretty */\ninput[type=radio] + label>img {\n  border: 1px dashed #444;\n  width: 150px;\n  height: 150px;\n  transition: 500ms all;\n}"

/***/ }),

/***/ "./src/app/component/confirm-booking/confirm-booking.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/confirm-booking/confirm-booking.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container user-dtl\" ng-controller=\"userCtrl\" style=\"margin-top: 80px;\">\n  <div class=\"panel panel-default\">\n    <div><h2 style=\"text-align: center;\">{{head_name}}</h2></div>\n      <div class=\"panel-body\">\n        <div class=\"stepper\">\n          <ul id=\"tab_active_id\" class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\" tab-title=\"How do you dress for work ?\">\n              <a class=\"persistant-disabled\" href=\"#stepper-step-1\" data-toggle=\"tab\" aria-controls=\"stepper-step-1\" role=\"tab\">\n              <span class=\"round-tab\"></span>\n              </a>\n            </li>\n            <li role=\"presentation\" class=\"disabled\" tab-title=\"How do you dress when you go out ?\">\n              <a class=\"persistant-disabled\" href=\"#stepper-step-2\" data-toggle=\"tab\" aria-controls=\"stepper-step-2\" role=\"tab\">\n              <span class=\"round-tab\"></span>\n              </a>\n            </li>\n            <li role=\"presentation\" class=\"disabled\" tab-title=\"How do you like your shirts to fit ?\">\n              <a class=\"persistant-disabled\" href=\"#stepper-step-3\" data-toggle=\"tab\" aria-controls=\"stepper-step-3\" role=\"tab\">\n              <span class=\"round-tab\"></span>\n              </a>\n            </li>\n          </ul>\n          <form role=\"form\" class=\"form-validation\" novalidate>\n          <div class=\"tab-content\">\n              <!--step 1-->\n              <div class=\"tab-pane fade in active\" role=\"tabpanel\" id=\"stepper-step-1\"> \n                \n                <div>\n                  <div class=\"col-sm-8 col-sm-offset-2\" style=\"padding: 25px;background-color: #cccccc14;\">\n                    <h3 style=\"margin-top: -10px;padding-left: 10px;\"><b>Enter Your details</b></h3>\n                      <div class=\"form-row\">\n                        <div class=\"form-group col-sm-6\">\n                          <label for=\"inputEmail4\">First Name</label>\n                          <input type=\"text\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n                        </div>\n                        <div class=\"form-group col-sm-6\">\n                          <label for=\"inputPassword4\">Last Name</label>\n                          <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n                        </div>\n                      </div>\n                      <div class=\"form-group col-sm-12\">\n                        <label for=\"inputEmail4\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n                      </div>\n                      <div style=\"padding: 0 15px;font-size: 18px;\">\n                        <div class=\"row\">\n                          <label class=\"col-form-label col-sm-12\">You are looking for</label>\n                          <div class=\"col-sm-10\">\n                            <div class=\"form-check\">\n                              <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n                              <label class=\"form-check-label\" for=\"gridRadios1\">\n                                I am the main guest\n                              </label>\n                            </div>\n                            <div class=\"form-check\">\n                              <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\n                              <label class=\"form-check-label\" for=\"gridRadios2\">\n                                Booking is for some one else\n                              </label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-row\">\n                        <div class=\"form-group col-sm-4\">\n                          <label for=\"inputCity\">Country</label>\n                          <select id=\"inputState\" class=\"form-control\">\n                            <option selected>Choose...</option>\n                            <option>...</option>\n                          </select>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                          <label for=\"inputState\">Phone Number</label>\n                          <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n                        </div>\n                      </div>\n                      <div style=\"padding: 0 15px;font-size: 18px;\">\n                        <div class=\"row\">\n                          <label class=\"col-form-label col-sm-12\">Your room</label>\n                          <div class=\"col-sm-10\">\n                            <div class=\"form-check col-sm-4\">\n                              <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"option3\" checked>\n                              <label class=\"form-check-label\" for=\"gridRadios3\">\n                                Single\n                              </label>\n                            </div>\n                            <div class=\"form-check col-sm-4\">\n                              <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios4\" value=\"option4\">\n                              <label class=\"form-check-label\" for=\"gridRadios4\">\n                                Double\n                              </label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"inputCity\">Choose number of guest</label>\n                        <select id=\"inputState\" class=\"form-control\">\n                          <option selected>1</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                          <option>6</option>\n                        </select>\n                      </div>\n                      <div class=\"col-sm-8\"></div>\n                      <div class=\"col-sm-12\" style=\"text-align: center;\">\n                        <button type=\"submit\" class=\"btn  btn-success next-step\">Next</button>\n                      </div>                            \n                  </div>\n                </div>                      \n              </div>\n              <!--step 1 end-->\n              <!-- step 2-->\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"stepper-step-2\"> \n                <div class=\"icon-box\">\n                  <div>\n                      <div class=\"col-sm-8 col-sm-offset-2\" style=\"padding: 25px;background-color: #cccccc14;\">\n                      <h3 style=\"margin-top: -10px;padding-left: 10px;\"><b>Service You want</b></h3>\n                      <form>\n                        <h4 style=\"\"><b>Bed preference (if available)</b></h4>\n                         <div style=\"padding: 0 15px;font-size: 18px;\">\n                          <div class=\"row\">\n                            <label class=\"col-form-label col-sm-12\">Your room</label>\n                            <div class=\"col-sm-10\">\n                              <div class=\"form-check col-sm-4\">\n                                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios5\" value=\"option5\" checked>\n                                <label class=\"form-check-label\" for=\"gridRadios5\">\n                                  1 large bed\n                                </label>\n                              </div>\n                              <div class=\"form-check col-sm-4\">\n                                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios6\" value=\"option6\">\n                                <label class=\"form-check-label\" for=\"gridRadios6\">\n                                  2 single bed\n                                </label>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                          <h4><b>Service</b></h4>\n                          <div class=\"form-group\">\n                            <div class=\"form-check col-sm-4\">\n                              <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n                              <label class=\"form-check-label\" for=\"gridCheck\">\n                                Check me out\n                              </label>\n                            </div>\n                            <div class=\"form-check col-sm-4\">\n                              <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n                              <label class=\"form-check-label\" for=\"gridCheck\">\n                                Check me out\n                              </label>\n                            </div>\n                            <div class=\"form-check col-sm-4\">\n                              <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n                              <label class=\"form-check-label\" for=\"gridCheck\">\n                                Check me out\n                              </label>\n                            </div>\n                          </div>\n                        </div>\n                        <div style=\"padding: 0 15px;font-size: 18px;\">\n                          <div class=\"row\">\n                            <label class=\"col-form-label col-md-12\">Are you comming for work</label>\n                            <div class=\"col-sm-10\">\n                              <div class=\"form-check col-sm-4\">\n                                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios7\" value=\"option7\" checked>\n                                <label class=\"form-check-label\" for=\"gridRadios7\">\n                                  Yes\n                                </label>\n                              </div>\n                              <div class=\"form-check col-sm-4\">\n                                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios8\" value=\"option6\">\n                                <label class=\"form-check-label\" for=\"gridRadios8\">\n                                  No\n                                </label>\n                              </div>\n                            </div>\n                          </div>\n                        </div>                       \n                        <div class=\"col-md-12\" style=\"text-align: center;\">\n                          <button type=\"submit\" class=\"btn  btn-success next-step\">Next</button>\n                        </div>                            \n                      </form>\n                    </div>                      \n                  </div>\n                </div>  \n              </div>\n              <!--step 2 end-->\n              <!--Step 3 -->\n              <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"stepper-step-3\">\n                <div class=\"icon-box shirtFitRadioButton\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-offset-5 col-sm-2\">\n                       <button class=\"btn btn-success next-step\">\n                           Submit\n                         </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            <!--step 3 end-->          \n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/confirm-booking/confirm-booking.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/confirm-booking/confirm-booking.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmBookingComponent", function() { return ConfirmBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmBookingComponent = /** @class */ (function () {
    function ConfirmBookingComponent() {
    }
    ConfirmBookingComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            function triggerClick(elem) {
                $(elem).click();
            }
            var $progressWizard = $('.stepper'), $tab_active, $tab_prev, $tab_next, $btn_prev = $progressWizard.find('.prev-step'), $btn_next = $progressWizard.find('.next-step'), $tab_toggle = $progressWizard.find('[data-toggle="tab"]'), $tooltips = $progressWizard.find('[data-toggle="tab"][title]');
            // To do:
            // Disable User select drop-down after first step.
            // Add support for payment type switching.
            //Initialize tooltips
            $tooltips.tooltip();
            //Wizard
            $tab_toggle.on('show.bs.tab', function (e) {
                var $target = $(e.target);
                if (!$target.parent().hasClass('active, disabled')) {
                    $target.parent().prev().addClass('completed');
                }
                if ($target.parent().hasClass('disabled')) {
                    return false;
                }
            });
            $btn_next.on('click', function () {
                $tab_active = $progressWizard.find('.active');
                $tab_active.next().removeClass('disabled');
                $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
                triggerClick($tab_next);
            });
            $btn_prev.click(function () {
                $tab_active = $progressWizard.find('.active');
                $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
                triggerClick($tab_prev);
            });
        });
    };
    ConfirmBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-booking',
            template: __webpack_require__(/*! ./confirm-booking.component.html */ "./src/app/component/confirm-booking/confirm-booking.component.html"),
            styles: [__webpack_require__(/*! ./confirm-booking.component.css */ "./src/app/component/confirm-booking/confirm-booking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmBookingComponent);
    return ConfirmBookingComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerContent .form-inline .subscribe-phone{border-radius: 0;padding-left: 10px;width: 40vh; }\n.footerContent .form-inline .subscribe-email{ border-radius: 0;padding-left: 18px;width: 30vh;}\n.footerContent .form-inline .subscribe-btn { border-radius: 0;padding: 8px;margin-left: -5px;background-color: #000;color: #fff; }\n.footerContent { padding: 10px 10px 25px 10px;background-color: #fff; }\n.services { text-align:center;text-align: justify; }\n.footer-divider { border-bottom: 2px solid #000;margin-bottom: 20px; }\n.mb-center{text-align:center;}\n.footer-div { margin-top: 50px;}\n.subscribe-btn {border-radius: 0;padding: 7px;background-color: #000;color: #fff;}\n.footer-text-style \t{\n\tfont-family:Lato;font-size: 15px;font-weight: normal;letter-spacing: 1.5px;text-align: right;\n}\n/* ##Device = Desktops   ##Screen = 1281px to higher resolution desktops */\n@media (min-width: 1281px) {  \n    \n  }\n/* ##Device = Laptops, Desktops  ##Screen = B/w 1025px to 1280px */\n@media (min-width: 1025px) and (max-width: 1280px) { \n\n  }\n/* ##Device = Tablets, Ipads (portrait)  ##Screen = B/w 768px to 1024px */\n@media (min-width: 768px) and (max-width: 1024px) {  \n   \n  }\n/* ##Device = Tablets, Ipads (landscape)  ##Screen = B/w 768px to 1024px*/\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n   \n    \n  }\n/* ##Device = Low Resolution Tablets, Mobiles (Landscape)  ##Screen = B/w 481px to 767px*/\n@media (min-width: 481px) and (max-width: 767px) { \n    \n\n  }\n/* ##Device = Most of the Smartphones Mobiles (Portrait)  ##Screen = B/w 320px to 479px*/\n@media (min-width: 320px) and (max-width: 480px) {\n  .mb-center{\n  \t\ttext-align:center;\n  \t\tmargin-top: 15px;\n  \t}\n  .footer-text-style {\n\t\t\tfont-family:Lato;\n\t\t\tfont-size: 15px;\n\t\t\tfont-weight: normal;\n\t\t\tletter-spacing: 1.5px;\n\t\t\ttext-align: centera;\n\t}\n}"

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n  <div class=\"col-sm-12 footer-divider\">\n  </div>\n\t<div class=\"footer-div\">\n\t  <div class=\"col-sm-3 mb-center\">\n\t    <h4 class=\"footer-text-style\">Sign up here to get notification</h4>               \n\t  </div>\n\t  <div class=\"col-sm-6 mb-center\"> \n\t    <form class=\"form-inline\"  name=\"loginForm\" >\n\t\t\t  <div class=\"form-group input-group\">\n\t\t\t  \t<span class=\"input-group-addon\"><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i></span> \n\t\t\t    <input type=\"text \" class=\"form-control subscribe-phone\" name=\"phone\" placeholder=\"ENTER MOBILE NUMBER (optional)\" style=\"\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group input-group\">\n\t\t\t  \t<span class=\"input-group-addon\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></span> \n\t\t\t    <input type=\"email\"  class=\"form-control subscribe-email\" id=\"email\" placeholder=\"ENTER EMAIL ADDRESS\" required style=\"\">\n\t\t\t  </div>\n\t\t\t  <button type=\"submit\" class=\"btn btn-default subscribe-btn\" style=\"\">SIGN UP</button>\n\t\t\t</form>        \n\t  </div>\n  </div>\n\n  <div class=\"col-sm-3 mb-center\">\n    <a href=\"https://instagram.com/dapperdonindia\" target=\"_blank\" style=\"border-radius: 50%;height: 36px;line-height: 32px;width: 36px;font-size: 15px; margin-left: 10px;text-align: center;color: #000;display:inline-block;padding: 1px;background-color: #ccc;\">\n\t\t  <i class=\"fa fa-instagram fa-2x\" aria-hidden=\"true\" style=\"font-size: inherit;\"></i>\n    </a>\n    <a href=\"https://www.facebook.com/dapperdonindia\" target=\"_blank\" style=\"border-radius: 50%;height: 36px; line-height: 32px;width: 36px;font-size: 15px; margin-left: 10px;text-align: center;color: #000;display: inline-block;padding: 1px;background-color: #ccc;\">\n\t\t  <i class=\"fa fa-facebook fa-2x\" aria-hidden=\"true\" style=\"font-size: inherit;\"></i>\n    </a>\n    <a href=\"https://www.linkedin.com/company/13189943\" target=\"_blank\" style=\"    border-radius: 50%;height: 36px;line-height: 32px;width: 36px;font-size: 15px;margin-left: 10px;text-align: center;color: #000;display: inline-block;padding: 1px;background-color: #ccc;\">\n\t\t  <i class=\"fa fa-linkedin fa-2x\" aria-hidden=\"true\" style=\"font-size: inherit;\"></i>\n    </a>\n    <a href=\"https://www.twitter.com/dapperdonindia\" target=\"_blank\" style=\"    border-radius: 50%;height: 36px;line-height: 32px;width: 36px;font-size: 15px;margin-left: 10px;text-align: center;color: #000;display: inline-block;padding: 1px;background-color: #ccc;\">\n\t\t\t  <i class=\"fa fa-twitter fa-2x\" aria-hidden=\"true\" style=\"font-size: inherit;\"></i>\n    </a>\n  </div>  \n\n  <div class=\"col-sm-12\">\n    <div class=\"col-sm-4 mb-center\">\n      <h4  style=\"font-weight: bold\"> <a href=\"\" style=\"color: black\">About Us</a></h4>\n      <ul style=\"list-style-type: none;margin-left:-39px;\">\n        <li><a href=\"/about\" style=\"color: #999;font-size: 14px;\">Our Story</a></li>\n        <li><a href=\"/about\" style=\"color: #999;font-size: 14px;\">Our Goal</a></li>\n      </ul>        \t\n    </div>\n\n    <div class=\"col-sm-4 mb-center\">\n     <h4 style=\"font-weight: bold\">Support</h4>\n      <ul style=\"list-style-type: none;margin-left: -39px;\">\n        <li> <a href=\"\" style=\"color: #999;font-size: 14px;\">Faq</a> </li>\n        <li style=\"color: #999;font-size: 14px;\"> Privacy Policy</li>\n       <!--  <li style=\"color: #999;font-size: 14px;\"> Terms and Conditions </li>     -->    \t\n      </ul>        \t\n    </div>\n\n    <div class=\"col-sm-4 mb-center\">\n      <h4 style=\"font-weight: bold\">Customer Service</h4>\n         <ul style=\"list-style-type: none;margin-left: -39px;\">\n          <li style=\"color: #999;font-size: 14px;\">Call:+91 98201 49986</li>\n        <!--   <li style=\"color: #999;font-size: 14px;\">[10am to 6pm [Mon-Fri]</li>\n          <li style=\"color: #999;font-size: 14px;\">Email: info@nilesh.in</li>     -->       \t\n        </ul>        \t\n\t  </div>\n\t</div> \n\n\n                \n          \n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"padding: 0px;background-color: #fff;margin-bottom: 20px;\">\n  <nav class=\"navbar navbar navbar-fixed-top shadow p-4 mb-4 bg-white\" style=\"margin-bottom: 0px !important;border-radius: 0px !important;background-color: #fff;\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#txmNavbar\">\n          <span class=\"icon-bar\" style=\"background-color: #000;\"></span>\n          <span class=\"icon-bar\" style=\"background-color: #000;\"></span>\n          <span class=\"icon-bar\" style=\"background-color: #000;\"></span> \n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\" style=\"font-size: 20px;\"><b>HotelBooking</b></a>\n      </div>\n      <ul class=\"nav navbar-nav collapse navbar-collapse\" id=\"txmNavbar\">\n        <li class=\"active\"><a href=\"#\"><b>Accommodation</b></a></li>\n        <li><a href=\"#\"><b>Contact Us</b></a></li>\n        <li><a href=\"#\"><b>About Us</b></a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right collapse navbar-collapse\" id=\"txmNavbar\">\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> <b>Sign Up</b></a></li>\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span><b> Login</b></a></li>\n      </ul>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Slider */\n.slick-slide {margin: 0px 20px;}\n.slick-slide img {width: 100%;}\n.slick-slider {position: relative;display: block;box-sizing: border-box;-webkit-user-select: none;-moz-user-select: none;\n    -ms-user-select: none;user-select: none;-webkit-touch-callout: none;-khtml-user-select: none;\n        touch-action: pan-y;-webkit-tap-highlight-color: transparent;}\n.slick-list { position: relative;display: block;overflow: hidden; margin: 0;padding: 0;}\n.slick-list:focus {outline: none;}\n.slick-list.dragging {cursor: pointer;cursor: hand;}\n.slick-slider .slick-track,.slick-slider .slick-list{\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n.slick-track {position: relative;    top: 0;    left: 0;    display: block;}\n.slick-track:before,.slick-track:after {    display: table; content: '';}\n.slick-track:after{clear: both;}\n.slick-loading .slick-track { visibility: hidden;}\n.slick-slide {display: none; float: left;height: 100%;min-height: 1px;}\n[dir='rtl'] .slick-slide {    float: right;}\n.slick-slide img {    display: block;}\n.slick-slide.slick-loading img {    display: none;}\n.slick-slide.dragging img {    pointer-events: none;}\n.slick-initialized .slick-slide{    display: block;}\n.slick-loading .slick-slide{    visibility: hidden;}\n.slick-vertical .slick-slide{display: block;height: auto;border: 1px solid transparent;}\n.slick-arrow.slick-hidden {display: none;}\n.brand-logos{margin: 80px 0 40px 0;}\n/*end of web css */"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-panel></app-search-panel>\n <div class=\"col-sm-12\">\n    <div style=\"margin-left: 20px;\">\n      <h2 style=\"margin-bottom: -40px;\"><b>Recommended Hotels for you</b></h2>\n    </div>  \n  </div>\n<div class=\"col-sm-12 brand-logos\">\n  <section class=\"customer-logos slider\" style=\"margin: 0 15px;\">\n    <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n    <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n    <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n    <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n    <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n    <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n    <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/1531672/pexels-photo-1531672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n     <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/812628/pexels-photo-812628.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n     <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/1531672/pexels-photo-1531672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n     <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/6685/wood-light-flowers-hotel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n     <div class=\"slide\">\n      <div style=\"padding:0 10px;height: 250px;width: 350px;\">\n        <img src=\"https://images.pexels.com/photos/6685/wood-light-flowers-hotel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.customer-logos').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: true,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/hotel-details/hotel-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/hotel-details/hotel-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    color: #555;\n    cursor: default;\n    background-color: #fff;\n    border: 2px solid #ddd;\n    background: blue;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/component/hotel-details/hotel-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/hotel-details/hotel-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" style=\"margin-top: 20px;\">\n\t<div class=\"col-sm-10 col-sm-offset-1\">\n\t\t<h2>The orchid hotel</h2>\n\t  <ul class=\"nav nav-tabs\" style=\"font-size: 18px;\">\n\t    <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\"><b>Info and prices</b></a></li>\n\t    <li><a data-toggle=\"tab\" href=\"#menu1\"><b>Facilities</b></a></li>\n\t    <li><a data-toggle=\"tab\" href=\"#menu2\"><b>House rules</b></a></li>\n\t    <li><a data-toggle=\"tab\" href=\"#menu3\"><b>Guest Reviews</b></a></li>\n\t  </ul>\n\t  <div class=\"tab-content\">\n\t    <div id=\"home\" class=\"tab-pane fade in active\">\n\t      <div class=\"col-sm-12\">\n\t      \t<h3><b>Four Points By The orchid hotel and Serviced Apartments</b></h3>\n\t      \t<p>\n  \t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Koregaon Park,Pune\n  \t\t\t\t</p>\n\t  \t\t\t<div class=\"col-sm-12\" style=\"padding: 0px;\">\n\t  \t\t\t\t<p>\n\t  \t\t\t\t\tVery good <span style=\"background-color: blue;color: #fff;padding: 5px;\">8.5 </span>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<p>\n\t  \t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t  \t\t\t\t</p>\n\t  \t\t\t</div>\n\n\n\t      \t<div class=\"popup-gallery\">\n\t      \t\t<div class=\"col-sm-8\" style=\"padding: 0px;\">\n\t      \t\t\t<a href=\"http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg\" title=\"The Cleaner\">\n\t      \t\t\t  <img src=\"http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg\" class=\"\" width=\"100%\" height=\"590px;\">\n\t      \t\t\t</a>\n\t      \t\t</div>\n\t      \t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<a href=\"http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg\" title=\"The Cleaner\"><img src=\"http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg\" width=\"150\" height=\"150\" style=\"padding: 5px;\"></a>\n\t\t\t\t\t\t\t<a href=\"http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg\" title=\"Winter Dance\"><img src=\"http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg\" width=\"150\" height=\"150\" style=\"padding: 5px;\"></a>\n\t\t\t\t\t\t\t<a href=\"http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg\" title=\"The Uninvited Guest\"><img src=\"http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg\" width=\"150\" height=\"150\" style=\"padding: 5px;\"></a>\n\t\t\t\t\t\t\t<a href=\"http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg\" title=\"Oh no, not again!\"><img src=\"http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg\" width=\"150\" height=\"150\" style=\"padding: 5px;\"></a>\n\t\t\t\t\t\t\t<a href=\"http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg\" title=\"Swan Lake\"><img src=\"http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg\" width=\"150\" height=\"150\" style=\"padding: 5px;\"></a>\n\t\t\t\t\t\t\t<a href=\"http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg\" title=\"The Shake\"><img src=\"http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg\" width=\"150\" height=\"150\" style=\"padding: 5px;\"></a>\n\t\t\t\t\t\t\t<a href=\"http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg\" title=\"Who's that, mommy?\"><img src=\"http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg\" width=\"150\" height=\"150\" style=\"padding: 5px;\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div style=\"text-align: justify;\">\n\t\t\t\t\t\t<h3 style=\"color: blue;\"><i class=\"fa fa-star-o fa-1x\" aria-hidden=\"true\"></i><b> One of our top picks in Pune.</b></h3>\n\t\t\t\t\t\t<p style=\"font-size: 20px;\">\t\t\t\t\t\t\n\t\t\t\t\t\t\tLocated 3 km from Pune International Airport and 4.3 km from EON IT Business Park and World Trade Center, Four Points by Sheraton features a spa and 24-hour gym. An outdoor pool and free parking privileges await guests. Three restaurants are available.\n\t\t\t\t\t\t\tLocated 3 km from Pune International Airport and 4.3 km from EON IT Business Park and World Trade Center, Four Points by Sheraton features a spa and 24-hour gym. An outdoor pool and free parking privileges await guests. Three restaurants are available.\n\t\t\t\t\t\t\tLocated 3 km from Pune International Airport and 4.3 km from EON IT Business Park and World Trade Center, Four Points by Sheraton features a spa and 24-hour gym. An outdoor pool and free parking privileges await guests. Three restaurants are available.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p style=\"font-size: 20px;\">\t\t\t\t\t\t\n\t\t\t\t\t\t\tLocated 3 km from Pune International Airport and 4.3 km from EON IT Business Park and World Trade Center, Four Points by Sheraton features a spa and 24-hour gym. An outdoor pool and free parking privileges await guests. Three restaurants are available.\n\t\t\t\t\t\t\tLocated 3 km from Pune International Airport and 4.3 km from EON IT Business Park and World Trade Center, Four Points by Sheraton features a spa and 24-hour gym. An outdoor pool and free parking privileges await guests. Three restaurants are available.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p style=\"font-size: 20px;\">\t\t\t\t\t\t\n\t\t\t\t\t\t\tLocated 3 km from Pune International Airport and 4.3 km from EON IT Business Park and World Trade Center, Four Points by Sheraton features a spa and 24-hour gym. An outdoor pool and free parking privileges await guests. Three restaurants are available.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p style=\"font-size: 20px;\">\t\t\t\t\t\t\n\t\t\t\t\t\t\tLocated 3 km from Pune International Airport and 4.3 km from EON IT Business Park and World Trade Center, Four Points by Sheraton features a spa and 24-hour gym. An outdoor pool and free parking privileges await guests. Three restaurants are available.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t      </div>\n\t    </div>\n\t    <div id=\"menu1\" class=\"tab-pane fade\">\n\t      <h3><b>Facilities</b></h3>\n\t      <h4><b>Facilities of Four Points By The Hotel orchid and Serviced Apartments</b></h4>\n\t      <p><span style=\"background-color: #ccc;padding:5px;\">Great facilities! Review score, 8.2</span></p>\n\t      <h4 style=\"border-top: 1px solid #000;padding-top: 15px;\"><b>Most popular facilities</b></h4>\n\t      <div class=\"col-sm-12\" style=\"color: green;font-size: 20px;\">\n\t      \t<div class=\"col-sm-3\">\n\t      \t\t <b><i class=\"fa fa-bus\" aria-hidden=\"true\"></i> Airport shuttle</b>\n\t      \t</div>\n\t      \t<div class=\"col-sm-3\">\n\t      \t\t<b><i class=\"fa fa-joomla\" aria-hidden=\"true\"></i> Fitness centre</b>\n\t      \t</div>\n\t      \t<div class=\"col-sm-3\">\n\t      \t\t<b><i class=\"fa fa-joomla\" aria-hidden=\"true\"></i> Room service</b>\n\t      \t</div>\n\t      \t<div class=\"col-sm-3\">\n\t      \t\t<b><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Restaurant</b>\n\t      \t</div>\n\t      \t<div class=\"col-sm-3\">\n\t      \t\t<b><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Non-smoking rooms</b>\n\t      \t</div>\n\t      \t<div class=\"col-sm-3\">\n\t      \t\t<b><i class=\"fa fa-joomla\" aria-hidden=\"true\"></i> Outdoor pool</b>\n\t      \t</div>\n\t      \t<div class=\"col-sm-3\">\n\t      \t\t<b><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Bar</b>\n\t      \t</div>\n\t      \t\n\t      </div>\n\t    </div>\n\t    <div id=\"menu2\" class=\"tab-pane fade\">\n\t      <h3>House rules</h3>\n\t      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>\n\t    </div>\n\t    <div id=\"menu3\" class=\"tab-pane fade\">\n\t      <h3>Guest Reviews</h3>\n\t      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n\t    </div>\n\t  </div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "./src/app/component/hotel-details/hotel-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/hotel-details/hotel-details.component.ts ***!
  \********************************************************************/
/*! exports provided: HotelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailsComponent", function() { return HotelDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent() {
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        });
    };
    HotelDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotel-details',
            template: __webpack_require__(/*! ./hotel-details.component.html */ "./src/app/component/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__(/*! ./hotel-details.component.css */ "./src/app/component/hotel-details/hotel-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/component/search-panel/search-panel.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/search-panel/search-panel.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .search-panel {\n   /* background-color: #F7F7F7;*/\n    background: linear-gradient(to bottom, #33ccff 0%, #666699 100%);\n     /*background: linear-gradient(to bottom, #ccff66 0%, #ffff66 100%);*/\n  }\n  .search-panel .title{\n    text-align: center;\n    color: #fff;\n    font-size: 33px;\n  }\n  .search-panel .subtitle{\n    font-size: 14px;\n    text-align: center;\n  }\n  .search-panel .subtitle1 {\n     background-color: #ccc;\n    padding:5px 10px;\n    border-radius: 20px;\n   }\n  .search-panel .no-of-room {\n    padding: 0 0 0 10px;\n  }\n  #input-search-dest {\n    width: 195%;\n  }\n  #number-of-person {\n    width: 150%;\n  }\n  .brand-logos {\n    margin: 80px;\n  }\n  .ip-height {\n      height: 50px;\n  }\n  /* ##Device = Desktops   ##Screen = 1281px to higher resolution desktops */\n  @media (min-width: 1281px) {  \n    \n  }\n  /* ##Device = Laptops, Desktops  ##Screen = B/w 1025px to 1280px */\n  @media (min-width: 1025px) and (max-width: 1280px) { \n\n  }\n  /* ##Device = Tablets, Ipads (portrait)  ##Screen = B/w 768px to 1024px */\n  @media (min-width: 768px) and (max-width: 1024px) {  \n    \n     #input-search-dest {\n      width: 100%;\n    }\n    #check-in-time {\n      width: 100%;\n    }\n    #number-of-person {\n      width: 100%;\n    }\n  }\n  /* ##Device = Tablets, Ipads (landscape)  ##Screen = B/w 768px to 1024px*/\n  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n     #input-search-dest {\n     /* width: 0%;*/\n    }\n    #check-in-time {\n     /* width: 0%;*/\n    }\n    #number-of-person {\n      /*width: 0%;*/\n    }\n    \n  }\n  /* ##Device = Low Resolution Tablets, Mobiles (Landscape)  ##Screen = B/w 481px to 767px*/\n  @media (min-width: 481px) and (max-width: 767px) { \n     #input-search-dest {\n      width: 100%;\n    }\n    #check-in-time {\n      width: 100%;\n    }\n    #number-of-person {\n      width: 100%;\n    }\n\n  }\n  /* ##Device = Most of the Smartphones Mobiles (Portrait)  ##Screen = B/w 320px to 479px*/\n  @media (min-width: 320px) and (max-width: 480px) {\n  .search-panel .title{\n    text-align: center;\n    color: #fff;\n    font-size: 20px;\n  }\n  .search-panel .subtitle{\n    font-size: 11px;\n    text-align: center;\n  }\n  .search-panel .subtitle1 {\n     background-color: #ccc;\n    padding:5px 10px;\n    border-radius: 20px;\n   }\n  .search-panel .search-text {\n    padding: 0px;\n  }\n  .search-panel .check-out-date {\n    padding: 0px;\n  }\n  .search-panel .no-of-room {\n    padding: 0 0 0 0px;\n  }\n  .ip-height {\n      height: 35px;\n  }\n\n  #input-search-dest {\n    width: 100%;\n  }\n  #check-in-time {\n    width: 100%;\n  }\n  #number-of-person {\n    width: 100%;\n  }\n\n   \n }"

/***/ }),

/***/ "./src/app/component/search-panel/search-panel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/search-panel/search-panel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 search-panel\">\n  <div class=\"col-sm-12\" style=\"padding: 50px 0 0 0\">\n    <p class=\"title\"><b>Find deals for any season</b></p>\n    <p class=\"subtitle\" ><span class=\"subtitle1\">From cosy country homes to funky city flats</span></p>\n  </div>\n  <!-- bootstrap form -->\n  <div class=\"col-sm-12\">\n    <div class=\"col-sm-12\" style=\"padding: 10px;margin-bottom: 25px;\">\n      <form class=\"form-inline\"  [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" style=\"padding: 0px;\">\n        <div class=\"col-md-4  col-sm-4 col-sm-offset-2 search-text\">\n          <div class=\"form-group input-group\">\n            <span class=\"input-group-addon\"> <i class=\"fa fa-globe\" aria-hidden=\"true\"></i></span>\n            <!-- <input type=\"text\" class=\"form-control ip-height\" id=\"input-search-dest\" placeholder=\"Where are you going?\"> -->\n            <input ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" class=\"form-control ip-height\" id=\"input-search-dest\" formControlName=\"searchPlace\" />\n          </div>\n        </div>\n        <div class=\"col-sm-2\" style=\"padding: 0px;\">\n          <div class=\"form-group input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control ip-height datepicker\"  id=\"check-in-time\" name=\"checkInDate\" placeholder=\"Check in Date\" formControlName=\"checkInDate\" />\n          </div>\n        </div>\n         <div class=\"col-sm-2 check-out-date\">\n          <div class=\"form-group input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control ip-height\" id=\"check-out-time\" placeholder=\"Check out Date\" formControlName=\"checkOutDate\" />\n          </div>\n        </div>\n        <div class=\"col-sm-2\">        \n        </div>\n\n        <div class=\"col-sm-12\" style=\"margin-top: 10px;padding: 0px;\">\n          <div class=\"col-sm-2 col-xs-6 col-sm-offset-3\" style=\"padding: 0 5px;\">\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n              <input type=\"text\" class=\"form-control ip-height\" id=\"\" placeholder=\"No of Adults\">\n            </div>\n          </div>\n          <div class=\"col-sm-2 col-xs-6\" style=\"padding: 0 0 0 10px;\">\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"> <i class=\"fa fa-child\" aria-hidden=\"true\"></i></span>\n              <input type=\"text\" class=\"form-control ip-height\" id=\"\" placeholder=\"No of children\">\n            </div>\n          </div>\n          <div class=\"col-sm-2 no-of-room\" style=\"\">\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"> <i class=\"fa fa-bed\" aria-hidden=\"true\"></i></span>\n              <input type=\"text\" class=\"form-control ip-height\" id=\"\" placeholder=\"No of rooms\">\n            </div>\n          </div>\n        </div>\n        \n         <div class=\"col-sm-7 col-sm-offset-5\" style=\"margin-top: 20px;\">\n          <div class=\"checkbox\">\n            <label><input type=\"checkbox\"> I am travelling for work</label>\n          </div>\n        </div>   \n        <div class=\"col-sm-12\" style=\"margin-top: 20px;\">\n          <div class=\"col-sm-6 col-sm-offset-3\">\n            <button type=\"submit\" class=\"btn btn-default\"  style=\"width: 100%;height: 50px;background: linear-gradient(to bottom, #33ccff 0%, #666699 100%);color: #ffffff;font-size: 22px;\"><b><a routerLink=\"/result\" style=\"color: #fff;\" >SEARCH</a></b></button>\n          </div>\n        </div>            \n      </form>\n    </div>   \n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/component/search-panel/search-panel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/search-panel/search-panel.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPanelComponent", function() { return SearchPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPanelComponent = /** @class */ (function () {
    function SearchPanelComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    SearchPanelComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $("#check-in-time").datepicker({
                minDate: 0
            }).trigger('input');
        });
        $(document).ready(function () {
            $("#check-out-time").datepicker({
                minDate: 0
            });
        });
        this.registerForm = this.formBuilder.group({
            searchPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            checkInDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            checkOutDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    Object.defineProperty(SearchPanelComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SearchPanelComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.registerForm);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    };
    SearchPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-panel',
            template: __webpack_require__(/*! ./search-panel.component.html */ "./src/app/component/search-panel/search-panel.component.html"),
            styles: [__webpack_require__(/*! ./search-panel.component.css */ "./src/app/component/search-panel/search-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/nilesh/ND/Angular4 Project/hotelbooking/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map