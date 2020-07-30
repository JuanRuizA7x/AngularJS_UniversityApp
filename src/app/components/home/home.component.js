(function () {
    'use strict';

    angular.
        module('home').
        component('homeComponent', {
            templateUrl: 'app/components/home/home.template.html',
            controller: function($scope) {
                $scope.test = 'Hello World!!!';
            }
        });

})();