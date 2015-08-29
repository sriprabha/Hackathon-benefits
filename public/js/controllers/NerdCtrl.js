angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http, Benefits) {

  Benefits.getFullBenefits()
    .success(function(data) {

      $scope.benefitimpressions = [];
      $scope.benefittexts = [];

      for(var benefit in data) {
        $scope.benefitimpressions[benefit] = data[benefit].impression;
        $scope.benefittexts[benefit] = data[benefit].text;
      }
    });


$('#chart1').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most searched Employee Benefits'
        },
        xAxis: {
            categories: $scope.benefittexts
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of searches'
            }
        },
        legend: {
            reversed: true
        },

        series: [{
            name: 'All searches',
            data: $scope.benefitimpressions
        }]
    });


$('#chart2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most searched Employee Benefits - breakdown by Gender'
        },
        xAxis: {
            categories: $scope.benefittexts
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of searches'
            }
        },
        legend: {
            reversed: true
        },
        
        series: [{
            name: 'Women',
            data: $scope.benefitimpressions
        },{
            name: 'Men',
            data: $scope.benefitimpressions
        }, ]
    });

$('#chart3').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most searched Employee Benefits - breakdown by Age group'
        },
        xAxis: {
            categories: $scope.benefittexts
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of searches'
            }
        },
        legend: {
            reversed: true
        },

        series: [{
            name: '20-29',
            data: $scope.benefitimpressions
        }, {
            name: '31-40',
            data: $scope.benefitimpressions
        }, {
            name: '41-50',
            data: $scope.benefitimpressions
        }, {
            name: '51-60',
            data: $scope.benefitimpressions
        }, {
            name: '61 and above',
            data: $scope.benefitimpressions
        },
        ]
    });

$('#chart4').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Benefits offered by Companies'
        },
        xAxis: {
            categories: $scope.benefittexts
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of searches'
            }
        },
        legend: {
            reversed: true
        },

        series: [{
            name: '% companies',
            data: $scope.benefitimpressions
        }, 
        ]
    });

$('#chart5').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Benefits offered by Companies - Breakdown by sector'
        },
        xAxis: {
             categories: $scope.benefittexts
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of searches'
            }
        },
        legend: {
            reversed: true
        },

        series: [{
            name: 'Information Technology',
            data: $scope.benefitimpressions
        }, {
            name: 'Healthcare',
            data: $scope.benefitimpressions
        }, {
            name: 'Accounting and Finance',
            data: $scope.benefitimpressions
        }, {
            name: 'Industrial and Manufacturing',
            data: $scope.benefitimpressions
        }, 
        ]
    });

$('#chart6').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Benefits Offered vs Benefits searched'
        },
        xAxis: {
            categories: $scope.benefittexts
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of searches'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

       series: [{
            name: 'Searched',
            data: $scope.benefitimpressions
        },{
            name: 'Offered',
            data: $scope.benefitimpressions
        }, ]
    });

});

