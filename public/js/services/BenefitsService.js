angular.module('BenefitsService', [])

  .factory('Benefits', ['$http',function($http) {
    return {
      get : function() {
        return $http.get('/api/benefits');
      }
    }
  }]);