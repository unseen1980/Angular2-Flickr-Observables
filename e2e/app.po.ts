export class Angular2FlickrObservablesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-flickr-observables-app h1')).getText();
  }
}
