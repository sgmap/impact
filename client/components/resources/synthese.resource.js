'use strict';

angular.module('impactApp')
  .factory('SyntheseResource', function($resource) {
    var Synthese = $resource('/api/syntheses/:id', {
      id: '@_id'
    },
    {
      update: {
        method: 'PUT'
      },
      save: {
        method: 'POST'
      },
    });
    return Synthese;
  });
