'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {

    
    // This provides Authentication context.
    $scope.authentication = Authentication;

     $scope.myInterval = 2500;
 

   $scope.slides = [{
    image: '/modules/core/client/img/brand/banner1.png'
  }, {
    image: '/modules/core/client/img/brand/banner2.png'
  }, {
    image: '/modules/core/client/img/brand/banner3.png'
  }];




  }



]);



