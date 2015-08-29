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
      },
      recordImp : function(benefit_id) {
        return $http.post('/api/benefit/recordimp/' + benefit_id);
      },
      getCompanyCountPerBenefit : function() {
        return $http.get('/api/companycountperbenefit');
      }
    }
  }]);