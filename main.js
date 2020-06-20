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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<main><app-main></app-main></main>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _promo_promo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./promo/promo.component */ "./src/app/promo/promo.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translation.service */ "./src/app/translation.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _promo_promo_component__WEBPACK_IMPORTED_MODULE_8__["PromoComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_9__["FileComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_translation_service__WEBPACK_IMPORTED_MODULE_13__["TranslationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div>\n    <ul>\n      <li>{{this.svc.getText(\"FILE_1\")}}</li>\n      <li>→</li>\n      <li class=\"active\">{{this.svc.getText(\"FILE_2\")}}</li>\n      <li>→</li>\n      <li>{{this.svc.getText(\"FILE_3\")}}</li>\n    </ul>\n  </div>\n\n  <div id=\"drop-area\"  (dragover)=\"handleDragOver($event)\" (drop)=\"handleDrop($event)\" (dragenter)=\"handleDragEnter($event)\" (dragleave)=\"handleDragLeave($event)\" accept=\".jpg, .tif, .pdf \" [ngClass] =\"{highlight: dragOver}\">\n    <form>\n      <span *ngIf=\"!files&&!dragOver\">\n        <img src=\"../assets/jpg.svg\" alt=\"jpg\" width=\"48px\">\n        <img src=\"../assets/tif.svg\" alt=\"tif\" width=\"48px\">\n        <img src=\"../assets/pdf.svg\" alt=\"pdf\" width=\"48px\">\n      </span>\n      <span *ngIf=\"!files&&!dragOver\">\n        <span>{{this.svc.getText(\"FILE_INFO\")}}</span>\n        <label>{{this.svc.getText(\"FILE_INPUT\")}}<input type=\"file\" (change)=\"handleFiles($event)\" multiple accept=\".jpg, .tif, .pdf \" name=\"files\"></label>\n      </span>\n      <ol *ngIf=\"files&&!dragOver\">\n        <li *ngFor=\"let file of files\">{{file.name}},&nbsp;{{file.size/1024}}&nbsp;{{this.svc.getText(\"FILE_SIZE\")}}</li>\n      </ol>\n      <a *ngIf=\"files&&!dragOver\" href=\"#\" (click)=\"removeFiles($event)\">{{this.svc.getText(\"FILE_DEL\")}}</a>\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/file/file.component.less":
/*!******************************************!*\
  !*** ./src/app/file/file.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.absolute-center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\ndiv {\n  margin-top: 75px;\n}\ndiv ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndiv ul li {\n  display: inline-block;\n}\ndiv ul li {\n  color: rgba(153, 153, 153, 0.719);\n  padding: 7px;\n}\ndiv ul li.active {\n  background-color: rgba(153, 153, 153, 0.719);\n  color: white;\n}\ndiv #drop-area {\n  margin-top: 30px;\n  width: 100%;\n  height: 150px;\n  box-sizing: border-box;\n  border: 3px dashed rgba(153, 153, 153, 0.719);\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  transition: all 0.3s ease;\n}\ndiv #drop-area.highlight {\n  border-color: red !important;\n  background-color: rgba(153, 153, 153, 0.2);\n}\ndiv #drop-area img {\n  margin: 0 25px 23px 25px;\n}\ndiv #drop-area form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-direction: column;\n}\ndiv #drop-area form label {\n  color: red;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS9maWxlLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL25pa2l0YS9EZXNrdG9wL9GA0LDQsdC+0YLQsC9tb25vc3BhY2Uvc3JjL2FwcC92YXJpYWJsZXMubGVzcyIsIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC/RgNCw0LHQvtGC0LAvbW9ub3NwYWNlL3NyYy9hcHAvZmlsZS9maWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQ1k5RTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QURWRDtBRU5BO0VBQ0ksZ0JBQUE7QUZRSjtBRVRBO0VEaUNDLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURyQkQ7QUVkQTtFRHFDRSxxQkFBQTtBRHBCRjtBRWpCQTtFQU9ZLGlDQUFBO0VBQ0EsWUFBQTtBRmFaO0FFWlk7RUFFSSw0Q0FBQTtFQUNBLFlBQUE7QUZhaEI7QUV6QkE7RUFxQlEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFRCtDUCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBcUJBLHlCQUFBO0FEM0REO0FFVFE7RUFDSSw0QkFBQTtFQUNBLDBDQUFBO0FGV1o7QUUxQ0E7RUFvQ1ksd0JBQUE7QUZTWjtBRTdDQTtFRHlFQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VDcENXLHNCQUFBO0FGWVo7QUVwREE7RUEwQ2dCLFVBQUE7RUFDQSxlQUFBO0FGYWhCIiwiZmlsZSI6InNyYy9hcHAvZmlsZS9maWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLmFic29sdXRlLWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5kaXYge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuZGl2IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuZGl2IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuZGl2IHVsIGxpIHtcbiAgY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC43MTkpO1xuICBwYWRkaW5nOiA3cHg7XG59XG5kaXYgdWwgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjcxOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmRpdiAjZHJvcC1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogM3B4IGRhc2hlZCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNzE5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuZGl2ICNkcm9wLWFyZWEuaGlnaGxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpO1xufVxuZGl2ICNkcm9wLWFyZWEgaW1nIHtcbiAgbWFyZ2luOiAwIDI1cHggMjNweCAyNXB4O1xufVxuZGl2ICNkcm9wLWFyZWEgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmRpdiAjZHJvcC1hcmVhIGZvcm0gbGFiZWwge1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AYmc6IGxpZ2h0Z3JleTtcbkByZWQtY29sb3I6IHJlZDtcbkBncmF5LWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNzE5KTtcbkBmb250LWxpZ2h0OiB3aGl0ZTtcbkBmb250LWRhcms6IGJsYWNrO1xuQGJhc2UtdHJhbnNpdGlvbi10aW1lOiAwLjNzO1xuQGJhc2UtdHJhbnNpdGlvbi1mdW5jdGlvbjogZWFzZTtcbkBmb250LWJhc2Utc2l6ZTogMTRweDtcblxuQGZvbnQtZmFtaWx5OiBDaXJjZSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbi5hYnNvbHV0ZS1jZW50ZXJ7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MDtcblx0bGVmdDowO1xuXHRib3R0b206MDtcblx0cmlnaHQ6MDtcblx0bWFyZ2luOmF1dG87XG59XG5cblxuLmZvbnQtc2l6ZShAbXVsdDoxKXtcblx0Zm9udC1zaXplOiBAZm9udC1iYXNlLXNpemUgKiBAbXVsdCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmZsb3coKXtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHRcblx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuXHR3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLnJlbW92ZS1saXN0LXN0eWxlKCl7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdG1hcmdpbjowO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdH1cbn1cblxuLnJlbW92ZS1saW5rLXN0eWxlKEBmb250LWNvbG9yOiBAZm9udC1saWdodCl7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6QGZvbnQtY29sb3I7XG59XG5cbi5yZW1vdmUtaW5wdXQtc3R5bGUoQGZvbnQtY29sb3I6IEBmb250LWxpZ2h0OyBAZm9udC1zaXplOiBAZm9udC1iYXNlLXNpemUpe1xuXHRiYWNrZ3JvdW5kOm5vbmU7XG5cdGNvbG9yOkBmb250LWNvbG9yO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuXHRmb250LXNpemU6IEBmb250LXNpemU7XG5cdGJvcmRlcjpub25lO1xuXHQmOmZvY3Vze1xuXHRcdG91dGxpbmU6IG5vbmU7XHRcblx0fVxufVxuXG4ucmVtb3ZlLWJ0bi1zdHlsZShAYmc6IG5vbmU7IEBjb2xvcjogQGZvbnQtbGlnaHQ7IEBmb250LXNpemU6IEBmb250LWJhc2Utc2l6ZSl7XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcblx0Y29sb3I6QGNvbG9yO1xuXHRiYWNrZ3JvdW5kOkBiZztcbiAgICBib3JkZXI6bm9uZTtcbiAgICBcblx0Jjpob3Zlcntcblx0XHRjdXJzb3I6cG9pbnRlcjtcblx0fVxuXHQmOmZvY3Vze1xuXHRcdG91dGxpbmU6bm9uZTtcblx0fVxufVxuXG4uZmxleChAanVzdGlmeS1jb250ZW50OiBjZW50ZXI7IEBhbGlnbi1pdGVtczogY2VudGVyOyBAd3JhcDogbm93cmFwKXtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBAanVzdGlmeS1jb250ZW50O1xuXHRhbGlnbi1pdGVtczogQGFsaWduLWl0ZW1zO1xuXHRmbGV4LXdyYXA6QHdyYXA7XG59XG5cbi5ib3goQHdpZHRoOmF1dG87IEBoZWlnaHQ6YXV0bzsgQGJvcmRlci1yYWRpdXM6IDA7IEBiZzpub25lOyBAYm9yZGVyOm5vbmU7IEBib3gtc2l6aW5nOiBjb250ZW50LWJveCl7XG5cdFxuXHR3aWR0aDpAd2lkdGg7XG5cdGhlaWdodDpAaGVpZ2h0O1xuXHRiYWNrZ3JvdW5kOiBAYmc7XG5cdGJvcmRlcjogQGJvcmRlcjtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nO1xuXHRcbn1cblxuLmRldi1ib3goQHdpZHRoOyBAaGVpZ2h0KXtcblx0XG5cdC5ib3goQHdpZHRoOyBAaGVpZ2h0OyAwOyBmYWRlKEBiYXNlLWNvbG9yLDIwJSk7IDFweCBzb2xpZCB3aGl0ZTsgYm9yZGVyLWJveCk7XG5cdFxufVxuXG4udHJhbnNpdGlvbihAdHJhbnN0aW9uLXRpbWU6IEBiYXNlLXRyYW5zaXRpb24tdGltZTsgQGZ1bmN0aW9uOiBAYmFzZS10cmFuc2l0aW9uLWZ1bmN0aW9uOyBAc2VsZWN0b3I6IGFsbCl7XG5cdHRyYW5zaXRpb246IEBzZWxlY3RvciBAdHJhbnN0aW9uLXRpbWUgQGZ1bmN0aW9uO1xufVxuXG4uc2NhbGUoQHNjYWxlKXtcblx0dHJhbnNmb3JtOiBzY2FsZShAc2NhbGUpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoQHNjYWxlKTtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlKEBzY2FsZSk7XG59IiwiQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy5sZXNzXCI7XG5cbmRpdntcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xuICAgIHVse1xuXG4gICAgICAgIC5yZW1vdmUtbGlzdC1zdHlsZTtcbiAgICAgICAgbGl7XG5cbiAgICAgICAgICAgIGNvbG9yOiBAZ3JheS1jb2xvcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBncmF5LWNvbG9yO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAZm9udC1saWdodDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZHJvcC1hcmVhe1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoxNTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOjNweCBkYXNoZWQgQGdyYXktY29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC5mbGV4O1xuICAgICAgICAudHJhbnNpdGlvbigpO1xuICAgICAgICAmLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IEByZWQtY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUoQGdyYXktY29sb3IsMjAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZ3tcblxuICAgICAgICAgICAgbWFyZ2luOjAgMjVweCAyM3B4IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybXtcbiAgICAgICAgICAgIC5mbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOkByZWQtY29sb3I7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translation.service */ "./src/app/translation.service.ts");



var FileComponent = /** @class */ (function () {
    function FileComponent(svc) {
        this.svc = svc;
        this.dragOver = false;
    }
    FileComponent.prototype.preventDefaults = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    FileComponent.prototype.handleDragEnter = function (e) {
        this.dragOver = true;
        this.preventDefaults(e);
    };
    FileComponent.prototype.handleDragLeave = function (e) {
        this.dragOver = false;
        this.preventDefaults(e);
    };
    FileComponent.prototype.handleDragOver = function (e) {
        this.dragOver = true;
        this.preventDefaults(e);
    };
    FileComponent.prototype.handleDrop = function (e) {
        this.preventDefaults(e);
        this.files = e.dataTransfer.files;
        this.dragOver = false;
    };
    FileComponent.prototype.handleFiles = function (e) {
        this.files = e.target.files;
    };
    FileComponent.prototype.removeFiles = function (e) {
        this.preventDefaults(e);
        this.files = null;
    };
    FileComponent.prototype.uploadFile = function (file) {
        var url = '#';
        var formData = new FormData();
        formData.append('file', file);
        fetch(url, {
            method: 'POST',
            body: formData
        });
    };
    FileComponent.prototype.ngOnInit = function () {
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.less */ "./src/app/file/file.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div>\n    <input type=\"email\" placeholder=\"{{this.svc.getText('FOOTER_SUBSCRIBE')}}\" name=\"email\" [(ngModel)]=\"email\">\n    <button  class=\"button-third-type\" [disabled]=\"!email\">ОК</button>\n  </div>\n  <div>\n    <p>\n        {{this.svc.getText('FOOTER_1')}} <a href=\"#\">{{this.svc.getText('FOOTER_2')}}</a>{{this.svc.getText('FOOTER_3')}}<a href=\"#\">{{this.svc.getText('FOOTER_4')}}</a>{{this.svc.getText('FOOTER_5')}}<a href=\"#\">{{this.svc.getText('FOOTER_6')}}</a>{{this.svc.getText('FOOTER_7')}}<a href=\"#\">{{this.svc.getText('FOOTER_8')}}</a>\n    </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.less":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.absolute-center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\nfooter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n}\nfooter div:first-of-type {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: auto 3em;\n}\nfooter div:first-of-type input {\n  border-radius: 2px 0 0 2px;\n}\nfooter div:first-of-type .button-third-type {\n  border-radius: 0 2px 2px 0;\n}\nfooter div:last-of-type {\n  width: 60%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC/RgNCw0LHQvtGC0LAvbW9ub3NwYWNlL3NyYy9hcHAvdmFyaWFibGVzLmxlc3MiLCIvVXNlcnMvbmlraXRhL0Rlc2t0b3Av0YDQsNCx0L7RgtCwL21vbm9zcGFjZS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FDWTlFO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBRFZEO0FFTkE7RUR5RUMsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRGhFRDtBRVpBO0VBSVEsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUZXUjtBRWpCQTtFQVFZLDBCQUFBO0FGWVo7QUVwQkE7RUFhWSwwQkFBQTtBRlVaO0FFdkJBO0VBbUJRLFVBQUE7QUZPUiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4uYWJzb2x1dGUtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5mb290ZXIgZGl2OmZpcnN0LW9mLXR5cGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzZW07XG59XG5mb290ZXIgZGl2OmZpcnN0LW9mLXR5cGUgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbn1cbmZvb3RlciBkaXY6Zmlyc3Qtb2YtdHlwZSAuYnV0dG9uLXRoaXJkLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cbmZvb3RlciBkaXY6bGFzdC1vZi10eXBlIHtcbiAgd2lkdGg6IDYwJTtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBiZzogbGlnaHRncmV5O1xuQHJlZC1jb2xvcjogcmVkO1xuQGdyYXktY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC43MTkpO1xuQGZvbnQtbGlnaHQ6IHdoaXRlO1xuQGZvbnQtZGFyazogYmxhY2s7XG5AYmFzZS10cmFuc2l0aW9uLXRpbWU6IDAuM3M7XG5AYmFzZS10cmFuc2l0aW9uLWZ1bmN0aW9uOiBlYXNlO1xuQGZvbnQtYmFzZS1zaXplOiAxNHB4O1xuXG5AZm9udC1mYW1pbHk6IENpcmNlLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuLmFic29sdXRlLWNlbnRlcntcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDowO1xuXHRsZWZ0OjA7XG5cdGJvdHRvbTowO1xuXHRyaWdodDowO1xuXHRtYXJnaW46YXV0bztcbn1cblxuXG4uZm9udC1zaXplKEBtdWx0OjEpe1xuXHRmb250LXNpemU6IEBmb250LWJhc2Utc2l6ZSAqIEBtdWx0ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVyZmxvdygpe1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcdFxuXHQtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDsgXG5cdHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4ucmVtb3ZlLWxpc3Qtc3R5bGUoKXtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0bWFyZ2luOjA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpe1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxufVxuXG4ucmVtb3ZlLWxpbmstc3R5bGUoQGZvbnQtY29sb3I6IEBmb250LWxpZ2h0KXtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjpAZm9udC1jb2xvcjtcbn1cblxuLnJlbW92ZS1pbnB1dC1zdHlsZShAZm9udC1jb2xvcjogQGZvbnQtbGlnaHQ7IEBmb250LXNpemU6IEBmb250LWJhc2Utc2l6ZSl7XG5cdGJhY2tncm91bmQ6bm9uZTtcblx0Y29sb3I6QGZvbnQtY29sb3I7XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcblx0Ym9yZGVyOm5vbmU7XG5cdCY6Zm9jdXN7XG5cdFx0b3V0bGluZTogbm9uZTtcdFxuXHR9XG59XG5cbi5yZW1vdmUtYnRuLXN0eWxlKEBiZzogbm9uZTsgQGNvbG9yOiBAZm9udC1saWdodDsgQGZvbnQtc2l6ZTogQGZvbnQtYmFzZS1zaXplKXtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcblx0Zm9udC1zaXplOiBAZm9udC1zaXplO1xuXHRjb2xvcjpAY29sb3I7XG5cdGJhY2tncm91bmQ6QGJnO1xuICAgIGJvcmRlcjpub25lO1xuICAgIFxuXHQmOmhvdmVye1xuXHRcdGN1cnNvcjpwb2ludGVyO1xuXHR9XG5cdCY6Zm9jdXN7XG5cdFx0b3V0bGluZTpub25lO1xuXHR9XG59XG5cbi5mbGV4KEBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgQGFsaWduLWl0ZW1zOiBjZW50ZXI7IEB3cmFwOiBub3dyYXApe1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IEBqdXN0aWZ5LWNvbnRlbnQ7XG5cdGFsaWduLWl0ZW1zOiBAYWxpZ24taXRlbXM7XG5cdGZsZXgtd3JhcDpAd3JhcDtcbn1cblxuLmJveChAd2lkdGg6YXV0bzsgQGhlaWdodDphdXRvOyBAYm9yZGVyLXJhZGl1czogMDsgQGJnOm5vbmU7IEBib3JkZXI6bm9uZTsgQGJveC1zaXppbmc6IGNvbnRlbnQtYm94KXtcblx0XG5cdHdpZHRoOkB3aWR0aDtcblx0aGVpZ2h0OkBoZWlnaHQ7XG5cdGJhY2tncm91bmQ6IEBiZztcblx0Ym9yZGVyOiBAYm9yZGVyO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcblx0Ym94LXNpemluZzogQGJveC1zaXppbmc7XG5cdFxufVxuXG4uZGV2LWJveChAd2lkdGg7IEBoZWlnaHQpe1xuXHRcblx0LmJveChAd2lkdGg7IEBoZWlnaHQ7IDA7IGZhZGUoQGJhc2UtY29sb3IsMjAlKTsgMXB4IHNvbGlkIHdoaXRlOyBib3JkZXItYm94KTtcblx0XG59XG5cbi50cmFuc2l0aW9uKEB0cmFuc3Rpb24tdGltZTogQGJhc2UtdHJhbnNpdGlvbi10aW1lOyBAZnVuY3Rpb246IEBiYXNlLXRyYW5zaXRpb24tZnVuY3Rpb247IEBzZWxlY3RvcjogYWxsKXtcblx0dHJhbnNpdGlvbjogQHNlbGVjdG9yIEB0cmFuc3Rpb24tdGltZSBAZnVuY3Rpb247XG59XG5cbi5zY2FsZShAc2NhbGUpe1xuXHR0cmFuc2Zvcm06IHNjYWxlKEBzY2FsZSk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAc2NhbGUpO1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoQHNjYWxlKTtcbn0iLCJAaW1wb3J0IFwiLi4vdmFyaWFibGVzLmxlc3NcIjtcblxuZm9vdGVye1xuXG4gICAgLmZsZXgoc3BhY2UtYmV0d2Vlbik7XG4gICAgZGl2OmZpcnN0LW9mLXR5cGV7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDNlbTtcbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJ1dHRvbi10aGlyZC10eXBle1xuXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGRpdjpsYXN0LW9mLXR5cGV7XG5cbiAgICAgICAgd2lkdGg6IDYwJTtcblxuICAgIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translation.service */ "./src/app/translation.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(svc) {
        this.svc = svc;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/footer/footer.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"form\">\n  <div>\n    <span></span>\n    <h2>{{this.svc.getText(\"FORM_HEAD\")}}</h2>\n    <span></span>\n  </div>\n  <form action=\"#\" method=\"post\">\n    <div class=\"form-group\">\n      <span>{{this.svc.getText(\"FORM_NAME_INFO\")}}</span>\n      <input type=\"text\" [(ngModel)]=\"fio\" name=\"fio\" id=\"form-fio\" required>\n    </div>\n    <div class=\"form-group\">\n      <span>{{this.svc.getText(\"FORM_COMPANY\")}}</span>\n      <input type=\"text\" [(ngModel)]=\"companyName\" name=\"companyName\" >\n      <span class=\"form-info\" [ngClass]=\"{active: !companyName}\">{{this.svc.getText(\"FORM_COMPANY_INFO\")}}</span>\n    </div>\n    <div class=\"form-group\">\n      <span>{{this.svc.getText(\"FORM_CONTACTS\")}}</span>\n      <div id=\"contact-info\">\n        <input type=\"text\" placeholder=\"{{this.svc.getText('FORM_CITY')}}\" value=\"\" name=\"city\" [(ngModel)]=\"city\" id=\"form-city\" required>\n        <select name=\"country\" [(ngModel)]=\"country\" id=\"form-country\" required>\n          <option value=\"p0\" disabled selected>{{this.svc.getText('FORM_COUNTRY')}}</option>\n          <option value=\"p1\" >Пункт 1</option>\n          <option value=\"p2\">Пункт 2</option>\n          <option value=\"p3\">Пункт 3</option>\n          <option value=\"p4\">Пункт 4</option>\n          <option value=\"p5\">Пункт 5</option>\n          <option value=\"p6\">Пункт 6</option>\n          <option value=\"p7\">Пункт 7</option>\n        </select>\n        <input type=\"text\" placeholder=\"{{this.svc.getText('FORM_INDEX')}}\" name=\"index\" [(ngModel)]=\"index\" id=\"form-index\" required>\n        <input type=\"text\" placeholder=\"{{this.svc.getText('FORM_POSTAL')}}\" name=\"postal\" [(ngModel)]=\"postal\" id=\"form-postal\" required>\n        <input type=\"tel\" placeholder=\"{{this.svc.getText('FORM_TEL')}}\" name=\"tel\" [(ngModel)]=\"tel\" id=\"form-tel\" required>\n        <input type=\"email\" placeholder=\"{{this.svc.getText('FORM_EMAIL')}}\" name=\"email\" [(ngModel)]=\"email\" id=\"form-mail\" required>\n      </div>\n      <div class=\"next-btn\">\n          <button type=\"submit\" class=\"button-second-type\" [disabled]=\"!fio||!city||!country||!index||!postal||!tel||!email\">{{this.svc.getText(\"FORM_NEXT\")}} →</button>\n          <div>\n            <span *ngIf=\"!fio||!city||!country||!index||!postal||!tel||!email; else thanks\" class=\"form-state-info\">{{this.svc.getText(\"FORM_INFO\")}}\n              <span *ngIf=\"!fio\" ><a href=\"#form-fio\">{{this.svc.getText('FORM_NAME')}}</a></span><span *ngIf=\"!fio&&(!city||!country||!index||!postal||!tel||!email)\" >, </span>\n              <span *ngIf=\"!city\" ><a href=\"#form-city\">{{this.svc.getText('FORM_CITY')}}</a></span><span  *ngIf=\"!city&&(!country||!index||!postal||!tel||!email)\" >, </span>\n              <span *ngIf=\"!country\"><a href=\"#form-country\">{{this.svc.getText('FORM_COUNTRY')}}</a></span><span *ngIf=\"!country&&(!index||!postal||!tel||!email)\" >, </span>\n              <span *ngIf=\"!index\" ><a href=\"#form-index\">{{this.svc.getText('FORM_INDEX')}}</a></span><span *ngIf=\"!index&&(!postal||!tel||!email)\" >, </span>\n              <span *ngIf=\"!postal\" ><a href=\"#form-postal\">{{this.svc.getText('FORM_POSTAL')}}</a></span><span *ngIf=\"!postal&&(!tel||!email)\" >, </span>\n              <span *ngIf=\"!tel\" ><a href=\"#form-tel\">{{this.svc.getText('FORM_TEL')}}</a></span><span *ngIf=\"!tel&&!email\" >, </span>\n              <span *ngIf=\"!email\" ><a href=\"#form-mail\">{{this.svc.getText('FORM_EMAIL')}}</a></span>\n            </span>\n            <ng-template #thanks><span class=\"form-state-info\">{{this.svc.getText('FORM_ALL_DONE')}}</span></ng-template>\n          </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.less":
/*!******************************************!*\
  !*** ./src/app/form/form.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.absolute-center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n#form {\n  margin: 54px 0;\n}\n#form > div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n#form > div h2 {\n  margin: 0 16px;\n}\n#form > div span {\n  display: block;\n  flex-grow: 1;\n  height: 1px;\n  background: rgba(153, 153, 153, 0.719);\n}\n#form form .form-group {\n  display: grid;\n  grid-template-columns: 35% 65%;\n  grid-template-rows: auto;\n  padding: 21px 52px;\n  font-size: 17.08px !important;\n  margin: 0;\n  position: relative;\n}\n#form form .form-group input {\n  font-size: 17.08px !important;\n}\n#form form .form-group > span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  width: 100%;\n  padding: 5px 17px;\n}\n#form form .form-group .next-btn {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  width: 100%;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 25% 75%;\n  grid-template-rows: 100%;\n  margin: 27px 0;\n}\n#form form .form-group .next-btn button {\n  margin: 0 28px 0 0;\n  font-size: 17.08px !important;\n  display: inline;\n}\n#form form .form-group .next-btn div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n#form form .form-group .next-btn div .form-state-info {\n  display: inline-block;\n  font-size: 14px !important;\n  color: rgba(25, 25, 25, 0.719);\n}\n#form form .form-group .form-info {\n  font-size: 14px !important;\n  position: absolute;\n  top: 70%;\n  left: 35%;\n  color: transparent;\n  transition: all 0.3s ease;\n}\n#form form .form-group .form-info.active {\n  color: rgba(25, 25, 25, 0.719);\n}\n#form form .form-group #contact-info {\n  width: 100%;\n  display: grid;\n  padding: 0;\n  grid-template-columns: 27% 27.5% 41%;\n  grid-template-rows: repeat(auto-fill, 4);\n  grid-template-areas: \"city city country\" \"index postal postal\" \"tel tel tel\" \"email email email\";\n  grid-gap: 17px 9px;\n}\n#form form .form-group #contact-info input {\n  width: auto;\n}\n#form form .form-group #contact-info input[name=\"city\"] {\n  grid-area: city;\n}\n#form form .form-group #contact-info input[name=\"country\"] {\n  grid-area: country;\n}\n#form form .form-group #contact-info input[name=\"index\"] {\n  grid-area: index;\n}\n#form form .form-group #contact-info input[name=\"postal\"] {\n  grid-area: postal;\n}\n#form form .form-group #contact-info input[name=\"tel\"] {\n  grid-area: tel;\n}\n#form form .form-group #contact-info input[name=\"email\"] {\n  grid-area: email;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL25pa2l0YS9EZXNrdG9wL9GA0LDQsdC+0YLQsC9tb25vc3BhY2Uvc3JjL2FwcC92YXJpYWJsZXMubGVzcyIsIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC/RgNCw0LHQvtGC0LAvbW9ub3NwYWNlL3NyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQ1k5RTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QURWRDtBRU5BO0VBQ0ksY0FBQTtBRlFKO0FFVEE7RUR5RUMsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRDdERDtBRWZBO0VBT1ksY0FBQTtBRldaO0FFbEJBO0VBV1ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUZVWjtBRXhCQTtFQXVCWSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VETFgsNkJBQUE7RUNPVyxTQUFBO0VBQ0Esa0JBQUE7QUZJWjtBRWpDQTtFRHFCQyw2QkFBQTtBRGVEO0FFcENBO0VEeUJDLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUNNZSxXQUFBO0VBQ0EsaUJBQUE7QUZTaEI7QUU3Q0E7RUF5Q2dCLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUVBLGNBQUE7QUZJaEI7QUV6REE7RUF3RG9CLGtCQUFBO0VEbkNuQiw2QkFBQTtFQ3FDbUIsZUFBQTtBRklwQjtBRTlEQTtFRHlFQyxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEUkQ7QUVwRUE7RUFnRXdCLHFCQUFBO0VEM0N2QiwwQkFBQTtFQzZDdUIsOEJBQUE7QUZPeEI7QUV6RUE7RURxQkMsMEJBQUE7RUN1RGUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VEa0JmLHlCQUFBO0FEaEJEO0FFQWdCO0VBRUksOEJBQUE7QUZDcEI7QUVwRkE7RUEwRmdCLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxnR0FBQTtFQUtBLGtCQUFBO0FGUGhCO0FFN0ZBO0VBd0dvQixXQUFBO0FGUnBCO0FFU29CO0VBRUksZUFBQTtBRlJ4QjtBRVdvQjtFQUVJLGtCQUFBO0FGVnhCO0FFYW9CO0VBRUksZ0JBQUE7QUZaeEI7QUVlb0I7RUFFSSxpQkFBQTtBRmR4QjtBRWlCb0I7RUFFSSxjQUFBO0FGaEJ4QjtBRW1Cb0I7RUFFSSxnQkFBQTtBRmxCeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4uYWJzb2x1dGUtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbiNmb3JtIHtcbiAgbWFyZ2luOiA1NHB4IDA7XG59XG4jZm9ybSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4jZm9ybSA+IGRpdiBoMiB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuI2Zvcm0gPiBkaXYgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNzE5KTtcbn1cbiNmb3JtIGZvcm0gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA2NSU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgcGFkZGluZzogMjFweCA1MnB4O1xuICBmb250LXNpemU6IDE3LjA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgZm9udC1zaXplOiAxNy4wOHB4ICFpbXBvcnRhbnQ7XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwID4gc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTdweDtcbn1cbiNmb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLm5leHQtYnRuIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gIGdyaWQtcm93LWVuZDogMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICBtYXJnaW46IDI3cHggMDtcbn1cbiNmb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLm5leHQtYnRuIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAyOHB4IDAgMDtcbiAgZm9udC1zaXplOiAxNy4wOHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiNmb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLm5leHQtYnRuIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwIC5uZXh0LWJ0biBkaXYgLmZvcm0tc3RhdGUtaW5mbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDI1LCAyNSwgMjUsIDAuNzE5KTtcbn1cbiNmb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0taW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiAzNSU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbiNmb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0taW5mby5hY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNSwgMjUsIDI1LCAwLjcxOSk7XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwICNjb250YWN0LWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNyUgMjcuNSUgNDElO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDQpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNpdHkgY2l0eSBjb3VudHJ5XCIgXCJpbmRleCBwb3N0YWwgcG9zdGFsXCIgXCJ0ZWwgdGVsIHRlbFwiIFwiZW1haWwgZW1haWwgZW1haWxcIjtcbiAgZ3JpZC1nYXA6IDE3cHggOXB4O1xufVxuI2Zvcm0gZm9ybSAuZm9ybS1ncm91cCAjY29udGFjdC1pbmZvIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwICNjb250YWN0LWluZm8gaW5wdXRbbmFtZT1cImNpdHlcIl0ge1xuICBncmlkLWFyZWE6IGNpdHk7XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwICNjb250YWN0LWluZm8gaW5wdXRbbmFtZT1cImNvdW50cnlcIl0ge1xuICBncmlkLWFyZWE6IGNvdW50cnk7XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwICNjb250YWN0LWluZm8gaW5wdXRbbmFtZT1cImluZGV4XCJdIHtcbiAgZ3JpZC1hcmVhOiBpbmRleDtcbn1cbiNmb3JtIGZvcm0gLmZvcm0tZ3JvdXAgI2NvbnRhY3QtaW5mbyBpbnB1dFtuYW1lPVwicG9zdGFsXCJdIHtcbiAgZ3JpZC1hcmVhOiBwb3N0YWw7XG59XG4jZm9ybSBmb3JtIC5mb3JtLWdyb3VwICNjb250YWN0LWluZm8gaW5wdXRbbmFtZT1cInRlbFwiXSB7XG4gIGdyaWQtYXJlYTogdGVsO1xufVxuI2Zvcm0gZm9ybSAuZm9ybS1ncm91cCAjY29udGFjdC1pbmZvIGlucHV0W25hbWU9XCJlbWFpbFwiXSB7XG4gIGdyaWQtYXJlYTogZW1haWw7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AYmc6IGxpZ2h0Z3JleTtcbkByZWQtY29sb3I6IHJlZDtcbkBncmF5LWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNzE5KTtcbkBmb250LWxpZ2h0OiB3aGl0ZTtcbkBmb250LWRhcms6IGJsYWNrO1xuQGJhc2UtdHJhbnNpdGlvbi10aW1lOiAwLjNzO1xuQGJhc2UtdHJhbnNpdGlvbi1mdW5jdGlvbjogZWFzZTtcbkBmb250LWJhc2Utc2l6ZTogMTRweDtcblxuQGZvbnQtZmFtaWx5OiBDaXJjZSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbi5hYnNvbHV0ZS1jZW50ZXJ7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MDtcblx0bGVmdDowO1xuXHRib3R0b206MDtcblx0cmlnaHQ6MDtcblx0bWFyZ2luOmF1dG87XG59XG5cblxuLmZvbnQtc2l6ZShAbXVsdDoxKXtcblx0Zm9udC1zaXplOiBAZm9udC1iYXNlLXNpemUgKiBAbXVsdCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmZsb3coKXtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHRcblx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuXHR3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLnJlbW92ZS1saXN0LXN0eWxlKCl7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdG1hcmdpbjowO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdH1cbn1cblxuLnJlbW92ZS1saW5rLXN0eWxlKEBmb250LWNvbG9yOiBAZm9udC1saWdodCl7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6QGZvbnQtY29sb3I7XG59XG5cbi5yZW1vdmUtaW5wdXQtc3R5bGUoQGZvbnQtY29sb3I6IEBmb250LWxpZ2h0OyBAZm9udC1zaXplOiBAZm9udC1iYXNlLXNpemUpe1xuXHRiYWNrZ3JvdW5kOm5vbmU7XG5cdGNvbG9yOkBmb250LWNvbG9yO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuXHRmb250LXNpemU6IEBmb250LXNpemU7XG5cdGJvcmRlcjpub25lO1xuXHQmOmZvY3Vze1xuXHRcdG91dGxpbmU6IG5vbmU7XHRcblx0fVxufVxuXG4ucmVtb3ZlLWJ0bi1zdHlsZShAYmc6IG5vbmU7IEBjb2xvcjogQGZvbnQtbGlnaHQ7IEBmb250LXNpemU6IEBmb250LWJhc2Utc2l6ZSl7XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcblx0Y29sb3I6QGNvbG9yO1xuXHRiYWNrZ3JvdW5kOkBiZztcbiAgICBib3JkZXI6bm9uZTtcbiAgICBcblx0Jjpob3Zlcntcblx0XHRjdXJzb3I6cG9pbnRlcjtcblx0fVxuXHQmOmZvY3Vze1xuXHRcdG91dGxpbmU6bm9uZTtcblx0fVxufVxuXG4uZmxleChAanVzdGlmeS1jb250ZW50OiBjZW50ZXI7IEBhbGlnbi1pdGVtczogY2VudGVyOyBAd3JhcDogbm93cmFwKXtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBAanVzdGlmeS1jb250ZW50O1xuXHRhbGlnbi1pdGVtczogQGFsaWduLWl0ZW1zO1xuXHRmbGV4LXdyYXA6QHdyYXA7XG59XG5cbi5ib3goQHdpZHRoOmF1dG87IEBoZWlnaHQ6YXV0bzsgQGJvcmRlci1yYWRpdXM6IDA7IEBiZzpub25lOyBAYm9yZGVyOm5vbmU7IEBib3gtc2l6aW5nOiBjb250ZW50LWJveCl7XG5cdFxuXHR3aWR0aDpAd2lkdGg7XG5cdGhlaWdodDpAaGVpZ2h0O1xuXHRiYWNrZ3JvdW5kOiBAYmc7XG5cdGJvcmRlcjogQGJvcmRlcjtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nO1xuXHRcbn1cblxuLmRldi1ib3goQHdpZHRoOyBAaGVpZ2h0KXtcblx0XG5cdC5ib3goQHdpZHRoOyBAaGVpZ2h0OyAwOyBmYWRlKEBiYXNlLWNvbG9yLDIwJSk7IDFweCBzb2xpZCB3aGl0ZTsgYm9yZGVyLWJveCk7XG5cdFxufVxuXG4udHJhbnNpdGlvbihAdHJhbnN0aW9uLXRpbWU6IEBiYXNlLXRyYW5zaXRpb24tdGltZTsgQGZ1bmN0aW9uOiBAYmFzZS10cmFuc2l0aW9uLWZ1bmN0aW9uOyBAc2VsZWN0b3I6IGFsbCl7XG5cdHRyYW5zaXRpb246IEBzZWxlY3RvciBAdHJhbnN0aW9uLXRpbWUgQGZ1bmN0aW9uO1xufVxuXG4uc2NhbGUoQHNjYWxlKXtcblx0dHJhbnNmb3JtOiBzY2FsZShAc2NhbGUpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoQHNjYWxlKTtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlKEBzY2FsZSk7XG59IiwiQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy5sZXNzXCI7XG5cbiNmb3Jte1xuICAgIG1hcmdpbjo1NHB4IDA7XG4gICAgPiBkaXZ7XG5cbiAgICAgICAgLmZsZXgoc3BhY2UtYmV0d2Vlbik7XG4gICAgICAgIGgye1xuXG4gICAgICAgICAgICBtYXJnaW46IDAgMTZweDtcblxuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGhlaWdodDoxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBAZ3JheS1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZm9ybXtcblxuICAgICAgICAuZm9ybS1ncm91cHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUlIDY1JTtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDIxcHggNTJweDtcbiAgICAgICAgICAgIC5mb250LXNpemUoMS4yMik7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICAuZm9udC1zaXplKDEuMjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPiBzcGFue1xuICAgICAgICAgICAgICAgIC5vdmVyZmxvdygpO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMTdweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQtYnRue1xuXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI3cHggMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyOHB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgLmZvbnQtc2l6ZSgxLjIyKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAuZmxleChmbGV4LXN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tc3RhdGUtaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb250LXNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oQGdyYXktY29sb3IsNTApO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3JtLWluZm97XG5cbiAgICAgICAgICAgICAgICAuZm9udC1zaXplKCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDo3MCU7XG4gICAgICAgICAgICAgICAgbGVmdDozNSU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgJi5hY3RpdmV7XG5cbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbihAZ3JheS1jb2xvciw1MCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2NvbnRhY3QtaW5mb3tcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjclIDI3LjUlIDQxJTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDQpO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgIFwiY2l0eSBjaXR5IGNvdW50cnlcIlxuICAgICAgICAgICAgICAgIFwiaW5kZXggcG9zdGFsIHBvc3RhbFwiXG4gICAgICAgICAgICAgICAgXCJ0ZWwgdGVsIHRlbFwiXG4gICAgICAgICAgICAgICAgXCJlbWFpbCBlbWFpbCBlbWFpbFwiO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOjE3cHggOXB4O1xuXG4gICAgICAgICAgICAgICAgaW5wdXR7XG5cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6YXV0bztcbiAgICAgICAgICAgICAgICAgICAgJltuYW1lPVwiY2l0eVwiXXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJltuYW1lPVwiY291bnRyeVwiXXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb3VudHJ5O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJltuYW1lPVwiaW5kZXhcIl17XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmW25hbWU9XCJwb3N0YWxcIl17XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcG9zdGFsO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJltuYW1lPVwidGVsXCJde1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRlbDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICZbbmFtZT1cImVtYWlsXCJde1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGVtYWlsO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translation.service */ "./src/app/translation.service.ts");



var FormComponent = /** @class */ (function () {
    function FormComponent(svc) {
        this.svc = svc;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.less */ "./src/app/form/form.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-promo></app-promo>\n<app-file></app-file>\n<app-form></app-form>\n"

/***/ }),

/***/ "./src/app/main/main.component.less":
/*!******************************************!*\
  !*** ./src/app/main/main.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.less */ "./src/app/main/main.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n<nav>\n  <div>\n    <button [ngClass]=\"{active: (this.svc.lang  == 'en')}\"  (click)=\"this.svc.changeLang('en')\">EN</button>\n    <button [ngClass]=\"{active: (this.svc.lang  == 'ru')}\" (click)=\"this.svc.changeLang('ru')\">RU</button>\n  </div>\n  <ul>\n    <li><a href=\"#\" class=\"active\">{{this.svc.getText(\"APPLICATION\")}}</a></li>\n    <li><a href=\"#\">{{this.svc.getText(\"TERMS\")}}</a> </li>\n    <li><a href=\"#\">{{this.svc.getText(\"JURY\")}}</a> </li>\n    <li><a href=\"#\">{{this.svc.getText(\"CONTACTS\")}}</a> </li>\n  </ul>\n</nav>\n</header>\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.less":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.absolute-center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\nnav {\n  margin-top: 52px;\n  height: 104px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n  font-size: 11.9px !important;\n}\nnav ul {\n  min-width: 350px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n}\nnav ul li {\n  display: inline-block;\n}\nnav ul li {\n  display: inline-block;\n}\nnav ul li a {\n  text-decoration: none;\n  color: white;\n  color: red;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  padding: 5px;\n}\nnav ul li a:hover,\nnav ul li a.active {\n  border: 2px solid red !important;\n}\nnav button {\n  font-size: 11.9px !important;\n  border-radius: 50%;\n  height: 28px;\n  width: 28px;\n  margin: 3.5px;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC/RgNCw0LHQvtGC0LAvbW9ub3NwYWNlL3NyYy9hcHAvdmFyaWFibGVzLmxlc3MiLCIvVXNlcnMvbmlraXRhL0Rlc2t0b3Av0YDQsNCx0L7RgtCwL21vbm9zcGFjZS9zcmMvYXBwL25hdi9uYXYuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FDWTlFO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBRFZEO0FFTkE7RUFDRSxnQkFBQTtFQUNELGFBQUE7RUR1RUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQXZEQSw0QkFBQTtBRE5EO0FFZkE7RUFNRSxnQkFBQTtFRDJCRCxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBc0NBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURuREQ7QUV6QkE7RURxQ0UscUJBQUE7QURURjtBRTVCQTtFQVdLLHFCQUFBO0FGb0JMO0FFL0JBO0VEMENDLHFCQUFBO0VBQ0EsWUFBQTtFQzdCSSxVQUFBO0VEbUZKLHlCQUFBO0VDakZJLHNCQUFBO0VBQ0MsNkJBQUE7RUFDRixZQUFBO0FGc0JKO0FFckJJOztFQUVHLGdDQUFBO0FGdUJQO0FFNUNBO0VEcUJDLDRCQUFBO0VDVUMsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FGaUJGIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5hYnNvbHV0ZS1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxubmF2IHtcbiAgbWFyZ2luLXRvcDogNTJweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxMS45cHggIWltcG9ydGFudDtcbn1cbm5hdiB1bCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbm5hdiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbm5hdiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbm5hdiB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA1cHg7XG59XG5uYXYgdWwgbGkgYTpob3Zlcixcbm5hdiB1bCBsaSBhLmFjdGl2ZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxubmF2IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTEuOXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbWFyZ2luOiAzLjVweDtcbiAgcGFkZGluZzogMDtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBiZzogbGlnaHRncmV5O1xuQHJlZC1jb2xvcjogcmVkO1xuQGdyYXktY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC43MTkpO1xuQGZvbnQtbGlnaHQ6IHdoaXRlO1xuQGZvbnQtZGFyazogYmxhY2s7XG5AYmFzZS10cmFuc2l0aW9uLXRpbWU6IDAuM3M7XG5AYmFzZS10cmFuc2l0aW9uLWZ1bmN0aW9uOiBlYXNlO1xuQGZvbnQtYmFzZS1zaXplOiAxNHB4O1xuXG5AZm9udC1mYW1pbHk6IENpcmNlLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuLmFic29sdXRlLWNlbnRlcntcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDowO1xuXHRsZWZ0OjA7XG5cdGJvdHRvbTowO1xuXHRyaWdodDowO1xuXHRtYXJnaW46YXV0bztcbn1cblxuXG4uZm9udC1zaXplKEBtdWx0OjEpe1xuXHRmb250LXNpemU6IEBmb250LWJhc2Utc2l6ZSAqIEBtdWx0ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVyZmxvdygpe1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcdFxuXHQtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDsgXG5cdHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4ucmVtb3ZlLWxpc3Qtc3R5bGUoKXtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0bWFyZ2luOjA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpe1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxufVxuXG4ucmVtb3ZlLWxpbmstc3R5bGUoQGZvbnQtY29sb3I6IEBmb250LWxpZ2h0KXtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjpAZm9udC1jb2xvcjtcbn1cblxuLnJlbW92ZS1pbnB1dC1zdHlsZShAZm9udC1jb2xvcjogQGZvbnQtbGlnaHQ7IEBmb250LXNpemU6IEBmb250LWJhc2Utc2l6ZSl7XG5cdGJhY2tncm91bmQ6bm9uZTtcblx0Y29sb3I6QGZvbnQtY29sb3I7XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcblx0Ym9yZGVyOm5vbmU7XG5cdCY6Zm9jdXN7XG5cdFx0b3V0bGluZTogbm9uZTtcdFxuXHR9XG59XG5cbi5yZW1vdmUtYnRuLXN0eWxlKEBiZzogbm9uZTsgQGNvbG9yOiBAZm9udC1saWdodDsgQGZvbnQtc2l6ZTogQGZvbnQtYmFzZS1zaXplKXtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcblx0Zm9udC1zaXplOiBAZm9udC1zaXplO1xuXHRjb2xvcjpAY29sb3I7XG5cdGJhY2tncm91bmQ6QGJnO1xuICAgIGJvcmRlcjpub25lO1xuICAgIFxuXHQmOmhvdmVye1xuXHRcdGN1cnNvcjpwb2ludGVyO1xuXHR9XG5cdCY6Zm9jdXN7XG5cdFx0b3V0bGluZTpub25lO1xuXHR9XG59XG5cbi5mbGV4KEBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgQGFsaWduLWl0ZW1zOiBjZW50ZXI7IEB3cmFwOiBub3dyYXApe1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IEBqdXN0aWZ5LWNvbnRlbnQ7XG5cdGFsaWduLWl0ZW1zOiBAYWxpZ24taXRlbXM7XG5cdGZsZXgtd3JhcDpAd3JhcDtcbn1cblxuLmJveChAd2lkdGg6YXV0bzsgQGhlaWdodDphdXRvOyBAYm9yZGVyLXJhZGl1czogMDsgQGJnOm5vbmU7IEBib3JkZXI6bm9uZTsgQGJveC1zaXppbmc6IGNvbnRlbnQtYm94KXtcblx0XG5cdHdpZHRoOkB3aWR0aDtcblx0aGVpZ2h0OkBoZWlnaHQ7XG5cdGJhY2tncm91bmQ6IEBiZztcblx0Ym9yZGVyOiBAYm9yZGVyO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcblx0Ym94LXNpemluZzogQGJveC1zaXppbmc7XG5cdFxufVxuXG4uZGV2LWJveChAd2lkdGg7IEBoZWlnaHQpe1xuXHRcblx0LmJveChAd2lkdGg7IEBoZWlnaHQ7IDA7IGZhZGUoQGJhc2UtY29sb3IsMjAlKTsgMXB4IHNvbGlkIHdoaXRlOyBib3JkZXItYm94KTtcblx0XG59XG5cbi50cmFuc2l0aW9uKEB0cmFuc3Rpb24tdGltZTogQGJhc2UtdHJhbnNpdGlvbi10aW1lOyBAZnVuY3Rpb246IEBiYXNlLXRyYW5zaXRpb24tZnVuY3Rpb247IEBzZWxlY3RvcjogYWxsKXtcblx0dHJhbnNpdGlvbjogQHNlbGVjdG9yIEB0cmFuc3Rpb24tdGltZSBAZnVuY3Rpb247XG59XG5cbi5zY2FsZShAc2NhbGUpe1xuXHR0cmFuc2Zvcm06IHNjYWxlKEBzY2FsZSk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZShAc2NhbGUpO1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoQHNjYWxlKTtcbn0iLCJAaW1wb3J0IFwiLi4vdmFyaWFibGVzLmxlc3NcIjtcblxubmF2e1xuICBtYXJnaW4tdG9wOjUycHg7XG5cdGhlaWdodDoxMDRweDtcblx0LmZsZXgoc3BhY2UtYmV0d2Vlbik7XG5cdC5mb250LXNpemUoMC44NSk7XG4gIHVse1xuXHRcdG1pbi13aWR0aDogMzUwcHg7XG5cdFx0LnJlbW92ZS1saXN0LXN0eWxlKCk7XG5cdCAgLmZsZXgoc3BhY2UtYmV0d2Vlbik7XG5cdCAgbGl7XG5cblx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0ICAgIGF7XG5cdFx0XHRcdC5yZW1vdmUtbGluay1zdHlsZTtcblx0XHRcdCAgY29sb3I6QHJlZC1jb2xvcjtcblx0XHRcdCAgLnRyYW5zaXRpb247XG5cdFx0XHQgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdCY6aG92ZXIsICYuYWN0aXZle1xuXG5cdFx0XHQgICAgYm9yZGVyOiAycHggc29saWQgQHJlZC1jb2xvciAhaW1wb3J0YW50O1xuXG5cdFx0XHQgIH1cblx0XHRcdH1cdFx0XG4gICAgfSAgICAgIFxuICB9XG5cbiAgYnV0dG9ue1xuXG5cdFx0LmZvbnQtc2l6ZSgwLjg1KTtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0aGVpZ2h0OiAyOHB4O1xuXHRcdHdpZHRoOiAyOHB4O1xuXHRcdG1hcmdpbjogMy41cHg7XG5cdFx0cGFkZGluZzowO1xuXG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translation.service */ "./src/app/translation.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(svc) {
        this.svc = svc;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.less */ "./src/app/nav/nav.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/promo/promo.component.html":
/*!********************************************!*\
  !*** ./src/app/promo/promo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"no-margin\">{{this.svc.getText(\"PROMO_1\")}}</h1>\n  <h1 class=\"not-bold no-margin\">{{this.svc.getText(\"PROMO_2\")}}</h1>\n  <img src=\"../assets/заявка.svg\" alt=\"заявка\" width=\"400px\">\n</div>\n"

/***/ }),

/***/ "./src/app/promo/promo.component.less":
/*!********************************************!*\
  !*** ./src/app/promo/promo.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.absolute-center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\ndiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-direction: column;\n}\ndiv h1 {\n  text-align: center;\n}\ndiv img {\n  margin-top: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW8vcHJvbW8uY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvbmlraXRhL0Rlc2t0b3Av0YDQsNCx0L7RgtCwL21vbm9zcGFjZS9zcmMvYXBwL3ZhcmlhYmxlcy5sZXNzIiwiL1VzZXJzL25pa2l0YS9EZXNrdG9wL9GA0LDQsdC+0YLQsC9tb25vc3BhY2Uvc3JjL2FwcC9wcm9tby9wcm9tby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNZOUU7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FEVkQ7QUVOQTtFRHlFQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VDMUVHLHNCQUFBO0FGV0o7QUViQTtFQUtRLGtCQUFBO0FGV1I7QUVoQkE7RUFVUSxnQkFBQTtBRlNSIiwiZmlsZSI6InNyYy9hcHAvcHJvbW8vcHJvbW8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4uYWJzb2x1dGUtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmRpdiBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiBpbWcge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGJnOiBsaWdodGdyZXk7XG5AcmVkLWNvbG9yOiByZWQ7XG5AZ3JheS1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjcxOSk7XG5AZm9udC1saWdodDogd2hpdGU7XG5AZm9udC1kYXJrOiBibGFjaztcbkBiYXNlLXRyYW5zaXRpb24tdGltZTogMC4zcztcbkBiYXNlLXRyYW5zaXRpb24tZnVuY3Rpb246IGVhc2U7XG5AZm9udC1iYXNlLXNpemU6IDE0cHg7XG5cbkBmb250LWZhbWlseTogQ2lyY2UsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4uYWJzb2x1dGUtY2VudGVye1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjA7XG5cdGxlZnQ6MDtcblx0Ym90dG9tOjA7XG5cdHJpZ2h0OjA7XG5cdG1hcmdpbjphdXRvO1xufVxuXG5cbi5mb250LXNpemUoQG11bHQ6MSl7XG5cdGZvbnQtc2l6ZTogQGZvbnQtYmFzZS1zaXplICogQG11bHQgIWltcG9ydGFudDtcbn1cblxuLm92ZXJmbG93KCl7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1x0XG5cdC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwOyBcblx0d29yZC13cmFwOiBub3JtYWw7XG59XG5cbi5yZW1vdmUtbGlzdC1zdHlsZSgpe1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRtYXJnaW46MDtcblx0cGFkZGluZzogMDtcblx0bGl7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG59XG5cbi5yZW1vdmUtbGluay1zdHlsZShAZm9udC1jb2xvcjogQGZvbnQtbGlnaHQpe1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOkBmb250LWNvbG9yO1xufVxuXG4ucmVtb3ZlLWlucHV0LXN0eWxlKEBmb250LWNvbG9yOiBAZm9udC1saWdodDsgQGZvbnQtc2l6ZTogQGZvbnQtYmFzZS1zaXplKXtcblx0YmFja2dyb3VuZDpub25lO1xuXHRjb2xvcjpAZm9udC1jb2xvcjtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcblx0Zm9udC1zaXplOiBAZm9udC1zaXplO1xuXHRib3JkZXI6bm9uZTtcblx0Jjpmb2N1c3tcblx0XHRvdXRsaW5lOiBub25lO1x0XG5cdH1cbn1cblxuLnJlbW92ZS1idG4tc3R5bGUoQGJnOiBub25lOyBAY29sb3I6IEBmb250LWxpZ2h0OyBAZm9udC1zaXplOiBAZm9udC1iYXNlLXNpemUpe1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuXHRmb250LXNpemU6IEBmb250LXNpemU7XG5cdGNvbG9yOkBjb2xvcjtcblx0YmFja2dyb3VuZDpAYmc7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgXG5cdCY6aG92ZXJ7XG5cdFx0Y3Vyc29yOnBvaW50ZXI7XG5cdH1cblx0Jjpmb2N1c3tcblx0XHRvdXRsaW5lOm5vbmU7XG5cdH1cbn1cblxuLmZsZXgoQGp1c3RpZnktY29udGVudDogY2VudGVyOyBAYWxpZ24taXRlbXM6IGNlbnRlcjsgQHdyYXA6IG5vd3JhcCl7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogQGp1c3RpZnktY29udGVudDtcblx0YWxpZ24taXRlbXM6IEBhbGlnbi1pdGVtcztcblx0ZmxleC13cmFwOkB3cmFwO1xufVxuXG4uYm94KEB3aWR0aDphdXRvOyBAaGVpZ2h0OmF1dG87IEBib3JkZXItcmFkaXVzOiAwOyBAYmc6bm9uZTsgQGJvcmRlcjpub25lOyBAYm94LXNpemluZzogY29udGVudC1ib3gpe1xuXHRcblx0d2lkdGg6QHdpZHRoO1xuXHRoZWlnaHQ6QGhlaWdodDtcblx0YmFja2dyb3VuZDogQGJnO1xuXHRib3JkZXI6IEBib3JkZXI7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZztcblx0XG59XG5cbi5kZXYtYm94KEB3aWR0aDsgQGhlaWdodCl7XG5cdFxuXHQuYm94KEB3aWR0aDsgQGhlaWdodDsgMDsgZmFkZShAYmFzZS1jb2xvciwyMCUpOyAxcHggc29saWQgd2hpdGU7IGJvcmRlci1ib3gpO1xuXHRcbn1cblxuLnRyYW5zaXRpb24oQHRyYW5zdGlvbi10aW1lOiBAYmFzZS10cmFuc2l0aW9uLXRpbWU7IEBmdW5jdGlvbjogQGJhc2UtdHJhbnNpdGlvbi1mdW5jdGlvbjsgQHNlbGVjdG9yOiBhbGwpe1xuXHR0cmFuc2l0aW9uOiBAc2VsZWN0b3IgQHRyYW5zdGlvbi10aW1lIEBmdW5jdGlvbjtcbn1cblxuLnNjYWxlKEBzY2FsZSl7XG5cdHRyYW5zZm9ybTogc2NhbGUoQHNjYWxlKTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEBzY2FsZSk7XG5cdC1tb3otdHJhbnNmb3JtOiBzY2FsZShAc2NhbGUpO1xufSIsIlxuQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy5sZXNzXCI7XG5kaXZ7XG4gICAgLmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoMXtcblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICB9XG4gICAgaW1ne1xuXG4gICAgICAgIG1hcmdpbi10b3A6NzBweDtcblxuICAgIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/promo/promo.component.ts":
/*!******************************************!*\
  !*** ./src/app/promo/promo.component.ts ***!
  \******************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translation.service */ "./src/app/translation.service.ts");



var PromoComponent = /** @class */ (function () {
    function PromoComponent(svc) {
        this.svc = svc;
    }
    PromoComponent.prototype.ngOnInit = function () {
    };
    PromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promo',
            template: __webpack_require__(/*! ./promo.component.html */ "./src/app/promo/promo.component.html"),
            styles: [__webpack_require__(/*! ./promo.component.less */ "./src/app/promo/promo.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]])
    ], PromoComponent);
    return PromoComponent;
}());



/***/ }),

