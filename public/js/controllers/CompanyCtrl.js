angular.module('CompanyCtrl', []).controller('CompanyController', function($scope, $http) {
 				$scope.tags = [
                    { text: 'just' },
                    { text: 'some' },
                    { text: 'cool' },
                    { text: 'tags' }
                ];
  console.log($http.get('/api/benefits'));
                $scope.loadTags = function(query) {
                  console.log('Done');
                  console.log($http.get('/api/benefits'));

                     return $http.get('/api/benefits');
                };

});