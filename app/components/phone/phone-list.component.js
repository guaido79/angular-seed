// Register `phoneList` component, along with its associated controller and template
angular.
    module('myApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phones', {
            template: '<phone-list></phone-list>'
        });
    }])
    .component('phoneList', {
        template:
        '<ul>' +
        '<li ng-repeat="phone in $ctrl.phones">' +
        '<span>{{phone.name}}</span>' +
        '<p>{{phone.snippet}}</p>' +
        '</li>' +
        '</ul>',
        controller: function PhoneListController() {
            var self = this;

            self.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }
    });