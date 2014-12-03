'use strict';

angular.module('impactApp')
  .controller('MainCtrl', function ($scope, Auth, $sessionStorage, mdph) {
    Auth.isLoggedInAsync(function(isLoggedIn) {
      if (isLoggedIn) {
        $scope.btnText = 'Voir vos demandes';
        $scope.btnRef = 'liste_demandes';
      } else {
        $scope.btnText = 'Commencer';
        $scope.btnRef = 'questionnaire';
      }
      $scope.btnPartenaireText = 'Partenaire ?';
      $scope.btnPartenaireRef = 'partenaire';
    });

    if (mdph) {
      $scope.currentMdph = $sessionStorage.currentMdph = mdph;
    }

    $scope.getMdphName = function() {
      if ($scope.currentMdph) {
        return ' ' + $scope.currentMdph.name;
      }
    };

    $scope.getVerticalOffset = function() {
      return $sessionStorage.hideIntro ? '-925' : '-948';
    };
  });
