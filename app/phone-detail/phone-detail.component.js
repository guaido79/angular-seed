// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneDetail')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        });
    }])
    .component('phoneDetail', {
        template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
        controller: ['$routeParams', function PhoneDetailController($routeParams) {
            var self = this;

            self.phoneId = $routeParams.phoneId;
        }]
    });