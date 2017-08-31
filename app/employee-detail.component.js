"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var EmployeeDetailsComponent = (function () {
    //  viet cconstructorde inject router vao 
    function EmployeeDetailsComponent(router, activatedroute) {
        this.router = router;
        this.activatedroute = activatedroute;
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        // get _id from url 
        var _this = this;
        this.subscription = this.activatedroute.params.subscribe(function (params) {
            _this._id = params['id'];
            alert(_this._id);
        });
    };
    EmployeeDetailsComponent.prototype.Gotoemployee = function () {
        this.router.navigate(['employees']);
    };
    EmployeeDetailsComponent.prototype.ngOnDestroy = function () {
        // huy 
        this.subscription.unsubscrible();
    };
    EmployeeDetailsComponent = __decorate([
        core_1.Component({
            selector: 'employeedetail-component',
            templateUrl: 'app/employee-detail.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;
//# sourceMappingURL=employee-detail.component.js.map