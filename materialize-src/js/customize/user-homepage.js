/**
 * Created by lenovo on 2016/10/14.
 */
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
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});
