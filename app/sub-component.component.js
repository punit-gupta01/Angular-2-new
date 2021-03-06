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
var core_1 = require('@angular/core');
var local_data_service_1 = require('./local-data.service');
var subcomponentComponent = (function () {
    function subcomponentComponent(localDataServiceInstance) {
        this.localDataServiceInstance = localDataServiceInstance;
    }
    subcomponentComponent.prototype.ageSum = function () {
        var sum = 0;
        if (this.obj != undefined)
            for (var i = 0; i < this.obj.length; i++) {
                sum += this.obj[i].age;
            }
        return sum;
    };
    subcomponentComponent.prototype.func_name = function (name) {
        if (name.toLowerCase() == 'punit')
            alert('Good choice!');
    };
    subcomponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localDataServiceInstance.getLocalData().subscribe(function (temp_var) { return _this.obj = temp_var; });
    };
    subcomponentComponent = __decorate([
        core_1.Component({
            selector: 'mysub-app',
            templateUrl: 'app/sub-component.component.html',
            styleUrls: ['app/sub-component.component.css']
        }), 
        __metadata('design:paramtypes', [local_data_service_1.localDataService])
    ], subcomponentComponent);
    return subcomponentComponent;
}());
exports.subcomponentComponent = subcomponentComponent;
//# sourceMappingURL=sub-component.component.js.map