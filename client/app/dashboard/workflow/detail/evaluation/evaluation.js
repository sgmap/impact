'use strict';

angular.module('impactApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard.workflow.detail.evaluation', {
        url: '/evaluation/:syntheseId',
        templateUrl: 'app/dashboard/workflow/detail/evaluation/evaluation.html',
        controller: 'RequestEvaluationCtrl',
        resolve: {
          sections: function(GevaService) {
            return GevaService.getSections();
          },

          model: function(GevaService) {
            return GevaService.getModel();
          },

          currentRequest: function(request) {
            return request;
          },

          listSyntheses: function(SyntheseResource, request) {
            // return SyntheseResource.query({shortId: request.shortId}).$promise;
            return SyntheseResource.query({userId: request.user._id, profileId: request.profile}).$promise;
          }
        }
      })
      .state('sectionEvaluation', {
        url: '/:sectionId',
        parent: 'dashboard.workflow.detail.evaluation',
        params: {
          questionId: null,
        },
        templateUrl: 'app/dashboard/workflow/detail/evaluation/section/section.html',
        controller: 'RequestSectionCtrl',
        resolve: {
          sectionId: function($stateParams) {
            return $stateParams.sectionId;
          },

          questionId: function($stateParams) {
            return $stateParams.questionId;
          },

          currentSynthese: function(SyntheseResource, $stateParams, request) {
            // return SyntheseResource.get({shortId: request.shortId, syntheseId: $stateParams.syntheseId}).$promise;
            return SyntheseResource.query({userId: request.user._id, profileId: request.profile, syntheseId: $stateParams.syntheseId}).$promise;
          },

          section: function($stateParams, sections, model, sectionId) {
            var section = _.find(sections, {id: sectionId});

            return {
              id: section.id,
              label: section.label,
              trajectoires: model[section.libelle]
            };
          }
        },
        authenticate: true
      });
  });
