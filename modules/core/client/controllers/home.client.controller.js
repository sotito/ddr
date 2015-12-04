'use strict';

var homeController = angular.module('core');

homeController.controller('HomeController', ['$scope', 'Authentication', '$uibModal', '$log', '$http',
  function ($scope, Authentication, $uibModal, $log, $http) {


      // This provides Authentication context.
      $scope.authentication = Authentication;



      //$scope.classifieds = [{
      //    "title":"title text",
      //    "price":"250 omo",
      //    "contactname":"herbert soto",
      //    "contactphone":"7873061715",
      //    "description":"description text"
      //},{
      //    "title":"Example",
      //    "price":"300 omo",
      //    "contactname":"Example",
      //    "contactphone":"7873061715",
      //    "description":"example text"
      //}];




      $scope.open = function (template) {

          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'modules/credit/client/views/'+ template +'.client.view.html',

              controller: function ($scope, $uibModalInstance, $http) {



                  $scope.ok = function () {
                      $uibModalInstance.ok();

                  };

                  $scope.cancel = function () {
                      $uibModalInstance.dismiss('cancel');
                  };


              },
              size: ''
          });


      };




      $scope.status = {
          isopen: true
      };

      $scope.toggled = function(open) {
          $log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
      };



  }

]);

homeController.controller('HomeCarouselController', ['$scope', 'Authentication',
    function ($scope, Authentication, $uibModal, $log) {

        $scope.myInterval = 2500;

        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function(){
            var idBanner = 1 + currIndex;
            slides.push({
                image: '/modules/core/client/img/brand/banner' + idBanner + '.png',
                id: currIndex++
            });

        };

        for(var i=0; i<9; i++) {
            $scope.addSlide();
        }

    }



]);



homeController.controller('HomeModalController', ['$scope', 'Authentication', '$uiModal', '$log',
    function ($scope, Authentication, $uibModal, $log) {








    }]);




