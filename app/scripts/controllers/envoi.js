'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:EnvoiCtrl
 * @description
 * # EnvoiCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('EnvoiCtrl', function($scope, isAdult, $filter, getDroits, getDocuments) {
    $scope.typeEnvoi = 'numerique';

    $scope.justificatifStr = $scope.estRepresentant() ?
      'de votre justificatif d\'identité ainsi que celui de la personne handicapée' :
      'de votre justificatif d\'identité';

    $scope.showAdult = isAdult();

    var computePrestations = function() {
      var prestations = [];

      angular.forEach(getDroits($scope.$storage, $scope.isAdult), function(category) {
        angular.forEach(category.prestations, function(prestation) {
          if (angular.isDefined(prestation.shouldHave) && prestation.shouldHave()) {
            prestation.type = category.type;
            prestations.push(prestation);
          }
        });
      });

      var mesPrestations = $scope.$storage.vie.answers.situation.answers.mesPrestations;
      angular.forEach(mesPrestations, function(droit) {
        var found = false;

        angular.forEach(prestations, function(prestation) {
          if (prestation.id === droit.id) {
            prestation.description = getDescription(droit);
            found = true;
          }
        });

        if (!found) {
          var droitObj = { label: droit.label, description: getDescription(droit), type: 'presta-autre'};
          prestations.push(droitObj);
        }
      });

      return prestations;
    };

    var getDescription = function(droit) {
      if (!droit.date) {
        return 'Etude du renouvellement de votre droit.';
      }
      return 'Etude du renouvellement de votre droit se terminant le ' + $filter('date')(droit.date, 'dd/MM/yyyy') + '.';
    };

    $scope.prestations = computePrestations();
    $scope.documents = getDocuments($scope.$storage, $scope.estRepresentant, $scope.isAdult, $scope.getName());
  });
