'use strict';

angular.module('impactApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('partenaire.pj', {
        url: '/:shortId',
        templateUrl: 'app/partenaire/pj/pj.html',
        controller: 'PieceJointeCtrl',
        resolve: {
          request: function($stateParams, RequestResource) {
            return RequestResource.getPartenaire({shortId: $stateParams.shortId});
          }
        }
      });
  });
