angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

$('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most searched Employee Benefits'
        },
        xAxis: {
            categories: ['Maternity Leave', 'Health Insurance','Onsite Day care', 'Telecommuting', 'Paternity Leave']
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
            data: [90, 60, 55, 45, 40]
        }]
    });
});