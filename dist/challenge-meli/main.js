(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidnino/Desktop/Challenge Meli/Angular/challenge-meli/src/main.ts */"zUnb");


/***/ }),

/***/ "1ceR":
/*!*******************************!*\
  !*** ./src/app/app.facade.ts ***!
  \*******************************/
/*! exports provided: AppFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFacade", function() { return AppFacade; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_selectors_app_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/selectors/app.selector */ "Tz0b");
/* harmony import */ var _store_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions/product.actions */ "vHeZ");
/* harmony import */ var _store_selectors_ui_ui_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/selectors/ui/ui.selector */ "g/Ik");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppFacade {
    constructor(store) {
        this.store = store;
        this.products$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selectors_app_selector__WEBPACK_IMPORTED_MODULE_2__["appRootSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.products));
        this.productDetail$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selectors_app_selector__WEBPACK_IMPORTED_MODULE_2__["appRootSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.productDetail));
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selectors_ui_ui_selector__WEBPACK_IMPORTED_MODULE_4__["appUISelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.isLoading));
    }
    fetchSearch(filter) {
        this.store.dispatch(Object(_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSearchAction"])({ filter }));
    }
    fetchDetailProduct(id) {
        this.store.dispatch(Object(_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["fetchDetailProductAction"])({ id }));
    }
}
AppFacade.ɵfac = function AppFacade_Factory(t) { return new (t || AppFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
AppFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AppFacade, factory: AppFacade.ɵfac });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
    }
    onSearch(event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        if (!!this.search.value)
            this.router.navigate([`items`], { queryParams: { search: this.search.value } });
    }
    home() {
        this.router.navigate(['/']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 4, consts: [[1, "nav-content"], [1, "nav-logo", 3, "click"], [1, "nav-search", 3, "submit"], ["type", "text", 1, "nav-search-input", 3, "placeholder", "formControl"], ["type", "submit", 1, "nav-search-btn", 3, "click"], [1, "nav-icon-search"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function HeaderComponent_Template_form_submit_3_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "PLACEHOLDER_SEARCH"))("formControl", ctx.search);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["header[_ngcontent-%COMP%] {\n  background: var(--yellow);\n  width: 100%;\n  height: 56px;\n}\nheader[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  max-width: 865px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\nheader[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .nav-logo[_ngcontent-%COMP%] {\n  width: 53px;\n  height: 36px;\n  margin-right: 20px;\n  background-size: 53px 36px;\n  background-image: url(\"/assets/img/Logo_ML.png\");\n}\nheader[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%] {\n  width: calc( 100% - 73px );\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\nheader[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .nav-search-input[_ngcontent-%COMP%] {\n  width: calc(100% - 42px);\n  height: 38px;\n  border-radius: 2px 0px 0px 2px;\n  padding: 13px 15px;\n  font-size: var(--f-18);\n  font-family: var(--primary-font);\n  color: var(--black);\n}\nheader[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .nav-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray);\n}\nheader[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .nav-search-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  cursor: pointer;\n  width: 42px;\n  height: 38px;\n}\nheader[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .nav-search-btn[_ngcontent-%COMP%]   .nav-icon-search[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  background-size: 18px 18px;\n  background-image: url(\"/assets/img/ic_Search.png\");\n}\n@media only screen and (max-width: 1024px) {\n  .nav-content[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2FzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX2JyZWFrcG9pbnRzLnNhc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3RzL19taXhpbnMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JDWHFCO0VDQ3ZCLGFBQUE7RUFDQSxtQkZVUTtFRVRSLDhCRlNlO0VFUmYsbUJBSm1FO0FGY3JFO0FBREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtBQUdOO0FBRkk7RUFDRSwwQkFBQTtFRW5CSixhQUFBO0VBQ0EsbUJGbUJVO0VFbEJWLDhCRmtCaUI7RUVqQmpCLG1CQUptRTtBRjRCckU7QUFOTTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFRUjtBQVBRO0VBQ0Usa0JBQUE7QUFTVjtBQVJNO0VFL0JKLGFBQUE7RUFDQSxtQkYrQlk7RUU5QlosdUJGOEJtQjtFRTdCbkIsbUJBSm1FO0VGa0M3RCxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFhUjtBQVpRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtEQUFBO0FBY1Y7QUFaQTtFQUNFO0lBQ0UsaUJBQUE7RUFlRjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucydcbkBpbXBvcnQgJ2JyZWFrcG9pbnRzJ1xuXG5oZWFkZXJcbiAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93KVxuICB3aWR0aDogMTAwJVxuICBoZWlnaHQ6IDU2cHhcbiAgLm5hdi1jb250ZW50XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBtYXJnaW46IGF1dG9cbiAgICBtYXgtd2lkdGg6ICRicmVhay1wb3NpdGlvbi1kZXNrdG9wXG4gICAgK2ZsZXgoY2VudGVyLHNwYWNlLWJldHdlZW4pXG4gICAgLm5hdi1sb2dvXG4gICAgICB3aWR0aDogNTNweFxuICAgICAgaGVpZ2h0OiAzNnB4XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTNweCAzNnB4XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL0xvZ29fTUwucG5nJylcbiAgICAubmF2LXNlYXJjaFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA3M3B4IClcbiAgICAgICtmbGV4KGNlbnRlcixzcGFjZS1iZXR3ZWVuKVxuICAgICAgLm5hdi1zZWFyY2gtaW5wdXRcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQycHgpXG4gICAgICAgIGhlaWdodDogMzhweFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMHB4IDBweCAycHhcbiAgICAgICAgcGFkZGluZzogMTNweCAxNXB4XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZi0xOClcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udClcbiAgICAgICAgY29sb3I6ICB2YXIoLS1ibGFjaylcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJcbiAgICAgICAgICBjb2xvcjogIHZhcigtLWdyYXkpXG4gICAgICAubmF2LXNlYXJjaC1idG5cbiAgICAgICAgK2ZsZXgoY2VudGVyLGNlbnRlcilcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgIHdpZHRoOiA0MnB4XG4gICAgICAgIGhlaWdodDogMzhweFxuICAgICAgICAubmF2LWljb24tc2VhcmNoXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4XG4gICAgICAgICAgd2lkdGg6IDE4cHhcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaWNfU2VhcmNoLnBuZycpXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldClcbiAgLm5hdi1jb250ZW50XG4gICAgcGFkZGluZzogMHB4IDEwcHgiLCIkYnJlYWstcG9zaXRpb24tZGVza3RvcDogODY1cHhcbiRicmVhay1tb2JpbGU6IDQ4MHB4XG4kYnJlYWstdGFibGV0OiAxMDI0cHhcbiRicmVhay1zbWFsbC10YWJsZXQ6IDc2OHB4IiwiPWZsZXgoJGFsaWduSXRlbXM6IHN0cmV0Y2gsICRqdXN0aWZ5Q29udGVudDogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogcm93KVxuICBkaXNwbGF5OiBmbGV4XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtc1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Q29udGVudFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvblxuXG49cGxhY2Vob2xkZXItbG9hZGluZygpXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXNcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHNcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGVcbiAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlSG9sZGVyU2hpbW1lclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmOFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZWVlZWUgOCUsICNkZGRkZGQgMTglLCAgI2VlZWVlZSAzMyUpXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDEwNHB4XG4gIFxuXG4gIEBrZXlmcmFtZXMgcGxhY2VIb2xkZXJTaGltbWVyXG4gICAgMCVcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICAxMDAlXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDAiXX0= */"] });


/***/ }),

/***/ "9Eh8":
/*!*********************************************************!*\
  !*** ./src/app/store/reducers/ui/product.ui.reducer.ts ***!
  \*********************************************************/
/*! exports provided: initialState, isLoadingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingReducer", function() { return isLoadingReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/product.actions */ "vHeZ");


const initialState = false;
const featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["fetchSearchAction"], () => true), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["fetchSearchSuccesAction"], () => false), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["fetchSearchNotResultAction"], () => false), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["fetchDetailProductAction"], () => true), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["fetchDetailSearchSuccesAction"], () => false));
const isLoadingReducer = (state, action) => {
    return featureReducer(state, action);
};


