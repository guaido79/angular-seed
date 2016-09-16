'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('My Application', function () {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function () {

    beforeEach(function () {
      browser.get('index.html#!/view1');
    });


    it('should render view1 when user navigates to /view1', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function () {

    beforeEach(function () {
      browser.get('index.html#!/view2');
    });


    it('should render view2 when user navigates to /view2', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });

  describe('phoneList', function() {

    beforeEach(function() {
      browser.get('index.html#!/phones');
    });

    it('should filter the phone list as a user types into the search box', function() {
      var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });

  });

});
