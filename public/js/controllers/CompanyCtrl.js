angular.module('CompanyCtrl', []).controller('CompanyController', function($scope, $http, Benefits) {
        Benefits.get()
          .success(function(data) {
            console.log(data);
            $scope.tags = data;
            $scope.loading = false;
          });

        $scope.loadTags = function(query) {
          return $http.get('/api/benefits');
        };

});