/***/ "./src/app/translation.en.json":
/*!*************************************!*\
  !*** ./src/app/translation.en.json ***!
  \*************************************/
/*! exports provided: APPLICATION, TERMS, JURY, CONTACTS, PROMO_1, PROMO_2, FILE_1, FILE_2, FILE_3, FILE_INFO, FILE_INPUT, FILE_SIZE, FILE_DEL, FORM_HEAD, FORM_NAME_INFO, FORM_NAME, FORM_COMPANY, FORM_COMPANY_INFO, FORM_CONTACTS, FORM_INFO, FORM_ALL_DONE, FORM_CITY, FORM_COUNTRY, FORM_INDEX, FORM_POSTAL, FORM_TEL, FORM_EMAIL, FORM_NEXT, FOOTER_SUBSCRIBE, FOOTER_1, FOOTER_2, FOOTER_3, FOOTER_4, FOOTER_5, FOOTER_6, FOOTER_7, FOOTER_8, default */
/***/ (function(module) {

module.exports = {"APPLICATION":"APPLICATION","TERMS":"TERMS","JURY":"JURY","CONTACTS":"CONTACTS","PROMO_1":"Modern cyrillic 2014","PROMO_2":"International competition of type design","FILE_1":"How to create and execute a project","FILE_2":"Project upload","FILE_3":"Project characteristics","FILE_INFO":"Drag the project into this area or ","FILE_INPUT":"select file","FILE_SIZE":"Kbytes","FILE_DEL":"Delete","FORM_HEAD":"Introduce yourself, please","FORM_NAME_INFO":"Surname, name and patronymic","FORM_NAME":"Name","FORM_COMPANY":"Company name","FORM_COMPANY_INFO":"Fill in if you represent a company-manufacturer of the font","FORM_CONTACTS":"Contact information","FORM_INFO":"Left to fill: ","FORM_ALL_DONE":"All fields are filled, thank you! ","FORM_CITY":"Your city","FORM_COUNTRY":"Country","FORM_INDEX":"Postal code","FORM_POSTAL":"Postal address","FORM_TEL":"Tel","FORM_EMAIL":"E-mail","FORM_NEXT":"Next","FOOTER_SUBSCRIBE":"Subscribe for news","FOOTER_1":"The organizers of the competition: the company ","FOOTER_2":"«Паратайп»","FOOTER_3":" and journal ","FOOTER_4":"«Шрифт»","FOOTER_5":" with the support of ","FOOTER_6":"Federal Agency of press and mass communications","FOOTER_7":" and the company ","FOOTER_8":"«Yandex»"};

/***/ }),

