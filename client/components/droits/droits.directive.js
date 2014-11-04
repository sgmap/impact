'use strict';

angular.module('impactApp')
  .directive('showPrestations', function () {
    return {
      scope: {
        formAnswers: '=',
        editable: '=',
        width: '=',
        prestations: '='
      },
      templateUrl: 'components/droits/droits.html',
      restrict: 'EA',
      link: function ($scope) {
        $scope.isSelected = function(prestation) {
          return $scope.formAnswers.prestations && angular.isDefined($scope.formAnswers.prestations[prestation.id]);
        };

        $scope.toggle = function(prestation) {
          if ($scope.isSelected(prestation)) {
            $scope.deselect(prestation);
          } else {
            $scope.select(prestation);
          }
        };

        $scope.select = function(prestation) {
          $scope.formAnswers.prestations[prestation.id] = {};
        };

        $scope.deselect = function(prestation) {
          delete $scope.formAnswers.prestations[prestation.id];
        };

        $scope.open = function($event, currentPrestation) {
          $event.preventDefault();
          $event.stopPropagation();
          angular.forEach($scope.prestations, function(prestation) {
            prestation.opened = false;
          });
          currentPrestation.opened = true;
        };
      }
    };
  });
