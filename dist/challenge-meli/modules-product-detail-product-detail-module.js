(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-product-detail-product-detail-module"],{

/***/ "5ANV":
/*!*****************************************************************!*\
  !*** ./src/app/modules/product-detail/product-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.routing.module */ "mV4N");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.component */ "W+73");
/* harmony import */ var _product_detail_placeholder_product_detail_placeholder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail-placeholder/product-detail-placeholder.component */ "HQFD");
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.module */ "1NLG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProductDetailModule {
}
ProductDetailModule.ɵfac = function ProductDetailModule_Factory(t) { return new (t || ProductDetailModule)(); };
ProductDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProductDetailModule });
ProductDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductDetailRoutingModule"],
            _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductDetailModule, { declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"],
        _product_detail_placeholder_product_detail_placeholder_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPlaceholderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductDetailRoutingModule"],
        _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"]] }); })();


/***/ }),

/***/ "HQFD":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/product-detail/product-detail-placeholder/product-detail-placeholder.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProductDetailPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPlaceholderComponent", function() { return ProductDetailPlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductDetailPlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductDetailPlaceholderComponent.ɵfac = function ProductDetailPlaceholderComponent_Factory(t) { return new (t || ProductDetailPlaceholderComponent)(); };
ProductDetailPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailPlaceholderComponent, selectors: [["app-product-detail-placeholder"]], decls: 9, vars: 0, consts: [[1, "content-product"], [1, "product"], [1, "image"], [1, "box-image"], [1, "info"], [1, "box-text-promo"], [1, "box-title"], [1, "box-price"], [1, "box-button"]], template: function ProductDetailPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".content-product[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  padding: 32px;\n}\n\n.product[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: calc(100% - 220px);\n}\n\n.product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .box-image[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n  height: 500px;\n  margin: auto;\n  width: 90%;\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n.product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box-text-promo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 14px;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n.product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 200px;\n  height: 40px;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n.product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box-price[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 30px;\n  margin: 32px 0px;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n.product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box-button[_ngcontent-%COMP%] {\n  height: 39px;\n  width: 100%;\n  border-radius: var(--border-radius-4);\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .product[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2R1Y3QtZGV0YWlsLXBsYWNlaG9sZGVyLmNvbXBvbmVudC5zYXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fbWl4aW5zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw4QkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFHQTtFQ0xFLGFBQUE7RUFDQSx1QkRLTTtFQ0pOLHVCRElpQjtFQ0hqQixtQkFKbUU7QURVckU7O0FBRkU7RUNQQSxhQUFBO0VBQ0EsbUJET1E7RUNOUix1QkRNZTtFQ0xmLG1CQUptRTtFRFVqRSx5QkFBQTtBQU9KOztBQU5JO0VDSkYsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7RUFDQSw2QkFBQTtFRERJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWVOOztBQ2JFO0VBQ0U7SUFDSSw2QkFBQTtFRGVOO0VDZEU7SUFDSSw0QkFBQTtFRGdCTjtBQUNGOztBQXRCRTtFQUNFLFlBQUE7QUF3Qko7O0FBdkJJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUNiSixzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLDZCQUFBO0FEdUNGOztBQ3BDRTtFQUNFO0lBQ0ksNkJBQUE7RURzQ047RUNyQ0U7SUFDSSw0QkFBQTtFRHVDTjtBQUNGOztBQXZDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUNsQkosc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7RUFDQSw2QkFBQTtBRDRERjs7QUN6REU7RUFDRTtJQUNJLDZCQUFBO0VEMkROO0VDMURFO0lBQ0ksNEJBQUE7RUQ0RE47QUFDRjs7QUF2REk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VDdkJKLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLDJFQUFBO0VBQ0EsNkJBQUE7QURpRkY7O0FDOUVFO0VBQ0U7SUFDSSw2QkFBQTtFRGdGTjtFQy9FRTtJQUNJLDRCQUFBO0VEaUZOO0FBQ0Y7O0FBdkVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQzVCSixzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLDZCQUFBO0FEc0dGOztBQ25HRTtFQUNFO0lBQ0ksNkJBQUE7RURxR047RUNwR0U7SUFDSSw0QkFBQTtFRHNHTjtBQUNGOztBQXRGQTtFQUNFO0lBQ0UseUJBQUE7RUF5RkY7RUF4RkU7SUFDRSxzQkFBQTtFQTBGSjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLXBsYWNlaG9sZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJ1xuQGltcG9ydCAnYnJlYWtwb2ludHMnXG5cbi5jb250ZW50LXByb2R1Y3RcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpXG4gIHBhZGRpbmc6IDMycHhcbi5wcm9kdWN0XG4gICtmbGV4KGZsZXgtc3RhcnQsY2VudGVyKVxuICAuaW1hZ2VcbiAgICArZmxleChjZW50ZXIsY2VudGVyKVxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweClcbiAgICAuYm94LWltYWdlXG4gICAgICArcGxhY2Vob2xkZXItbG9hZGluZygpXG4gICAgICBoZWlnaHQ6IDUwMHB4XG4gICAgICBtYXJnaW46IGF1dG9cbiAgICAgIHdpZHRoOiA5MCVcbiAgLmluZm9cbiAgICB3aWR0aDogMjIwcHhcbiAgICAuYm94LXRleHQtcHJvbW9cbiAgICAgIHdpZHRoOiAxMDBweFxuICAgICAgaGVpZ2h0OiAxNHB4XG4gICAgICArcGxhY2Vob2xkZXItbG9hZGluZygpXG4gICAgLmJveC10aXRsZVxuICAgICAgbWFyZ2luLXRvcDogMTZweFxuICAgICAgd2lkdGg6IDIwMHB4XG4gICAgICBoZWlnaHQ6IDQwcHhcbiAgICAgICtwbGFjZWhvbGRlci1sb2FkaW5nKClcbiAgICAuYm94LXByaWNlXG4gICAgICB3aWR0aDogMTMwcHhcbiAgICAgIGhlaWdodDogMzBweFxuICAgICAgbWFyZ2luOiAzMnB4IDBweFxuICAgICAgK3BsYWNlaG9sZGVyLWxvYWRpbmcoKVxuICAgIC5ib3gtYnV0dG9uXG4gICAgICBoZWlnaHQ6IDM5cHhcbiAgICAgIHdpZHRoOiAxMDAlXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTQpXG4gICAgICArcGxhY2Vob2xkZXItbG9hZGluZygpXG4gICAgICBcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpXG4gIC5wcm9kdWN0XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudFxuICAgIC5pbWFnZVxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudCIsIj1mbGV4KCRhbGlnbkl0ZW1zOiBzdHJldGNoLCAkanVzdGlmeUNvbnRlbnQ6IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IHJvdylcbiAgZGlzcGxheTogZmxleFxuICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXNcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeUNvbnRlbnRcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb25cblxuPXBsYWNlaG9sZGVyLWxvYWRpbmcoKVxuICBhbmltYXRpb24tZHVyYXRpb246IDFzXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlXG4gIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXG4gIGJhY2tncm91bmQ6ICNmNmY3ZjhcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVlZWVlIDglLCAjZGRkZGRkIDE4JSwgICNlZWVlZWUgMzMlKVxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAxMDRweFxuICBcblxuICBAa2V5ZnJhbWVzIHBsYWNlSG9sZGVyU2hpbW1lclxuICAgIDAlXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgMTAwJVxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwIl19 */"] });


