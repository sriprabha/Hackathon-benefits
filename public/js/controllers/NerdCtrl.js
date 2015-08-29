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


    function getRandomArray(max) {
        var arr = [];
        for (var i=0, t=100; i<max; i++) {
            arr.push(Math.round(Math.random() * t))
        }
        return arr;
    };
    



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
            name: 'Number of times the benefit is searched',
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
            data: getRandomArray(12)
        },{
            name: 'Men',
            data: getRandomArray(12)
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
            data: getRandomArray(12)
        }, {
            name: '31-40',
            data: getRandomArray(12)
        }, {
            name: '41-50',
            data: getRandomArray(12)
        }, {
            name: '51-60',
            data: getRandomArray(12)
        }, {
            name: '61 and above',
            data: getRandomArray(12)
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
            name: 'Number of companies offering the benefit',
            data: getRandomArray(12)
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
            data: getRandomArray(12)
        }, {
            name: 'Healthcare',
            data: getRandomArray(12)
        }, {
            name: 'Accounting and Finance',
            data: getRandomArray(12)
        }, {
            name: 'Industrial and Manufacturing',
            data: getRandomArray(12)
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
            data: getRandomArray(12)
        },{
            name: 'Offered',
            data: getRandomArray(12)
        }, ]
    });

});

