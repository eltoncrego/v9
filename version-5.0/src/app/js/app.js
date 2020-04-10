var appname = angular.module('eltoncrego', []);
appname.controller('siteController', ['$scope',
  function($scope) {
    $scope.hamburgerState = "";
    $scope.navbarState = "";
    $scope.title = "Elton C. Rego"
    $scope.toggleHamburger = function(){
      if ($scope.hamburgerState === "") {
        $scope.hamburgerState = "is-active";
        $scope.navbarState = "navbar-active";
      } else {
        $scope.hamburgerState = "";
        $scope.navbarState = "";
      }
    }
  }
]);

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww >= 768) {
      $('.navbar').removeClass('navbar-active');
      $('.site-logo').removeClass('navbar-active');
      $('.hamburger').removeClass('is-active');
    }
  };
  $(window).resize(function(){
    alterClass();
  });
});