/***/ }),

/***/ "9dNJ":
/*!**********************************************************!*\
  !*** ./src/app/store/reducers/product-detail.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, productDetailReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetailReducer", function() { return productDetailReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/product.actions */ "vHeZ");


const initialState = {};
const featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["fetchDetailSearchSuccesAction"], (state, { product }) => product));
const productDetailReducer = (state, action) => {
    return featureReducer(state, action);
};


/***/ }),

/***/ "AkW/":
/*!**************************************************!*\
  !*** ./src/app/store/effects/product.effects.ts ***!
  \**************************************************/
/*! exports provided: UserStoreEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreEffects", function() { return UserStoreEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "snw9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/product.actions */ "vHeZ");
/* harmony import */ var src_app_mappers_product_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/mappers/product.mapper */ "eLzT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");








class UserStoreEffects {
    constructor(action$, service) {
        this.action$ = action$;
        this.service = service;
        this.fetchSearchAction$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSearchAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(action => this.service.search(action.filter)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(result => {
            var _a;
            console.log(result);
            if (!!result && ((_a = result === null || result === void 0 ? void 0 : result.paging) === null || _a === void 0 ? void 0 : _a.total) === 0)
                return [Object(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSearchNotResultAction"])({ products: {} })];
            else
                return [
                    Object(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSearchSuccesAction"])({ products: Object(src_app_mappers_product_mapper__WEBPACK_IMPORTED_MODULE_4__["resultSearch"])(result) })
                ];
        })));
        this.fetchDetailProductAction$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["fetchDetailProductAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(action => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.service.detailProduct(action.id), this.service.descriptionProduct(action.id));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(([detail, description]) => {
            console.log(detail);
            console.log(description);
            return [Object(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["fetchDetailSearchSuccesAction"])({ product: Object(src_app_mappers_product_mapper__WEBPACK_IMPORTED_MODULE_4__["productDetail"])(detail, description) })];
        })));
    }
}
UserStoreEffects.ɵfac = function UserStoreEffects_Factory(t) { return new (t || UserStoreEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"])); };
UserStoreEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserStoreEffects, factory: UserStoreEffects.ɵfac });


