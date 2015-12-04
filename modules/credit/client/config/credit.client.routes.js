'use strict';

//Setting up route
angular.module('credit').config(['$stateProvider',
    function($stateProvider) {
        // Categories state routing
        $stateProvider.
        state('credit', {
            url: '/credit',
            templateUrl: 'modules/credit/client/views/credit.client.view.html'
        }, {
            url: '/creditbackup',
                templateUrl: 'modules/credit/client/views/creditbackup.client.view.html'
        }, {
                url: '/creditphone',
                templateUrl: 'modules/credit/client/views/creditphone.client.view.html'
            }, {
                url: '/credithours',
                templateUrl: 'modules/credit/client/views/credithours.client.view.html'
            }, {
                url: '/creditnewsletter',
                templateUrl: 'modules/credit/client/views/creditnewsletter.client.view.html'
            }, {
                url: '/creditsanjuan',
                templateUrl: 'modules/credit/client/views/creditsanjuan.client.view.html'
            }, {
                url: '/creditbayamon',
                templateUrl: 'modules/credit/client/views/creditbayamon.client.view.html'
            });
        
    }
]);
