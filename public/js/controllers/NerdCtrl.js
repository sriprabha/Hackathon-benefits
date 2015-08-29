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
            text: 'Benefits offered by Companies'
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
            name: '% companies',
            data: [90, 73, 26, 17, 12]
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
            name: 'Information Technology',
            data: [88, 90, 60, 57, 25]
        }, {
            name: 'Healthcare',
            data: [90, 90, 13, 2, 10]
        }, {
            name: 'Accounting and Finance',
            data: [89, 78, 10, 5, 5]
        }, {
            name: 'Industrial and Manufacturing',
            data: [83, 67, 11, 1, 5]
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
            name: 'Searched',
            data: [162, 80, 60, 40, 15]
        },{
            name: 'Offered',
            data: [148, 60, 10, 10, 8]
        }, ]
    });

});

