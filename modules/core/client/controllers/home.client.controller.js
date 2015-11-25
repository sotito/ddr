'use strict';

var homeController = angular.module('core');

homeController.controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {


    // This provides Authentication context.
    $scope.authentication = Authentication;


  }



]);


homeController.controller('HomeCarouselController', ['$scope', 'Authentication',
    function ($scope, Authentication) {

        $scope.myInterval = 2500;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function(){
            var idBanner = 1 + currIndex;
            slides.push({
                image: '/modules/core/client/img/brand/banner' + idBanner + '.png',
                id: currIndex++
            });

        };

        for(var i=0; i<9; i++){
            $scope.addSlide();
        }

        //$scope.slides = [{
        //    image: '/modules/core/client/img/brand/banner1.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner2.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner3.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner4.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner5.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner6.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner7.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner8.png'
        //}, {
        //    image: '/modules/core/client/img/brand/banner9.png'
        //}];



    }



]);





