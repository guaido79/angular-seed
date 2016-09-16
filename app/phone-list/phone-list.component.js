// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phones', {
            template: '<phone-list></phone-list>'
        });
    }])
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http', function PhoneListController($http) {
            var self = this;

            self.orderProp = 'age';

            $http.get('phones/phones.json').then(function(response) {
                self.phones = response.data;
            });
        }]
    });