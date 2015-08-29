angular.module('TechnologyCtrl', []).controller('TechnologyController', function($scope,$location, $http, Benefits) {
	
	var filters =[];
	var indices = [];
	$scope.companies = ["ABCD", "EFGH", "JKLM", "1231", "12128", "ABCSI"];
	$scope.clicked = false;

	
	
	$scope.moveTo = function (item) {
		$location.path( "/"+item );
	}
	$scope.reset = function() {

	}

	$scope.isSelected = function(index) {
		return indices.indexOf(index)> -1;
	}

	$scope.saveFilter = function(row, index) {

		var ind=indices.indexOf(index);
		var fil=filters.indexOf(row);
		if(ind > -1) {
			indices.splice(ind,1);
			filters.splice(fil,1);
		}
		else {
			filters.push(row);
			indices.push(index);

		}
		$scope.selected = indices.length>0;
		
		
		
		
		Benefits.saveIds(filters)
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