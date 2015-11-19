'use strict';

//Setting up route
angular.module('credit').config(['$stateProvider',
    function($stateProvider) {
        // Categories state routing
        $stateProvider.
        state('credit', {
            url: '/credit',
            templateUrl: 'modules/credit/client/views/credit.client.view.html'
        });
        
    }
]);
