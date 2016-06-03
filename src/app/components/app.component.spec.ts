import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2FlickrObservablesAppComponent } from './app.component';

beforeEachProviders(() => [Angular2FlickrObservablesAppComponent]);

describe('App: Angular2FlickrObservables', () => {
  it('should create the app',
      inject([Angular2FlickrObservablesAppComponent], (app: Angular2FlickrObservablesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'angular2-flickr-observables works!\'',
  //     inject([Angular2FlickrObservablesAppComponent], (app: Angular2FlickrObservablesAppComponent) => {
  //   expect(app.title).toEqual('angular2-flickr-observables works!');
  // }));
});
