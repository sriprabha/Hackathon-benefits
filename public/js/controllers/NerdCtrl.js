angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

$('#chart1').highcharts({
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
            name: 'All searches',
            data: [90, 78, 60, 47, 32]
        }, ]
    });


$('#chart2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most searched Employee Benefits - breakdown by Gender'
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
            name: 'Men',
            data: [25, 33, 15, 14, 12]
        }, {
            name: 'Women',
            data: [62, 42, 14, 4, 11]
        }]
    });

$('#chart3').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most searched Employee Benefits - breakdown by Age group'
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
            name: '20-29',
            data: [5, 3, 4, 7, 2]
        }, {
            name: '31-40',
            data: [2, 2, 3, 2, 1]
        }, {
            name: '41-50',
            data: [3, 4, 4, 2, 5]
        }, {
            name: '51-60',
            data: [3, 4, 4, 2, 5]
        }, {
            name: '61 and above',
            data: [3, 4, 4, 2, 5]
        },
        ]
    });

$('#chart4').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Benefits most offered by Companies'
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
            name: '20-29',
            data: [5, 3, 4, 7, 2]
        }, {
            name: '31-40',
            data: [2, 2, 3, 2, 1]
        }, {
            name: '41-50',
            data: [3, 4, 4, 2, 5]
        }, {
            name: '51-60',
            data: [3, 4, 4, 2, 5]
        }, {
            name: '61 and above',
            data: [3, 4, 4, 2, 5]
        },
        ]
    });

$('#chart5').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Benefits Offered vs Benefits searched'
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
            name: 'correlate',
            data: [5, 3, 4, 7, 2]
        }, 
        ]
    });

});

