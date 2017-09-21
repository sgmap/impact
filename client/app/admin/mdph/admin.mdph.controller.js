'use strict';

angular.module('impactApp')
  .controller('AdminMdphCtrl', function($scope, $state, Upload, mdphs, MdphResource) {
    this.mdphs = mdphs;
    this.totalItems = this.mdphs.length;
    this.itemsPerPage = 10;
    this.currentPage = 1;

    this.setPage = function(pageNo) {
      this.currentPage = pageNo;
    };

    this.setItemsPerPage = function(num) {
      this.itemsPerPage = num;
      this.currentPage = 1;
    };

    this.selectItem = function(item) {

      console.log('item : ' + JSON.stringify(item));

      $scope.mdphDetail = item;
    };

    this.submit = function(form) {
      if (form.$invalid) {
        form.showError = true;
      } else {

        console.log('mdphDetail : ' + JSON.stringify($scope.mdphDetail));

        MdphResource.get({zipcode: $scope.mdphDetail.zipcode}).$promise.then(function(mdph) {

            mdph.name = $scope.mdphDetail.name;
            mdph.enabled = $scope.mdphDetail.enabled;
            mdph.opened = $scope.mdphDetail.opened;
            mdph.evaluate = $scope.mdphDetail.evaluate;
            MdphResource.update(mdph);

          }, function(error) {

            var mdph = {};
            mdph.zipcode = $scope.mdphDetail.zipcode;
            mdph.name = $scope.mdphDetail.name;
            mdph.enabled = $scope.mdphDetail.enabled;
            mdph.opened = $scope.mdphDetail.opened;
            mdph.evaluate = $scope.mdphDetail.evaluate;
            MdphResource.save(mdph);

          }).then(function() {
            console.log('Ajout du logo');

            Upload.upload({
                url: '/api/mdphs/' + $scope.mdphDetail.zipcode + '/logo',
                data: {file: $scope.mdphDetail.logo}
                }).then(function(resp) {
                  console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                }, function(resp) {
                  console.log('Error status: ' + resp.status);
                }, function(evt) {
                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                  console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
              });

            return $state.go('admin.mdph', {}, {reload: true});
          });
      }
    };

  });