/***/ }),

/***/ "AytR":
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
    language: 'es',
    numberProducts: 4,
    api: 'https://api.mercadolibre.com'
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

/***/ "E0Lf":
/*!******************************************!*\
  !*** ./src/app/store/state/app.state.ts ***!
  \******************************************/
/*! exports provided: appFeatureName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appFeatureName", function() { return appFeatureName; });
const appFeatureName = 'challenge-meli';


/***/ }),

/***/ "FCoV":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/product.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, productReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productReducer", function() { return productReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/product.actions */ "vHeZ");


const initialState = {};
const featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["fetchSearchSuccesAction"], (state, { products }) => products));
const productReducer = (state, action) => {
    return featureReducer(state, action);
};


/***/ }),

/***/ "K8Gv":
/*!*************************!*\
  !*** ./src/app/util.ts ***!
  \*************************/
/*! exports provided: type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
const typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }
    typeCache[label] = true;
    return label;
}


/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var url_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-template */ "4CMq");
/* harmony import */ var url_template__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_template__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.api */ "nWBu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AppService {
    constructor(http) {
        this.http = http;
    }
    search(filter) {
        return this.http.get(`${url_template__WEBPACK_IMPORTED_MODULE_0__["parse"](_app_api__WEBPACK_IMPORTED_MODULE_1__["AppApi"].search).expand({ filter })}`);
    }
    detailProduct(id) {
        return this.http.get(`${url_template__WEBPACK_IMPORTED_MODULE_0__["parse"](_app_api__WEBPACK_IMPORTED_MODULE_1__["AppApi"].detail).expand({ id })}`);
    }
    descriptionProduct(id) {
        return this.http.get(`${url_template__WEBPACK_IMPORTED_MODULE_0__["parse"](_app_api__WEBPACK_IMPORTED_MODULE_1__["AppApi"].description).expand({ id })}`);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(translate) {
        this.translate = translate;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].language);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "Tz0b":