/***/ }),

/***/ "W+73":
/*!********************************************************************!*\
  !*** ./src/app/modules/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_app_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.facade */ "1ceR");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.component */ "Za5s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_detail_placeholder_product_detail_placeholder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-placeholder/product-detail-placeholder.component */ "HQFD");






function ProductDetailComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-detail-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProductDetailComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nuevo - 234 vendidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Comprar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Descripci\u00F3n del producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r4 == null ? null : product_r4.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4 == null ? null : product_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 4, product_r4 == null ? null : product_r4.price == null ? null : product_r4.price.amount, product_r4 == null ? null : product_r4.price == null ? null : product_r4.price.currency, "symbol-narrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4 == null ? null : product_r4.description);
} }
function ProductDetailComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailComponent_ng_template_5_ng_container_0_Template, 20, 8, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.product$));
} }
class ProductDetailComponent {
    constructor(route, router, appFacade) {
        this.route = route;
        this.router = router;
        this.appFacade = appFacade;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (!!id)
            this.appFacade.fetchDetailProduct(id);
        else
            this.router.navigateByUrl('/');
    }
    get product$() {
        return this.appFacade.productDetail$;
    }
    get isLoading$() {
        return this.appFacade.isLoading$;
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_facade__WEBPACK_IMPORTED_MODULE_2__["AppFacade"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 7, vars: 4, consts: [[1, "container-product"], [1, "breadcrumbs"], [4, "ngIf", "ngIfElse"], ["productDetail", ""], [4, "ngIf"], [1, "content-product"], [1, "product"], [1, "image"], [3, "src"], [1, "info"], [1, "text-promo"], [1, "price"], [1, "description"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailComponent_ng_template_5_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.isLoading$))("ngIfElse", _r1);
    } }, directives: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _product_detail_placeholder_product_detail_placeholder_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPlaceholderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".container-product[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  max-width: 865px;\n}\n.container-product[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  padding: 16px 0px;\n}\n.container-product[_ngcontent-%COMP%]   .content-product[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  padding: 32px;\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: calc(100% - 220px);\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 680px;\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text-promo[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 24px;\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 46px;\n  display: block;\n  margin: 32px 0px;\n}\n.container-product[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--white);\n  height: 39px;\n  width: 100%;\n  background-color: var(--blue);\n  border-radius: var(--border-radius-4);\n}\n.container-product[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.container-product[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.container-product[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n  font-size: 16px;\n}\n@media screen and (max-width: 1024px) {\n  .product[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zYXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fYnJlYWtwb2ludHMuc2FzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX21peGlucy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkNOdUI7QURJekI7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBQ0U7RUVYQSxhQUFBO0VBQ0EsdUJGV1E7RUVWUix1QkZVbUI7RUVUbkIsbUJBSm1FO0FGaUJyRTtBQUhJO0VFYkYsYUFBQTtFQUNBLG1CRmFVO0VFWlYsdUJGWWlCO0VFWGpCLG1CQUptRTtFRmdCL0QseUJBQUE7QUFRTjtBQVBNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBU1I7QUFSSTtFQUNFLFlBQUE7QUFVTjtBQVRNO0VBQ0UsZUFBQTtBQVdSO0FBVk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFZUjtBQVhNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWFSO0FBWk07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7QUFjUjtBQWJFO0VBQ0UsZ0JBQUE7QUFlSjtBQWRJO0VBQ0UsZUFBQTtBQWdCTjtBQWZJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWlCTjtBQWZBO0VBQ0U7SUFDRSx5QkFBQTtFQWtCRjtFQWpCRTtJQUNFLHNCQUFBO0VBbUJKO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnXG5AaW1wb3J0ICdicmVha3BvaW50cydcblxuLmNvbnRhaW5lci1wcm9kdWN0XG4gIHdpZHRoOiAxMDAlXG4gIG1hcmdpbjogYXV0b1xuICBtYXgtd2lkdGg6ICRicmVhay1wb3NpdGlvbi1kZXNrdG9wXG4gIC5icmVhZGNydW1ic1xuICAgIHBhZGRpbmc6IDE2cHggMHB4XG4gIC5jb250ZW50LXByb2R1Y3RcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSlcbiAgICBwYWRkaW5nOiAzMnB4XG4gIC5wcm9kdWN0XG4gICAgK2ZsZXgoZmxleC1zdGFydCxjZW50ZXIpXG4gICAgLmltYWdlXG4gICAgICArZmxleChjZW50ZXIsY2VudGVyKVxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KVxuICAgICAgaW1nXG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICBtYXgtd2lkdGg6IDY4MHB4XG4gICAgLmluZm9cbiAgICAgIHdpZHRoOiAyMjBweFxuICAgICAgLnRleHQtcHJvbW9cbiAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgICBoMVxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweFxuICAgICAgLnByaWNlXG4gICAgICAgIGZvbnQtc2l6ZTogNDZweFxuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICBtYXJnaW46IDMycHggMHB4XG4gICAgICBidXR0b25cbiAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSlcbiAgICAgICAgaGVpZ2h0OiAzOXB4XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtNClcbiAgLmRlc2NyaXB0aW9uXG4gICAgbWFyZ2luLXRvcDogODBweFxuICAgIGgyXG4gICAgICBmb250LXNpemU6IDI4cHhcbiAgICBzcGFuXG4gICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgbWFyZ2luLXRvcDogMzJweFxuICAgICAgZm9udC1zaXplOiAxNnB4XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpXG4gIC5wcm9kdWN0XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudFxuICAgIC5pbWFnZVxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudFxuICAgICAgXG5cbiIsIiRicmVhay1wb3NpdGlvbi1kZXNrdG9wOiA4NjVweFxuJGJyZWFrLW1vYmlsZTogNDgwcHhcbiRicmVhay10YWJsZXQ6IDEwMjRweFxuJGJyZWFrLXNtYWxsLXRhYmxldDogNzY4cHgiLCI9ZmxleCgkYWxpZ25JdGVtczogc3RyZXRjaCwgJGp1c3RpZnlDb250ZW50OiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiByb3cpXG4gIGRpc3BsYXk6IGZsZXhcbiAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnlDb250ZW50XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uXG5cbj1wbGFjZWhvbGRlci1sb2FkaW5nKClcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxc1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkc1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZVxuICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhclxuICBiYWNrZ3JvdW5kOiAjZjZmN2Y4XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSA4JSwgI2RkZGRkZCAxOCUsICAjZWVlZWVlIDMzJSlcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMTA0cHhcbiAgXG5cbiAgQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXJcbiAgICAwJVxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIDEwMCVcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMCJdfQ== */"] });


/***/ }),

/***/ "mV4N":
/*!*************************************************************************!*\
  !*** ./src/app/modules/product-detail/product-detail.routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function() { return ProductDetailRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component */ "W+73");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ProductDetailRoutingModule {
}
ProductDetailRoutingModule.ɵfac = function ProductDetailRoutingModule_Factory(t) { return new (t || ProductDetailRoutingModule)(); };
ProductDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductDetailRoutingModule });
ProductDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
                {
                    path: ':id',
                    component: _product_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailComponent"]
                }
            ])], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-product-detail-product-detail-module.js.map