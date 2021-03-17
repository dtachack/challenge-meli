(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-results-search-results-search-module"],{

/***/ "DdoI":
/*!********************************************************************!*\
  !*** ./src/app/modules/results-search/results-search.component.ts ***!
  \********************************************************************/
/*! exports provided: ResultsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsSearchComponent", function() { return ResultsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_app_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.facade */ "1ceR");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.component */ "Za5s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_result_product_placeholder_result_product_placeholder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/result-product-placeholder/result-product-placeholder.component */ "OTM9");
/* harmony import */ var _components_result_product_result_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/result-product/result-product.component */ "IJAN");







function ResultsSearchComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-result-product-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return []; };
function ResultsSearchComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsSearchComponent_ng_container_4_ng_container_1_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).constructor(4));
} }
function ResultsSearchComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-result-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsSearchComponent_ng_template_6_ng_container_0_Template_app_result_product_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const product_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onDetail(product_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("price", product_r6 == null ? null : product_r6.price == null ? null : product_r6.price.amount)("currencyCode", product_r6 == null ? null : product_r6.price == null ? null : product_r6.price.currency)("title", product_r6 == null ? null : product_r6.title)("image", product_r6 == null ? null : product_r6.picture)("location", product_r6 == null ? null : product_r6.location);
} }
function ResultsSearchComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultsSearchComponent_ng_template_6_ng_container_0_Template, 2, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.products$)) == null ? null : tmp_0_0.items);
} }
class ResultsSearchComponent {
    constructor(route, router, appFacade) {
        this.route = route;
        this.router = router;
        this.appFacade = appFacade;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.route
            .queryParams
            .subscribe(queryParams => {
            const filter = this.route.snapshot.queryParamMap.get('search');
            if (!!filter)
                this.appFacade.fetchSearch(filter);
            else
                this.router.navigateByUrl('/');
        }));
        ;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    get products$() {
        return this.appFacade.products$;
    }
    get isLoading$() {
        return this.appFacade.isLoading$;
    }
    onDetail(id) {
        this.router.navigate([`/items`, id]);
    }
}
ResultsSearchComponent.ɵfac = function ResultsSearchComponent_Factory(t) { return new (t || ResultsSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_facade__WEBPACK_IMPORTED_MODULE_2__["AppFacade"])); };
ResultsSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsSearchComponent, selectors: [["app-results-search"]], decls: 8, vars: 4, consts: [[1, "content-results"], [1, "breadcrumbs"], [1, "results"], [4, "ngIf", "ngIfElse"], ["listProducts", ""], [4, "ngFor", "ngForOf"], [3, "price", "currencyCode", "title", "image", "location", "click"]], template: function ResultsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResultsSearchComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResultsSearchComponent_ng_template_6_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.isLoading$))("ngIfElse", _r1);
    } }, directives: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_result_product_placeholder_result_product_placeholder_component__WEBPACK_IMPORTED_MODULE_5__["ResultProductPlaceholderComponent"], _components_result_product_result_product_component__WEBPACK_IMPORTED_MODULE_6__["ResultProductComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".content-results[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  max-width: 865px;\n}\n.content-results[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  padding: 16px 0px;\n}\n.content-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n  background-color: var(--white);\n}\n@media only screen and (max-width: 1024px) {\n  .content-results[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc3VsdHMtc2VhcmNoLmNvbXBvbmVudC5zYXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fYnJlYWtwb2ludHMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JDTnVCO0FESXpCO0FBR0U7RUFDRSxpQkFBQTtBQURKO0FBRUU7RUFDRSw4QkFBQTtBQUFKO0FBRUE7RUFDRTtJQUNFLGlCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJyZXN1bHRzLXNlYXJjaC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucydcbkBpbXBvcnQgJ2JyZWFrcG9pbnRzJ1xuXG4uY29udGVudC1yZXN1bHRzXG4gIHdpZHRoOiAxMDAlXG4gIG1hcmdpbjogYXV0b1xuICBtYXgtd2lkdGg6ICRicmVhay1wb3NpdGlvbi1kZXNrdG9wXG4gIC5icmVhZGNydW1ic1xuICAgIHBhZGRpbmc6IDE2cHggMHB4XG4gIC5yZXN1bHRzXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldClcbiAgLmNvbnRlbnQtcmVzdWx0c1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IiwiJGJyZWFrLXBvc2l0aW9uLWRlc2t0b3A6IDg2NXB4XG4kYnJlYWstbW9iaWxlOiA0ODBweFxuJGJyZWFrLXRhYmxldDogMTAyNHB4XG4kYnJlYWstc21hbGwtdGFibGV0OiA3NjhweCJdfQ== */"] });


/***/ }),

