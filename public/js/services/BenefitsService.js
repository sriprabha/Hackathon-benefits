angular.module('BenefitsService', [])

  .factory('Benefits', ['$http',function($http) {
    return {
      get : function() {
        return $http.get('/api/benefits');
      },
      getFullBenefits : function() {
        return $http.get('/api/fullbenefits');
      },
      saveIds: function(ids) {
        return $http.post('/api/save', ids);
      }
    }
  }]);