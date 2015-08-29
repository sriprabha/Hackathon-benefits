angular.module('CompanyCtrl', []).controller('CompanyController', function($scope, $http, Benefits, Companies) {
        Benefits.get()
          .success(function(data) {
            console.log(data);
            $scope.tags = data;
            $scope.loading = false;
          });


        $scope.submitted=false;
        $scope.loadTags = function(query) {
          return $http.get('/api/benefits');
        };

        $scope.submit = function() {

        	var companyObj = {
        		name: $scope.name,
        		url: ("https://www.linkedin.com/company/").concat($scope.name),
        		benefits: $scope.tags
        	}
        	Companies.createCompany(companyObj)
        		.success(function(data){
        			console.log("Success");
        			$scope.submitted=true;
        		});
        };


});