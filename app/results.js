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
var flickr_service_1 = require('./flickr.service');
var common_1 = require('@angular/common');
require('rxjs/RX');
var Results = (function () {
    function Results(_formBuilder, _flickrService) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this._flickrService = _flickrService;
        this.searchForm = this._formBuilder.group({
            'search': ['', common_1.Validators.required]
        });
        this.model$ = this.searchForm.controls.search.valueChanges
            .debounceTime(500)
            .switchMap(function (query) { return _this._flickrService.getResult(query); })
            .subscribe(function (val) { return _this.photos = val; });
    }
    Results = __decorate([
        core_1.Component({
            selector: 'results',
            templateUrl: 'results.template.html',
            providers: [flickr_service_1.FlickrService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, flickr_service_1.FlickrService])
    ], Results);
    return Results;
}());
exports.Results = Results;
//# sourceMappingURL=results.js.map