/***/ "IJAN":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/results-search/components/result-product/result-product.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ResultProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultProductComponent", function() { return ResultProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ResultProductComponent {
    constructor() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ResultProductComponent.ɵfac = function ResultProductComponent_Factory(t) { return new (t || ResultProductComponent)(); };
ResultProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultProductComponent, selectors: [["app-result-product"]], inputs: { price: "price", title: "title", currencyCode: "currencyCode", location: "location", image: "image" }, outputs: { click: "click" }, decls: 15, vars: 8, consts: [[1, "container-product"], [1, "image", 3, "click"], ["alt", "", 3, "src"], [1, "content"], [1, "title"], [1, "price"], [3, "click"], [1, "location"], [1, "subtitle"]], template: function ResultProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultProductComponent_Template_div_click_1_listener() { return ctx.click.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultProductComponent_Template_h1_click_6_listener() { return ctx.click.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultProductComponent_Template_h2_click_13_listener() { return ctx.click.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 4, ctx.price, ctx.currencyCode, "symbol-narrow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".container-product[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.container-product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 180px;\n  height: 180px;\n  cursor: pointer;\n}\n.container-product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  border-radius: var(--border-radius-4);\n  object-fit: contain;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: calc( 100% - 180px );\n  padding-left: 16px;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: normal;\n  cursor: pointer;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin-right: 115px;\n  font-size: 12px;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 18px;\n  cursor: pointer;\n}\n@media only screen and (max-width: 768px) {\n  .location[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .location[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Jlc3VsdC1wcm9kdWN0LmNvbXBvbmVudC5zYXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fbWl4aW5zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VDSEEsYUFBQTtFQUNBLHVCREdNO0VDRk4sOEJERWlCO0VDRGpCLG1CQUptRTtBRE1yRTtBQUFFO0VDTEEsYUFBQTtFQUNBLG1CREtRO0VDSlIsdUJESWU7RUNIZixtQkFKbUU7RURRakUsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBS0o7QUFKSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FBTU47QUFMRTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQU5JO0VBQ0UsaUJBQUE7RUNwQkosYUFBQTtFQUNBLG1CRG9CVTtFQ25CViw4QkRtQmlCO0VDbEJqQixtQkFKbUU7QURpQ3JFO0FBVFE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBV1Y7QUFWTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQVlSO0FBWEk7RUFDRSxnQkFBQTtBQWFOO0FBWk07RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBY1I7QUFaQTtFQUNFO0lBQ0UsNEJBQUE7RUFlRjtBQUNGO0FBZEE7RUFDRTtJQUNFLHdCQUFBO0VBZ0JGO0FBQ0YiLCJmaWxlIjoicmVzdWx0LXByb2R1Y3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnXG5AaW1wb3J0ICdicmVha3BvaW50cydcblxuLmNvbnRhaW5lci1wcm9kdWN0XG4gIHBhZGRpbmc6IDE2cHhcbiAgK2ZsZXgoZmxleC1zdGFydCxzcGFjZS1iZXR3ZWVuKVxuICAuaW1hZ2VcbiAgICArZmxleChjZW50ZXIsY2VudGVyKVxuICAgIHdpZHRoOiAxODBweFxuICAgIGhlaWdodDogMTgwcHhcbiAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICBpbWdcbiAgICAgIG1heC13aWR0aDogMTAwJVxuICAgICAgbWF4LWhlaWdodDogMTAwJVxuICAgICAgbWFyZ2luOiBhdXRvXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTQpXG4gICAgICBvYmplY3QtZml0OiBjb250YWluXG4gIC5jb250ZW50XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxODBweCApXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4XG4gICAgLnRpdGxlXG4gICAgICBwYWRkaW5nLXRvcDogMTZweFxuICAgICAgK2ZsZXgoY2VudGVyLHNwYWNlLWJldHdlZW4pXG4gICAgICAucHJpY2VcbiAgICAgICAgaDFcbiAgICAgICAgICBmb250LXNpemU6IDI0cHhcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAubG9jYXRpb25cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMTVweFxuICAgICAgICBmb250LXNpemU6IDEycHhcbiAgICAuc3VidGl0bGVcbiAgICAgIG1hcmdpbi10b3A6IDMycHhcbiAgICAgIGgyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay1zbWFsbC10YWJsZXQpXG4gIC5sb2NhdGlvblxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnRcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKVxuICAubG9jYXRpb25cbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQiLCI9ZmxleCgkYWxpZ25JdGVtczogc3RyZXRjaCwgJGp1c3RpZnlDb250ZW50OiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiByb3cpXG4gIGRpc3BsYXk6IGZsZXhcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnlDb250ZW50XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uXG5cbj1wbGFjZWhvbGRlci1sb2FkaW5nKClcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxc1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkc1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZVxuICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhclxuICBiYWNrZ3JvdW5kOiAjZjZmN2Y4XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSA4JSwgI2RkZGRkZCAxOCUsICAjZWVlZWVlIDMzJSlcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMTA0cHhcbiAgXG5cbiAgQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXJcbiAgICAwJVxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIDEwMCVcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMCJdfQ== */"] });


/***/ }),

/***/ "OTM9":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/results-search/components/result-product-placeholder/result-product-placeholder.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ResultProductPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultProductPlaceholderComponent", function() { return ResultProductPlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ResultProductPlaceholderComponent {
    constructor() { }
}
ResultProductPlaceholderComponent.ɵfac = function ResultProductPlaceholderComponent_Factory(t) { return new (t || ResultProductPlaceholderComponent)(); };
ResultProductPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultProductPlaceholderComponent, selectors: [["app-result-product-placeholder"]], decls: 11, vars: 0, consts: [[1, "container-product"], [1, "image"], [1, "box-image"], [1, "content"], [1, "title"], [1, "price"], [1, "box-price"], [1, "location"], [1, "box-location"], [1, "subtitle"], [1, "box-subtitle"]], template: function ResultProductPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-product[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.container-product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 180px;\n  height: 180px;\n  cursor: pointer;\n}\n.container-product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .box-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  border-radius: var(--border-radius-4);\n  object-fit: contain;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: calc( 100% - 180px );\n  padding-left: 16px;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .box-price[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 20px;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin-right: 115px;\n  font-size: 12px;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.container-product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .box-subtitle[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 20px;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .location[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .location[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Jlc3VsdC1wcm9kdWN0LXBsYWNlaG9sZGVyLmNvbXBvbmVudC5zYXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fbWl4aW5zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VDSEEsYUFBQTtFQUNBLHVCREdNO0VDRk4sOEJERWlCO0VDRGpCLG1CQUptRTtBRE1yRTtBQUFFO0VDTEEsYUFBQTtFQUNBLG1CREtRO0VDSlIsdUJESWU7RUNIZixtQkFKbUU7RURRakUsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBS0o7QUFKSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUNUSixzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLDZCQUFBO0FEZ0JGO0FDYkU7RUFDRTtJQUNJLDZCQUFBO0VEZU47RUNkRTtJQUNJLDRCQUFBO0VEZ0JOO0FBQ0Y7QUFwQkU7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBc0JKO0FBckJJO0VBQ0UsaUJBQUE7RUNyQkosYUFBQTtFQUNBLG1CRHFCVTtFQ3BCViw4QkRvQmlCO0VDbkJqQixtQkFKbUU7QURpRHJFO0FBeEJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUNwQlIsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7RUFDQSw2QkFBQTtBRCtDRjtBQzVDRTtFQUNFO0lBQ0ksNkJBQUE7RUQ4Q047RUM3Q0U7SUFDSSw0QkFBQTtFRCtDTjtBQUNGO0FBeENNO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBMENSO0FBekNJO0VBQ0UsZ0JBQUE7QUEyQ047QUExQ007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQzdCTixzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLDZCQUFBO0FEMEVGO0FDdkVFO0VBQ0U7SUFDSSw2QkFBQTtFRHlFTjtFQ3hFRTtJQUNJLDRCQUFBO0VEMEVOO0FBQ0Y7QUF6REE7RUFDRTtJQUNFLDRCQUFBO0VBNERGO0FBQ0Y7QUEzREE7RUFDRTtJQUNFLHdCQUFBO0VBNkRGO0FBQ0YiLCJmaWxlIjoicmVzdWx0LXByb2R1Y3QtcGxhY2Vob2xkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnXG5AaW1wb3J0ICdicmVha3BvaW50cydcblxuLmNvbnRhaW5lci1wcm9kdWN0XG4gIHBhZGRpbmc6IDE2cHhcbiAgK2ZsZXgoZmxleC1zdGFydCxzcGFjZS1iZXR3ZWVuKVxuICAuaW1hZ2VcbiAgICArZmxleChjZW50ZXIsY2VudGVyKVxuICAgIHdpZHRoOiAxODBweFxuICAgIGhlaWdodDogMTgwcHhcbiAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAuYm94LWltYWdlXG4gICAgICB3aWR0aDogMTAwJVxuICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICBtYXJnaW46IGF1dG9cbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtNClcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW5cbiAgICAgICtwbGFjZWhvbGRlci1sb2FkaW5nKClcbiAgLmNvbnRlbnRcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE4MHB4IClcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHhcbiAgICAudGl0bGVcbiAgICAgIHBhZGRpbmctdG9wOiAxNnB4XG4gICAgICArZmxleChjZW50ZXIsc3BhY2UtYmV0d2VlbilcbiAgICAgIC5wcmljZVxuICAgICAgICAuYm94LXByaWNlXG4gICAgICAgICAgd2lkdGg6IDk1cHhcbiAgICAgICAgICBoZWlnaHQ6IDIwcHhcbiAgICAgICAgICArcGxhY2Vob2xkZXItbG9hZGluZygpXG4gICAgICAubG9jYXRpb25cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMTVweFxuICAgICAgICBmb250LXNpemU6IDEycHhcbiAgICAuc3VidGl0bGVcbiAgICAgIG1hcmdpbi10b3A6IDMycHhcbiAgICAgIC5ib3gtc3VidGl0bGVcbiAgICAgICAgd2lkdGg6IDM0MHB4XG4gICAgICAgIGhlaWdodDogMjBweFxuICAgICAgICArcGxhY2Vob2xkZXItbG9hZGluZygpXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsLXRhYmxldClcbiAgLmxvY2F0aW9uXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudFxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpXG4gIC5sb2NhdGlvblxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudCIsIj1mbGV4KCRhbGlnbkl0ZW1zOiBzdHJldGNoLCAkanVzdGlmeUNvbnRlbnQ6IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IHJvdylcbiAgZGlzcGxheTogZmxleFxuICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXNcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeUNvbnRlbnRcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb25cblxuPXBsYWNlaG9sZGVyLWxvYWRpbmcoKVxuICBhbmltYXRpb24tZHVyYXRpb246IDFzXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlXG4gIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXG4gIGJhY2tncm91bmQ6ICNmNmY3ZjhcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVlZWVlIDglLCAjZGRkZGRkIDE4JSwgICNlZWVlZWUgMzMlKVxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAxMDRweFxuICBcblxuICBAa2V5ZnJhbWVzIHBsYWNlSG9sZGVyU2hpbW1lclxuICAgIDAlXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgMTAwJVxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwIl19 */"] });


/***/ }),

/***/ "Pla8":
/*!*************************************************************************!*\
  !*** ./src/app/modules/results-search/results-search.routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ResultsSearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsSearchRoutingModule", function() { return ResultsSearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _results_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results-search.component */ "DdoI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ResultsSearchRoutingModule {
}
ResultsSearchRoutingModule.ɵfac = function ResultsSearchRoutingModule_Factory(t) { return new (t || ResultsSearchRoutingModule)(); };
ResultsSearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ResultsSearchRoutingModule });
ResultsSearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
                {
                    path: '',
                    component: _results_search_component__WEBPACK_IMPORTED_MODULE_1__["ResultsSearchComponent"]
                }
            ])], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResultsSearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ue3m":