/***/ "./src/app/translation.ru.json":
/*!*************************************!*\
  !*** ./src/app/translation.ru.json ***!
  \*************************************/
/*! exports provided: APPLICATION, TERMS, JURY, CONTACTS, PROMO_1, PROMO_2, FILE_1, FILE_2, FILE_3, FILE_INFO, FILE_INPUT, FILE_SIZE, FILE_DEL, FORM_HEAD, FORM_NAME_INFO, FORM_NAME, FORM_COMPANY, FORM_COMPANY_INFO, FORM_CONTACTS, FORM_INFO, FORM_ALL_DONE, FORM_CITY, FORM_COUNTRY, FORM_INDEX, FORM_POSTAL, FORM_TEL, FORM_EMAIL, FORM_NEXT, FOOTER_SUBSCRIBE, FOOTER_1, FOOTER_2, FOOTER_3, FOOTER_4, FOOTER_5, FOOTER_6, FOOTER_7, FOOTER_8, default */
/***/ (function(module) {

module.exports = {"APPLICATION":"ЗАЯВКА","TERMS":"УСЛОВИЯ","JURY":"ЖЮРИ","CONTACTS":"КОНТАКТЫ","PROMO_1":"Современная кириллица 2014","PROMO_2":"Международный конкурс шрифтового дизайна","FILE_1":"Как составить и оформить проект","FILE_2":"Загрузка проекта","FILE_3":"Характеристики проекта","FILE_INFO":"Перетащите проект в эту область или ","FILE_INPUT":"выберите файл","FILE_SIZE":"Килобайт","FILE_DEL":"Удалить","FORM_HEAD":"Представьтесь, пожалуйста","FORM_NAME_INFO":"Фамилия, имя и отчество","FORM_NAME":"ФИО","FORM_COMPANY":"Название компании","FORM_COMPANY_INFO":"Заполните, если вы представляете компанию производителя шрифта","FORM_CONTACTS":"Контактная информация","FORM_INFO":"Осталось заполнить: ","FORM_ALL_DONE":"Все поля заполнены, спасибо! ","FORM_CITY":"Ваш город","FORM_COUNTRY":"Страна","FORM_INDEX":"Индекс","FORM_POSTAL":"Почтовый адрес","FORM_TEL":"Телефон","FORM_EMAIL":"Электронная почта","FORM_NEXT":"Далее","FOOTER_SUBSCRIBE":"Быть в курсе событий","FOOTER_1":"Организаторы конкурса: компания ","FOOTER_2":"«Паратайп»","FOOTER_3":" и журнал ","FOOTER_4":"«Шрифт»","FOOTER_5":" при поддержке ","FOOTER_6":"Федерального агентства по печати и массовым коммуникациям","FOOTER_7":" и компании ","FOOTER_8":"«Яндекс»"};

/***/ }),

