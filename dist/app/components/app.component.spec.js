"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
testing_1.beforeEachProviders(function () { return [app_component_1.Angular2FlickrObservablesAppComponent]; });
testing_1.describe('App: Angular2FlickrObservables', function () {
    testing_1.it('should create the app', testing_1.inject([app_component_1.Angular2FlickrObservablesAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    // it('should have as title \'angular2-flickr-observables works!\'',
    //     inject([Angular2FlickrObservablesAppComponent], (app: Angular2FlickrObservablesAppComponent) => {
    //   expect(app.title).toEqual('angular2-flickr-observables works!');
    // }));
});
//# sourceMappingURL=app.component.spec.js.map