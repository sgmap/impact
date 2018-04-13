'use strict';

angular.module('impactApp')
  .controller('WorkflowDetailCtrl', function($scope, $state, RequestResource, $cookies, $window, request) {
    $scope.request = request;
    this.token = $cookies.get('token');

    this.toggleDetail = function() {
      $scope.showDetail = !$scope.showDetail;
    };

    this.download = (request) => {
      $scope.downloadAndSetFlag(request, this.token);
    };

    this.openDeleteModal = (request) => {
      $scope.openDeleteModal(request);
    };

  });
