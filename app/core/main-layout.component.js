angular.
    module('myApp')
    .component('mainLayout', {
        templateUrl: 'core/main-layout.template.html',
        controller: ['$mdSidenav', '$mdBottomSheet', '$mdMedia', '$scope', function MainLayoutController($mdSidenav, $mdBottomSheet, $mdMedia, $scope) {
            var self = this;

            self.toggleMenuLeft = function () {
                $mdSidenav('menuLeft').toggle();
            };

            self.isFabOpen = false;

            $scope.$watch(function () {
                return $mdMedia('gt-sm');
            },
                function (isBigScreen) {
                    self.showIconMenu = !isBigScreen;
                });
        }]
    });