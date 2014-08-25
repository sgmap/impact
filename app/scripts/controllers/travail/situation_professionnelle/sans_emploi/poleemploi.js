'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:PoleEmploiCtrl
 * @description
 * # PoleEmploiCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('PoleEmploiCtrl', function($scope, $state) {

    $scope.subtitle = $scope.estRepresentant() ?
      'Sa situation' : 'Votre situation';

    if (angular.isUndefined($scope.sectionModel.poleEmploi)) {
      $scope.sectionModel.situationSansEmploi = {
        situations: {},
        detail: ''
      };
    }

    $scope.model = $scope.sectionModel.situationSansEmploi;
    $scope.question = {
      model: 'situations',
      answers: [
        {
          label: 'Inscrit à pôle emploi',
          model: 'poleEmploi'
        },
        {
          label: 'En formation continue',
          model: 'formation'
        },
        {
          label: 'Etudiant',
          model: 'etudiant'
        }
      ]
    };

    $scope.nextStep = function() {
      $scope.sections[1].isEnabled = true;
      $state.go('^.^.^.projet_professionnel.description');
    };
  });
