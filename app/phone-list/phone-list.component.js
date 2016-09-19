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
        controller: ['Phone', function PhoneListController(Phone) {
            var self = this;

            self.orderProp = 'age';

            self.phones = Phone.query();

        }]
    });