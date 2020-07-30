(function () {
    'use strict';

    angular.
        module('home').
        component('homeComponent', {
            templateUrl: 'app/home/home.template.html',
            controller: function($scope) {
                $scope.test = 'Hello World!!!';
            }
        });

})();