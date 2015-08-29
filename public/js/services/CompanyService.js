angular.module('CompanyService', [])

 .factory('CompanyService', ['$http',function($http) {
 	return {
 		get : function() {
 		return $http.get('/api/compan');
 	},
 		create : function(todoData) {
 		return $http.post('/api/todos', todoData);
 	},
 		delete : function(id) {
 		return $http.delete('/api/todos/' + id);
 	}
 	}
 }]);