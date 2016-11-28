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
var AppComponent = (function () {
    function AppComponent() {
        this.HEROES = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        this.isUnchanged = true;
        this.classes = ["red", "big"];
        this.evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
        this.isSpecial = true;
        this.sizeChange = new core_1.EventEmitter();
        this.size = 1;
        this.currentHero = {
            firstName: 'George'
        };
    }
    AppComponent.prototype.onSave = function (e) {
        alert(e);
    };
    AppComponent.prototype.dec = function () { this.resize(-1); };
    AppComponent.prototype.inc = function () { this.resize(+1); };
    AppComponent.prototype.resize = function (delta) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
        this.currentHero.firstName += "1";
    };
    AppComponent.prototype.onChange = function () {
        alert("change");
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "sizeChange", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styles: ["\n    .red{\n      color: red;\n    }\n    .big{\n      font-size:30px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map