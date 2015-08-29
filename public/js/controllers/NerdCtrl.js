angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

$('#chart1').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most searched Employee Benefits'
        },
        xAxis: {
            categories: ['Health Insurance','Maternity Leave', 'Onsite Day care', 'Telecommuting', 'Paternity Leave']
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
            data: [300, 90, 60, 47, 32]
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
            categories: ['Health Insurance','Maternity Leave','Onsite Day care', 'Telecommuting', 'Paternity Leave']
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
            data: [162, 80, 70, 30, 15]
        },{
            name: 'Men',
            data: [148, 10, 10, 10, 8]
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
            categories: ['Health Insurance', 'Maternity Leave', 'Onsite Day care', 'Telecommuting', 'Paternity Leave']
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
            data: [50, 30, 20, 4, 2]
        }, {
            name: '31-40',
            data: [80, 45, 20, 3, 1]
        }, {
            name: '41-50',
            data: [90, 13, 30, 4, 5]
        }, {
            name: '51-60',
            data: [100, 2, 30, 4, 5]
        }, {
            name: '61 and above',
            data: [10, 0, 4, 2, 10]
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

