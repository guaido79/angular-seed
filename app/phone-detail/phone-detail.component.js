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
        controller: ['$routeParams', 'Phone', function PhoneDetailController($routeParams, Phone) {
            var self = this;

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };

            self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                self.setImage(phone.images[0]);
            });

        }]
    });