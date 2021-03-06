'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
  config([
    '$locationProvider',
    '$routeProvider',
    '$mdThemingProvider',
    '$mdIconProvider',
    function ($locationProvider, $routeProvider, $mdThemingProvider, $mdIconProvider) {


      $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("share", "./assets/svg/share.svg", 24)
        .icon("google_plus", "./assets/svg/google_plus.svg", 512)
        .icon("hangouts", "./assets/svg/hangouts.svg", 512)
        .icon("twitter", "./assets/svg/twitter.svg", 512)
        .icon("phone", "./assets/svg/phone.svg", 512);

      $mdThemingProvider.theme('default').primaryPalette('green').accentPalette('amber');

      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({ redirectTo: '/view1' });
    }]);
