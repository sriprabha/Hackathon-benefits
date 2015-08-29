angular.module('TechnologyCtrl', []).controller('TechnologyController', function($scope,$location, $http, Benefits) {
	
	$scope.companies = ["ABCD", "EFGH", "JKLM", "1231", "12128", "ABCSI"];
	$scope.clicked = false;
	$scope.moveTo = function (item) {
		$location.path( "/"+item );
	}
	$scope.reset = function() {

	}

	$scope.saveFilter = function(id) {
		console.log("ID is"+id);
		Benefits.saveIds(id)
			.success(function(data) {
				console.log("SUCCESS"+data);
			});
	};

	Benefits.getFullBenefits()
          .success(function(data) {
            console.log(data);
            $scope.benefits = data;
            
          });
});