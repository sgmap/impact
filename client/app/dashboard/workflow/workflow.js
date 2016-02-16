'use strict';

angular.module('impactApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard.workflow', {
        url: '/workflow',
        templateUrl: 'app/dashboard/workflow/workflow.html',
        controller: 'WorkflowCtrl',
        redirectTo: {
          url: 'dashboard.workflow.list',
          params: {
            status: 'emise'
          }
        },
        resolve: {
          requestCountByStatus: function(MdphResource, currentMdph) {
            return MdphResource.queryTotalRequestsCount({zipcode: currentMdph.zipcode}).$promise.then(function(result) {
              return _.indexBy(result, '_id');
            });
          },

          visibleBanettes: function(banettes) {
            return _.filter(banettes, function(banette) {
              return banette.id !== 'hidden';
            });
          },

          visibleBanettesWithCount: function(visibleBanettes, requestCountByStatus) {
            visibleBanettes.forEach(function(banette) {
              banette.statuses.forEach(function(status) {
                status.count = requestCountByStatus[status.id] && requestCountByStatus[status.id].count;
              });
            });

            return visibleBanettes;
          }
        },
        authenticate: true
      });
  });