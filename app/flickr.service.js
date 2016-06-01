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
var http_1 = require('@angular/http');
require('rxjs/RX');
var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
    }
    ;
    FlickrService.prototype.getResult = function (query) {
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9012151640d5486e63780579ff3b9cae&tags=" + query + "&per_page=12&format=json&nojsoncallback=1";
        return this._http
            .get(url)
            .map(function (res) { return res.json(); })
            .map(function (val) {
            if (val.stat === 'ok') {
                return val.photos.photo.map(function (photo) {
                    return {
                        url: "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg",
                        title: photo.title
                    };
                });
            }
            else {
                return [];
            }
        });
    };
    FlickrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FlickrService);
    return FlickrService;
}());
exports.FlickrService = FlickrService;
//# sourceMappingURL=flickr.service.js.map