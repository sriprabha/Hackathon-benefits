angular.module('TechnologyCtrl', []).controller('TechnologyController', function($scope,$location, $http, Benefits) {
	
	var filters =[];
	var indices = [];
	
	$scope.clicked = false;
	$scope.showMessage = true;

	
	
	$scope.moveTo = function (item) {
		$location.path( "/"+item );
	}
	$scope.reset = function() {
		indices = [];
		filters = [];
		$scope.selected = false;
		Benefits.saveIds(filters)
			.success(function(data) {
				$scope.companies = data;
				$scope.showMessage = true;
		});
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
			$scope.showMessage = false;
			filters.push(row);
			indices.push(index);

		}
		$scope.selected = indices.length>0;
		
		
		
		
		Benefits.saveIds(filters)
			.success(function(data) {
				console.log("SUCCESS"+data);
				$scope.companies = data;


			});
	};

	Benefits.getFullBenefits()
          .success(function(data) {
            console.log(data);
            $scope.benefits = data;
            
          });
});