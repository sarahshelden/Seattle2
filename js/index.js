// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data

chart.data = [
 {
   "City": "Seattle",
   "Date": "2019/04/11 03:00",
   "Actual": 69.28,
   "Forecast": 69.28,
   "Difference": 0
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 04:00",
   "Actual": 68.43,
   "Forecast": 67.85,
   "Difference": 0.58
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 05:00",
   "Actual": 67.6,
   "Forecast": 66.8,
   "Difference": 0.8
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 06:00",
   "Actual": 68.01,
   "Forecast": 65.58,
   "Difference": 2.43
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 07:00",
   "Actual": 66.85,
   "Forecast": 64.53,
   "Difference": 2.32
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 08:00",
   "Actual": 64.95,
   "Forecast": 62.18,
   "Difference": 2.77
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 09:00",
   "Actual": 63.18,
   "Forecast": 60.52,
   "Difference": 2.66
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 10:00",
   "Actual": 61.39,
   "Forecast": 59.52,
   "Difference": 1.87
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 11:00",
   "Actual": 59.13,
   "Forecast": 58.48,
   "Difference": 0.65
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 12:00",
   "Actual": 58.57,
   "Forecast": 57.51,
   "Difference": 1.06
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 13:00",
   "Actual": 58.09,
   "Forecast": 56.86,
   "Difference": 1.23
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 14:00",
   "Actual": 57.5,
   "Forecast": 57.35,
   "Difference": 0.15
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 15:00",
   "Actual": 58.65,
   "Forecast": 60.31,
   "Difference": -1.66
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 16:00",
   "Actual": 62.12,
   "Forecast": 64.24,
   "Difference": -2.12
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 17:00",
   "Actual": 64.41,
   "Forecast": 68.11,
   "Difference": -3.7
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 18:00",
   "Actual": 67.24,
   "Forecast": 71.52,
   "Difference": -4.28
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 19:00",
   "Actual": 69.54,
   "Forecast": 74.44,
   "Difference": -4.9
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 20:00",
   "Actual": 71.34,
   "Forecast": 76.07,
   "Difference": -4.73
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 21:00",
   "Actual": 72.66,
   "Forecast": 77.41,
   "Difference": -4.75
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 22:00",
   "Actual": 72.9,
   "Forecast": 78.49,
   "Difference": -5.59
 },
 {
   "City": "Seattle",
   "Date": "2019/04/11 23:00",
   "Actual": 72.74,
   "Forecast": 78.89,
   "Difference": -6.15
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 00:00",
   "Actual": 70.78,
   "Forecast": 78.23,
   "Difference": -7.45
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 01:00",
   "Actual": 70.23,
   "Forecast": 76.9,
   "Difference": -6.67
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 02:00",
   "Actual": 68.85,
   "Forecast": 74.43,
   "Difference": -5.58
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 03:00",
   "Actual": 66.48,
   "Forecast": 72.57,
   "Difference": -6.09
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 04:00",
   "Actual": 65.83,
   "Forecast": 70.35,
   "Difference": -4.52
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 05:00",
   "Actual": 64.7,
   "Forecast": 68.26,
   "Difference": -3.56
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 06:00",
   "Actual": 62.69,
   "Forecast": 66.21,
   "Difference": -3.52
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 07:00",
   "Actual": 61.06,
   "Forecast": 64.53,
   "Difference": -3.47
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 08:00",
   "Actual": 60.06,
   "Forecast": 63.11,
   "Difference": -3.05
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 09:00",
   "Actual": 59.79,
   "Forecast": 61.62,
   "Difference": -1.83
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 10:00",
   "Actual": 58.22,
   "Forecast": 60.39,
   "Difference": -2.17
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 11:00",
   "Actual": 57.46,
   "Forecast": 58.96,
   "Difference": -1.5
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 12:00",
   "Actual": 56.71,
   "Forecast": 57.93,
   "Difference": -1.22
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 13:00",
   "Actual": 55.48,
   "Forecast": 57.39,
   "Difference": -1.91
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 14:00",
   "Actual": 54.84,
   "Forecast": 57.24,
   "Difference": -2.4
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 15:00",
   "Actual": 58.72,
   "Forecast": 59.02,
   "Difference": -0.3
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 16:00",
   "Actual": 62.47,
   "Forecast": 62.82,
   "Difference": -0.35
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 17:00",
   "Actual": 65.29,
   "Forecast": 67.12,
   "Difference": -1.83
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 18:00",
   "Actual": 67.98,
   "Forecast": 70.77,
   "Difference": -2.79
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 19:00",
   "Actual": 70.27,
   "Forecast": 73.97,
   "Difference": -3.7
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 20:00",
   "Actual": 71.93,
   "Forecast": 76.12,
   "Difference": -4.19
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 21:00",
   "Actual": 72.01,
   "Forecast": 77.37,
   "Difference": -5.36
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 22:00",
   "Actual": 71.37,
   "Forecast": 77.51,
   "Difference": -6.14
 },
 {
   "City": "Seattle",
   "Date": "2019/04/12 23:00",
   "Actual": 71.38,
   "Forecast": 77.24,
   "Difference": -5.86
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 00:00",
   "Actual": 72.54,
   "Forecast": 77.19,
   "Difference": -4.65
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 01:00",
   "Actual": 71.71,
   "Forecast": 76.05,
   "Difference": -4.34
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 02:00",
   "Actual": 69.33,
   "Forecast": 73.71,
   "Difference": -4.38
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 03:00",
   "Actual": 66.28,
   "Forecast": 71.66,
   "Difference": -5.38
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 04:00",
   "Actual": 63.92,
   "Forecast": 69.83,
   "Difference": -5.91
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 05:00",
   "Actual": 62.94,
   "Forecast": 67.75,
   "Difference": -4.81
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 06:00",
   "Actual": 62.64,
   "Forecast": 65.71,
   "Difference": -3.07
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 07:00",
   "Actual": 61.06,
   "Forecast": 64.7,
   "Difference": -3.64
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 08:00",
   "Actual": 60.05,
   "Forecast": 63.18,
   "Difference": -3.13
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 09:00",
   "Actual": 58.49,
   "Forecast": 61.67,
   "Difference": -3.18
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 10:00",
   "Actual": 57.26,
   "Forecast": 60.17,
   "Difference": -2.91
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 11:00",
   "Actual": 56.44,
   "Forecast": 58.9,
   "Difference": -2.46
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 12:00",
   "Actual": 56.09,
   "Forecast": 58.08,
   "Difference": -1.99
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 13:00",
   "Actual": 55.07,
   "Forecast": 58.04,
   "Difference": -2.97
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 14:00",
   "Actual": 54.78,
   "Forecast": 58.52,
   "Difference": -3.74
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 15:00",
   "Actual": 57.06,
   "Forecast": 61.21,
   "Difference": -4.15
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 16:00",
   "Actual": 63.12,
   "Forecast": 65.1,
   "Difference": -1.98
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 17:00",
   "Actual": 68.66,
   "Forecast": 69.82,
   "Difference": -1.16
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 18:00",
   "Actual": 71.08,
   "Forecast": 73.74,
   "Difference": -2.66
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 19:00",
   "Actual": 73.8,
   "Forecast": 77.4,
   "Difference": -3.6
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 20:00",
   "Actual": 76.05,
   "Forecast": 79.44,
   "Difference": -3.39
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 21:00",
   "Actual": 77.1,
   "Forecast": 80.55,
   "Difference": -3.45
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 22:00",
   "Actual": 76.78,
   "Forecast": 80.67,
   "Difference": -3.89
 },
 {
   "City": "Seattle",
   "Date": "2019/04/13 23:00",
   "Actual": 75.15,
   "Forecast": 79.66,
   "Difference": -4.51
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 00:00",
   "Actual": 75.31,
   "Forecast": 78.17,
   "Difference": -2.86
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 01:00",
   "Actual": 73.56,
   "Forecast": 76.4,
   "Difference": -2.84
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 02:00",
   "Actual": 70.65,
   "Forecast": 73.92,
   "Difference": -3.27
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 03:00",
   "Actual": 66.83,
   "Forecast": 71.83,
   "Difference": -5
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 04:00",
   "Actual": 64.79,
   "Forecast": 69.73,
   "Difference": -4.94
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 05:00",
   "Actual": 62.96,
   "Forecast": 67.64,
   "Difference": -4.68
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 06:00",
   "Actual": 62.5,
   "Forecast": 65.68,
   "Difference": -3.18
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 07:00",
   "Actual": 57.49,
   "Forecast": 60.19,
   "Difference": -2.7
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 08:00",
   "Actual": 56.47,
   "Forecast": 58.99,
   "Difference": -2.52
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 09:00",
   "Actual": 55.96,
   "Forecast": 58.04,
   "Difference": -2.08
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 10:00",
   "Actual": 55.25,
   "Forecast": 57.01,
   "Difference": -1.76
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 11:00",
   "Actual": 55.21,
   "Forecast": 55.68,
   "Difference": -0.47
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 12:00",
   "Actual": 54.03,
   "Forecast": 54.9,
   "Difference": -0.87
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 13:00",
   "Actual": 53.25,
   "Forecast": 54.71,
   "Difference": -1.46
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 14:00",
   "Actual": 52.62,
   "Forecast": 55.01,
   "Difference": -2.39
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 15:00",
   "Actual": 53.94,
   "Forecast": 56.4,
   "Difference": -2.46
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 16:00",
   "Actual": 56.58,
   "Forecast": 59.29,
   "Difference": -2.71
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 17:00",
   "Actual": 59.42,
   "Forecast": 63.26,
   "Difference": -3.84
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 18:00",
   "Actual": 61.94,
   "Forecast": 66.51,
   "Difference": -4.57
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 19:00",
   "Actual": 63.4,
   "Forecast": 69.57,
   "Difference": -6.17
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 20:00",
   "Actual": 64.89,
   "Forecast": 71.5,
   "Difference": -6.61
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 21:00",
   "Actual": 66.19,
   "Forecast": 72.35,
   "Difference": -6.16
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 22:00",
   "Actual": 66.48,
   "Forecast": 71.71,
   "Difference": -5.23
 },
 {
   "City": "Seattle",
   "Date": "2019/04/14 23:00",
   "Actual": 66.31,
   "Forecast": 70.62,
   "Difference": -4.31
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 00:00",
   "Actual": 65.94,
   "Forecast": 69.13,
   "Difference": -3.19
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 01:00",
   "Actual": 63.86,
   "Forecast": 67.81,
   "Difference": -3.95
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 02:00",
   "Actual": 60.91,
   "Forecast": 65.06,
   "Difference": -4.15
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 03:00",
   "Actual": 57.49,
   "Forecast": 62.98,
   "Difference": -5.49
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 04:00",
   "Actual": 56.33,
   "Forecast": 60.73,
   "Difference": -4.4
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 05:00",
   "Actual": 55.46,
   "Forecast": 59.4,
   "Difference": -3.94
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 06:00",
   "Actual": 55.57,
   "Forecast": 58.4,
   "Difference": -2.83
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 07:00",
   "Actual": 55.97,
   "Forecast": 57.67,
   "Difference": -1.7
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 08:00",
   "Actual": 55.59,
   "Forecast": 57.21,
   "Difference": -1.62
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 09:00",
   "Actual": 55.78,
   "Forecast": 56.89,
   "Difference": -1.11
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 10:00",
   "Actual": 55.62,
   "Forecast": 56.69,
   "Difference": -1.07
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 11:00",
   "Actual": 55.76,
   "Forecast": 56.65,
   "Difference": -0.89
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 12:00",
   "Actual": 55.87,
   "Forecast": 56.96,
   "Difference": -1.09
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 13:00",
   "Actual": 55.87,
   "Forecast": 57.03,
   "Difference": -1.16
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 14:00",
   "Actual": 55.82,
   "Forecast": 57,
   "Difference": -1.18
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 15:00",
   "Actual": 56.98,
   "Forecast": 57.48,
   "Difference": -0.5
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 16:00",
   "Actual": 57.85,
   "Forecast": 58.54,
   "Difference": -0.69
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 17:00",
   "Actual": 58.93,
   "Forecast": 60.15,
   "Difference": -1.22
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 18:00",
   "Actual": 60.26,
   "Forecast": 61.99,
   "Difference": -1.73
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 19:00",
   "Actual": 60.92,
   "Forecast": 63.55,
   "Difference": -2.63
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 20:00",
   "Actual": 61.84,
   "Forecast": 66.03,
   "Difference": -4.19
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 21:00",
   "Actual": 63,
   "Forecast": 67.86,
   "Difference": -4.86
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 22:00",
   "Actual": 66.38,
   "Forecast": 69.39,
   "Difference": -3.01
 },
 {
   "City": "Seattle",
   "Date": "2019/04/15 23:00",
   "Actual": 63.37,
   "Forecast": 70.05,
   "Difference": -6.68
 }];
 
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";


var legend = new am4charts.Legend();
legend.isMeasured = true;
legend.y = am4core.percent(100);
legend.verticalCenter = "bottom";
legend.parent = chart.chartContainer;
legend.data = [{
"name": "Difference of Actual Weather",
"fill": chart.colors.getIndex(0)
}];                          

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.startLocation = 0.5;
dateAxis.endLocation = 0.5;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Difference";
series.dataFields.dateX = "Date";
series.strokeWidth = 3;
series.tooltipText = "{valueY.value}";
series.fillOpacity = 0.1;

// Create a range to change stroke for values below 0
var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = -1000;
range.contents.stroke = chart.colors.getIndex(4);
range.contents.fill = range.contents.stroke;
range.contents.strokeOpacity = 0.7;
range.contents.fillOpacity = 0.1;

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.scrollbarX = new am4core.Scrollbar();