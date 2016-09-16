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

  describe('View: phoneList', function () {

    beforeEach(function () {
      browser.get('index.html#!/phones');
    });

    it('should filter the phone list as a user types into the search box', function () {
      var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
    });

    it('should be possible to control phone order via the drop-down menu', function () {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      //var nameOption = element(by.css('.ptTest'));
      var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

      function getNames() {
        return phoneNameColumn.map(function (elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      orderSelect.click();

      var nameOption = element(by.css('md-select-menu md-content > :first-child'));
      expect(nameOption.isPresent()).toBe(true);
      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('should render phone specific links', function () {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.phones :first-child')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
    });


  });

  describe('View: Phone details', function () {

    beforeEach(function () {
      browser.get('index.html#!/phones/nexus-s');
    });

    it('should display placeholder page with `phoneId`', function () {
      expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
    });

});

});
