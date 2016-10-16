/**
 * Created by lenovo on 2016/10/15.
 */

(function($){
    $(function () {
    $('#container-week').highcharts({
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: [
                'Mon',
                'Tue',
                'Wes',
                'Thu',
                'Fri',
                'Sau',
                'Sun'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        exporting:{
            enabled:false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0,29]
        }]
    });
});
    $(function () {

        $(document).ready(function () {

            // Build the chart
            $('#container-goal').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: false
                    }
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Complished',
                        y: 60
                    }, {
                        name: 'Uncomplished',
                        y: 40,
                        sliced: true,
                        selected: true
                    }]
                }]
            });
        });
    });
    $(function () {
        $('#container-month').highcharts({
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 80
            },
            title: {
                text: 'Monthly Exercise Gather',
            },
            yAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                title: null
            },
            exporting:{
                enabled:false
            },
            credits: {
                enabled: false
            },
            colorAxis: {
                min: 0,
                minColor: '#FFFFFF',
                maxColor: Highcharts.getOptions().colors[0]
            },
            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                        this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
                }
            },
            series: [{
                name: 'Sales per employee',
                borderWidth: 1,
                data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120]],
                dataLabels: {
                    enabled: true,
                    color: '#000000'
                }
            }]
        });
    });
})(jQuery); // end of jQuery name space