/*!*************************************************!*\
  !*** ./src/app/store/selectors/app.selector.ts ***!
  \*************************************************/
/*! exports provided: appRootSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRootSelector", function() { return appRootSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/app.state */ "E0Lf");


const appRootSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state_app_state__WEBPACK_IMPORTED_MODULE_1__["appFeatureName"]);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: USER_REDUCER_TOKEN, AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REDUCER_TOKEN", function() { return USER_REDUCER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "snw9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "B3rN");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _store_effects_product_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/effects/product.effects */ "AkW/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/app.service */ "OaWH");
/* harmony import */ var _app_facade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.facade */ "1ceR");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/reducers */ "tg95");
/* harmony import */ var _store_state_app_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/state/app.state */ "E0Lf");























const USER_REDUCER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Feature User Reducers');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _app_facade__WEBPACK_IMPORTED_MODULE_15__["AppFacade"],
        {
            provide: USER_REDUCER_TOKEN,
            useValue: _store_reducers__WEBPACK_IMPORTED_MODULE_16__["userRootReducer"]
        },
        _services_app_service__WEBPACK_IMPORTED_MODULE_14__["AppService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({}),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_store_state_app_state__WEBPACK_IMPORTED_MODULE_17__["appFeatureName"], USER_REDUCER_TOKEN),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([
                _store_effects_product_effects__WEBPACK_IMPORTED_MODULE_12__["UserStoreEffects"]
            ]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"]] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "aAcI":
/*!********************************************!*\
  !*** ./src/app/store/reducers/ui/index.ts ***!
  \********************************************/
/*! exports provided: UIAppRootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIAppRootReducer", function() { return UIAppRootReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _product_ui_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.ui.reducer */ "9Eh8");


const UIAppRootReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    isLoading: _product_ui_reducer__WEBPACK_IMPORTED_MODULE_1__["isLoadingReducer"]
});


/***/ }),

/***/ "eLzT":
/*!*******************************************!*\
  !*** ./src/app/mappers/product.mapper.ts ***!
  \*******************************************/
/*! exports provided: resultSearch, productDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultSearch", function() { return resultSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetail", function() { return productDetail; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

function resultSearch(productResult) {
    var _a;
    let products = [];
    (_a = productResult === null || productResult === void 0 ? void 0 : productResult.results) === null || _a === void 0 ? void 0 : _a.forEach(product => {
        var _a, _b, _c;
        products.push({
            id: product === null || product === void 0 ? void 0 : product.id,
            title: product === null || product === void 0 ? void 0 : product.title,
            price: {
                currency: product === null || product === void 0 ? void 0 : product.currency_id,
                amount: product === null || product === void 0 ? void 0 : product.price,
                decimals: 0
            },
            picture: product === null || product === void 0 ? void 0 : product.thumbnail,
            condition: '',
            free_shipping: (_a = product === null || product === void 0 ? void 0 : product.shipping) === null || _a === void 0 ? void 0 : _a.free_shipping,
            location: ((_b = product === null || product === void 0 ? void 0 : product.address) === null || _b === void 0 ? void 0 : _b.state_name) || ((_c = product === null || product === void 0 ? void 0 : product.address) === null || _c === void 0 ? void 0 : _c.city_name)
        });
    });
    return {
        items: !!products && products.length > src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].numberProducts ? products === null || products === void 0 ? void 0 : products.slice(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].numberProducts) :
            products
    };
}
function productDetail(productDetail, description) {
    var _a;
    return {
        id: productDetail === null || productDetail === void 0 ? void 0 : productDetail.id,
        title: productDetail === null || productDetail === void 0 ? void 0 : productDetail.title,
        price: { amount: productDetail === null || productDetail === void 0 ? void 0 : productDetail.price },
        picture: !!(productDetail === null || productDetail === void 0 ? void 0 : productDetail.pictures) && (productDetail === null || productDetail === void 0 ? void 0 : productDetail.pictures.length) > 0 ? productDetail === null || productDetail === void 0 ? void 0 : productDetail.pictures[0].url : null,
        free_shipping: (_a = productDetail === null || productDetail === void 0 ? void 0 : productDetail.shipping) === null || _a === void 0 ? void 0 : _a.free_shipping,
        description: description === null || description === void 0 ? void 0 : description.plain_text
    };
}


/***/ }),

