// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneDetail')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        });
    }])
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$routeParams', '$http', function PhoneDetailController($routeParams, $http) {
            var self = this;

            $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
                self.phone = response.data;
            });
        }]
    });