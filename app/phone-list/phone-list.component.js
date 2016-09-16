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
        controller: function PhoneListController() {
            var self = this;

            self.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.',
                    age: 1
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.',
                    age: 2
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.',
                    age: 3
                }
            ];

            self.orderProp = 'age';
        }
    });