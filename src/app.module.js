(function () {
    'use strict';

    angular.module('myApp', ['ngRoute', 'home', 'professors', 'students'])

        .controller('appCtrl', function ($scope) {
            $scope.navbar = 'app/shared/navbar.html';

            $scope.setActive = function(option) {

                $scope.home = '';
                $scope.professors = '';
                $scope.students = '';

                $scope[option] = 'active';

            }
        });

})();