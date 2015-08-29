angular.module('CompaniesService', [])

  .factory('Companies', ['$http',function($http) {
    return {
      get : function() {
        return $http.get('/api/companies');
      },
      createCompany : function() {
        return $http.post('/api/company', companyData);
      }
    }
  }]);