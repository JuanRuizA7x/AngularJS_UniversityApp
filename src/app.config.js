(function () {
    'use strict';

    angular.module('myApp')

        .config(function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    template: '<home-component></home-component>'
                })
                .when('/professors', {
                    template: '<professors-component></professors-component>'
                })
                .when('/students', {
                    template: '<students-component></students-component>'
                })
                .otherwise('/home');
        });

})();