/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var LoginPage = function() {
  var form = this.form = element(by.id('form-login'));
  form.email = form.element(by.model('user.email'));
  form.password = form.element(by.model('user.password'));
  form.submit = form.element(by.id('btn-login'));

  this.login = function(data) {
    for (var prop in data) {
      var formElem = form[prop];
      if (data.hasOwnProperty(prop) && formElem && typeof formElem.sendKeys === 'function') {
        formElem.sendKeys(data[prop]);
      }
    }

    return form.submit.click();
  };
};

module.exports = new LoginPage();
