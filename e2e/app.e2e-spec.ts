import { Angular2FlickrObservablesPage } from './app.po';

describe('angular2-flickr-observables App', function() {
  let page: Angular2FlickrObservablesPage;

  beforeEach(() => {
    page = new Angular2FlickrObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