/*!*****************************************************************!*\
  !*** ./src/app/modules/results-search/results-search.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResultsSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsSearchModule", function() { return ResultsSearchModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _results_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results-search.component */ "DdoI");
/* harmony import */ var _results_search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results-search.routing.module */ "Pla8");
/* harmony import */ var _components_result_product_result_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/result-product/result-product.component */ "IJAN");
/* harmony import */ var _components_result_product_placeholder_result_product_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/result-product-placeholder/result-product-placeholder.component */ "OTM9");
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.module */ "1NLG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ResultsSearchModule {
}
ResultsSearchModule.ɵfac = function ResultsSearchModule_Factory(t) { return new (t || ResultsSearchModule)(); };
ResultsSearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ResultsSearchModule });
ResultsSearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _results_search_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResultsSearchRoutingModule"],
            _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ResultsSearchModule, { declarations: [_results_search_component__WEBPACK_IMPORTED_MODULE_1__["ResultsSearchComponent"], _components_result_product_result_product_component__WEBPACK_IMPORTED_MODULE_3__["ResultProductComponent"], _components_result_product_placeholder_result_product_placeholder_component__WEBPACK_IMPORTED_MODULE_4__["ResultProductPlaceholderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _results_search_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResultsSearchRoutingModule"],
        _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-results-search-results-search-module.js.map