/***/ "./src/app/translation.service.ts":
/*!****************************************!*\
  !*** ./src/app/translation.service.ts ***!
  \****************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.en.json */ "./src/app/translation.en.json");
var _translation_en_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translation.en.json */ "./src/app/translation.en.json", 1);
/* harmony import */ var _translation_ru_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation.ru.json */ "./src/app/translation.ru.json");
var _translation_ru_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translation.ru.json */ "./src/app/translation.ru.json", 1);




var TranslationService = /** @class */ (function () {
    function TranslationService() {
        if (localStorage.getItem('lang')) {
            this.lang = localStorage.getItem('lang');
        }
        else {
            this.lang = "ru";
            localStorage.setItem("lang", "ru");
        }
    }
    TranslationService.prototype.changeLang = function (str) {
        localStorage.setItem("lang", str);
        this.lang = localStorage.getItem('lang');
    };
    TranslationService.prototype.getText = function (arg) {
        if (this.lang == "ru")
            return _translation_ru_json__WEBPACK_IMPORTED_MODULE_3__[arg];
        else if (this.lang == "en")
            return _translation_en_json__WEBPACK_IMPORTED_MODULE_2__[arg];
    };
    TranslationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TranslationService);
    return TranslationService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    lang: "ru"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikita/Desktop/работа/monospace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map