/***/ "g/Ik":
/*!***************************************************!*\
  !*** ./src/app/store/selectors/ui/ui.selector.ts ***!
  \***************************************************/
/*! exports provided: appUISelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appUISelector", function() { return appUISelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.selector */ "Tz0b");


const appUISelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_app_selector__WEBPACK_IMPORTED_MODULE_1__["appRootSelector"], (state) => state.ui);


/***/ }),

/***/ "nWBu":
/*!****************************!*\
  !*** ./src/app/app.api.ts ***!
  \****************************/
/*! exports provided: AppApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppApi", function() { return AppApi; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

const AppApi = {
    search: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}/sites/MLA/search?q=​:{filter}`,
    detail: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}/items/{id}`,
    description: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}/items/{id}/description`,
};


/***/ }),

/***/ "tg95":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: userRootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRootReducer", function() { return userRootReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "aAcI");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.reducer */ "FCoV");
/* harmony import */ var _product_detail_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.reducer */ "9dNJ");




const userRootReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    products: _product_reducer__WEBPACK_IMPORTED_MODULE_2__["productReducer"],
    productDetail: _product_detail_reducer__WEBPACK_IMPORTED_MODULE_3__["productDetailReducer"],
    ui: _ui__WEBPACK_IMPORTED_MODULE_1__["UIAppRootReducer"]
});


/***/ }),

/***/ "vHeZ":
/*!**************************************************!*\
  !*** ./src/app/store/actions/product.actions.ts ***!
  \**************************************************/
/*! exports provided: fetchSearchAction, fetchSearchSuccesAction, fetchSearchNotResultAction, fetchDetailProductAction, fetchDetailSearchSuccesAction, producActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchAction", function() { return fetchSearchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchSuccesAction", function() { return fetchSearchSuccesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchNotResultAction", function() { return fetchSearchNotResultAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetailProductAction", function() { return fetchDetailProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetailSearchSuccesAction", function() { return fetchDetailSearchSuccesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producActions", function() { return producActions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var src_app_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util */ "K8Gv");


const fetchSearchAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(Object(src_app_util__WEBPACK_IMPORTED_MODULE_1__["type"])('[User/API] Fetch search products'), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const fetchSearchSuccesAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(Object(src_app_util__WEBPACK_IMPORTED_MODULE_1__["type"])('[User/API] Fetch search products success'), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const fetchSearchNotResultAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(Object(src_app_util__WEBPACK_IMPORTED_MODULE_1__["type"])('[User/API] Fetch search products not result'), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const fetchDetailProductAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(Object(src_app_util__WEBPACK_IMPORTED_MODULE_1__["type"])('[User/API] Fetch detail product'), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const fetchDetailSearchSuccesAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(Object(src_app_util__WEBPACK_IMPORTED_MODULE_1__["type"])('[User/API] Fetch search produt detail success'), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const producActions = {
    fetchSearchAction: fetchSearchAction
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '', loadChildren: () => __webpack_require__.e(/*! import() | modules-home-home-module */ "modules-home-home-module").then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "iydT")).then(m => m.HomeModule)
    },
    {
        path: 'items', loadChildren: () => Promise.all(/*! import() | modules-results-search-results-search-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-results-search-results-search-module")]).then(__webpack_require__.bind(null, /*! ./modules/results-search/results-search.module */ "ue3m")).then(m => m.ResultsSearchModule),
    },
    {
        path: 'items', loadChildren: () => Promise.all(/*! import() | modules-product-detail-product-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-product-detail-product-detail-module")]).then(__webpack_require__.bind(null, /*! ./modules/product-detail/product-detail.module */ "5ANV")).then(m => m.ProductDetailModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map