// --------------------------
// ------ NEXT AMERICA ------
// --------------------------
// Javascript loaded after DOM finish

$(function () {

	// --------------------------------------- //
	// Start Highcharts
	// --------------------------------------- //

	var default_highcharts = {
		chart: {
			animation: {
				duration: 2000
			},
			marginTop: 50,
			marginBottom: 65,
			marginLeft: 50
		},
		//colors: ['#EA9E2C', '#949D48', '#938857'],
		colors: ['#E7A337', '#BC7E35', '#193366', '#716A60', '#928D7C', '#dfdccc'],
		title: {
			enabled: true,
			text: '',
			align: 'left',
			style: {
				color: '#ccc',
				fontFamily: '"abril-text", Georgia, "Times New Roman", Times, serif',
				fontSize: '2em',
				fontStyle: 'italic',
				textShadow: false
			}
		},
		subtitle: {
			enabled: false,
			text: '',
			align: 'left',
			style: {
				color: '#727272',
				fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
				fontSize: '1.2em',
				textShadow: false
			},
			y: 40
		},
		xAxis: {
			labels: {
				style: {
					fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
					textShadow: false
				}
			}
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {
				style: {
					fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
					textShadow: false
				}
			}
		},
		tooltip: {
			shared: true,
			crosshairs: true,
			useHTML: true,
			borderColor: '#ccc'
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		labels: {
			items: {
				style: {
					fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
					textShadow: false
				}
			}
		},
		legend: {
			borderWidth: 0,
			floating: true,
			align: 'left',
			x: 0,
			y: 10,
			itemStyle: {
				fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
				fontSize: '1.1em',
				paddingRight: '20px',
				float:'left'
			},
			itemMarginTop: 0,
			itemDistance: 20,
            symbolWidth: 40,
            symbolHeight: 15
		},
		plotOptions: {
			series: {
				dataLabels: {
					style: {
						fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
						textShadow: false
					}
				}
			}
		}
	};


	// Remove Highcharts titles on mobile
	if ($(window).width() < 560 ) {
		default_highcharts['title']['style']['fontSize'] = '0em';
		default_highcharts['subtitle']['y'] = 10;
		default_highcharts['subtitle']['x'] = -10;
	}


	$.fn.waypoint.defaults = {
	  context: window,
	  continuous: true,
	  enabled: true,
	  horizontal: false,
	  offset: '75%',
	  triggerOnce: true
	}

	// For Pie Charts text
	var textargs = {
		fontSize: '1.1em',
		fontWeight: 'bold',
		fontFamily: '"franklin-gothic-urw", Verdana, Geneva, sans-serif',
		'text-anchor': 'middle'
	};

	// For Pie Placement
	var topPlacement = 60;
	var pie_positioning = [11, 38, 62, 88];

    /* ----------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------------------------------- */



	/* ----------------------------------------------- */
	/* Chart Pyramid - Population pyramid for the U.S. ------ Chart 1 */
	/* ----------------------------------------------- */

	function getPyramidData(dataname) {
		switch ( dataname ) {
			case 2060:
				return [{showInLegend: false, name: 'Female',
				data: [2.88, 2.89, 2.88, 2.87, 2.92, 3.01, 3.08, 3.12, 3.11, 3.01, 2.88, 2.82, 2.75, 2.75, 2.51, 2.19, 1.75, {color: '#193366', y: 2.68}]
				},{showInLegend: false, name: 'Male',
				data: [-3.01, -3.03, -3.02, -3.02, -3.10, -3.19, -3.25, -3.28, -3.25, -3.13, -2.97, -2.86, -2.75, -2.69, -2.35, -1.92, -1.41, {color: '#193366', y: -1.65}]
				}];
			case 2055:
				return [{showInLegend: false, name: 'Female',
				data: [2.92, 2.92, 2.89, 2.87, 2.93, 3.05, 3.13, 3.15, 3.07, 2.96, 2.90, 2.85, 2.88, 2.69, 2.42, 2.06, 1.74, {color: '#193366', y: 2.75}]
				},{showInLegend: false, name: 'Male',
				data: [-3.05, -3.06, -3.03, -3.02, -3.11, -3.23, -3.31, -3.31, -3.21, -3.07, -2.98, -2.90, -2.88, -2.59, -2.21, -1.78, -1.38, {color: '#193366', y: -1.69}]
				}];
			case 2050:
				return [{showInLegend: false, name: 'Female',
				data: [2.95, 2.93, 2.89, 2.88, 2.97, 3.10, 3.16, 3.11, 3.02, 2.98, 2.94, 2.99, 2.82, 2.60, 2.29, 2.06, 1.81, {color: '#193366', y: 2.78}]
				},{showInLegend: false, name: 'Male',
				data: [-3.08, -3.07, -3.03, -3.03, -3.15, -3.28, -3.33, -3.27, -3.15, -3.09, -3.03, -3.04, -2.77, -2.44, -2.06, -1.75, -1.43, {color: '#193366', y: -1.71}]
				}];
			case 2045:
				return [{showInLegend: false, name: 'Female',
				data: [2.96, 2.93, 2.90, 2.92, 3.02, 3.12, 3.12, 3.06, 3.05, 3.03, 3.09, 2.93, 2.73, 2.46, 2.30, 2.16, {color: '#193366', y: 1.98}, {color: '#193366', y: 2.62}]
				},{showInLegend: false, name: 'Male',
				data: [-3.09, -3.07, -3.04, -3.07, -3.20, -3.31, -3.29, -3.20, -3.17, -3.13, -3.18, -2.93, -2.63, -2.29, -2.04, -1.83, {color: '#193366', y: -1.54}, {color: '#193366', marker:{states:{hover:{enabled:false}}}, y: -1.62}]
				}];
			case 2040:
				return [{showInLegend: false, name: 'Female',
				data: [2.96, 2.94, 2.94, 2.97, 3.05, 3.09, 3.07, 3.09, 3.10, 3.18, 3.03, 2.84, 2.60, 2.48, 2.42, {color: '#193366', y: 2.39}, {color: '#193366', y: 2.01}, {color: '#193366', y: 2.30}]
				},{showInLegend: false, name: 'Male',
				data: [-3.09, -3.08, -3.08, -3.13, -3.23, -3.27, -3.23, -3.23, -3.22, -3.29, -3.07, -2.78, -2.47, -2.28, -2.15, {color: '#193366', y: -1.99}, {color: '#193366', y: -1.55}, {color: '#193366', y: -1.42}]
				}];
			case 2035:
				return [{showInLegend: false, name: 'Female',
				data: [2.98, 2.99, 3.00, 3.01, 3.02, 3.04, 3.11, 3.15, 3.26, 3.13, 2.95, 2.71, 2.63, 2.63, {color: '#193366', y: 2.69}, {color: '#193366', y: 2.43}, {color: '#193366', y: 1.85}, {color: '#193366', y: 1.94}]
				},{showInLegend: false, name: 'Male',
				data: [-3.11, -3.13, -3.15, -3.16, -3.20, -3.21, -3.26, -3.29, -3.40, -3.19, -2.93, -2.63, -2.47, -2.41, {color: '#193366', y: -2.36}, {color: '#193366', y: -2.01}, {color: '#193366', y: -1.41}, {color: '#193366', y: -1.20}]
				}];
			case 2030:
				return [{showInLegend: false, name: 'Female',
				data: [3.03, 3.06, 3.05, 2.98, 2.98, 3.09, 3.18, 3.33, 3.22, 3.06, 2.83, 2.76, 2.80, {color: '#193366', y: 2.94}, {color: '#193366', y: 2.76}, {color: '#193366', y: 2.26}, {color: '#193366', y: 1.66}, 1.56]
				},{showInLegend: false, name: 'Male',
				data: [-3.17, -3.20, -3.19, -3.14, -3.14, -3.25, -3.33, -3.48, -3.31, -3.06, -2.78, -2.65, -2.63, {color: '#193366', y: -2.66}, {color: '#193366', y: -2.40}, {color: '#193366', y: -1.85}, {color: '#193366', y: -1.27}, -0.94]
				}];
			case 2025:
				return [{showInLegend: false, name: 'Female',
				data: [3.12, 3.12, 3.04, 2.95, 3.04, 3.18, 3.38, 3.30, 3.16, 2.94, 2.89, 2.95, {color: '#193366', y: 3.15}, {color: '#193366', y: 3.03}, {color: '#193366', y: 2.58}, {color: '#193366', y: 2.05}, 1.33, 1.35]
				},{showInLegend: false, name: 'Male',
				data: [-3.26, -3.26, -3.18, -3.10, -3.21, -3.34, -3.55, -3.41, -3.18, -2.91, -2.81, -2.83, {color: '#193366', y: -2.93}, {color: '#193366', y: -2.73}, {color: '#193366', y: -2.23}, {color: '#193366', y: -1.69}, -1.00, -0.78]
				}];
			case 2020:
				return [{showInLegend: false, name: 'Female',
				data: [3.19, 3.12, 3.02, 3.04, 3.16, 3.41, 3.37, 3.26, 3.06, 3.03, 3.10, {color: '#193366', y: 3.34}, {color: '#193366', y: 3.27}, {color: '#193366', y: 2.86}, {color: '#193366', y: 2.37}, 1.65, 1.11, 1.29]
				},{showInLegend: false, name: 'Male',
				data: [-3.34, -3.26, -3.16, -3.19, -3.33, -3.59, -3.49, -3.29, -3.04, -2.97, -3.03, {color: '#193366', y: -3.17}, {color: '#193366', y: -3.03}, {color: '#193366', y: -2.55}, {color: '#193366', y: -2.05}, -1.34, -0.82, -0.71]
				}];
			case 2015:
				return [{showInLegend: false, name: 'Female',
				data: [3.20, 3.11, 3.12, 3.18, 3.42, 3.41, 3.34, 3.15, 3.15, 3.25, {color: '#193366', y: 3.52}, {color: '#193366', y: 3.48}, {color: '#193366', y: 3.09}, {color: '#193366', y: 2.63}, 1.92, 1.40, 1.05, 1.29]
				},{showInLegend: false, name: 'Male',
				data: [-3.35, -3.25, -3.26, -3.34, -3.61, -3.54, -3.38, -3.16, -3.11, -3.20, {color: '#193366', y: -3.40}, {color: '#193366', y: -3.29}, {color: '#193366', y: -2.84}, {color: '#193366', y: -2.36}, -1.65, -1.12, -0.75, -0.67]
				}];
			case 2010:
				return [{showInLegend: false, name: 'Female',
				data: [3.19, 3.22, 3.27, 3.46, 3.43, 3.39, 3.24, 3.26, 3.39, {color: '#193366', y: 3.71}, {color: '#193366', y: 3.68}, {color: '#193366', y: 3.30}, {color: '#193366', y: 2.85}, 2.14, 1.63, 1.34, 1.11, 1.20]
				},{showInLegend: false, name: 'Male',
				data: [-3.34, -3.36, -3.42, -3.64, -3.57, -3.45, -3.25, -3.23, -3.36, {color: '#193366', y: -3.61}, {color: '#193366', y: -3.54}, {color: '#193366', y: -3.10}, {color: '#193366', y: -2.64}, -1.90, -1.38, -1.03, -0.74, -0.58]
				}];
			case 2005:
				return [{showInLegend: false, name: 'Female',
				data: [3.30, 3.21, 3.50, 3.53, 3.46, 3.29, 3.33, 3.52, {color: '#193366', y: 3.88}, {color: '#193366', y: 3.84}, {color: '#193366', y: 3.47}, {color: '#193366', y: 3.05}, 2.32, 1.85, 1.60, 1.45, 1.17, 1.10]
				},{showInLegend: false, name: 'Male',
				data: [-3.44, -3.36, -3.68, -3.74, -3.63, -3.32, -3.35, -3.51, {color: '#193366', y: -3.81}, {color: '#193366', y: -3.74}, {color: '#193366', y: -3.32}, {color: '#193366', y: -2.87}, -2.12, -1.63, -1.31, -1.07, -0.73, -0.49]
				}];
			case 2000:
				return [{showInLegend: false, name: 'Female',
				data: [3.32, 3.54, 3.57, 3.49, 3.31, 3.38, 3.61, {color: '#193366', y: 4.03}, {color: '#193366', y: 4.02}, {color: '#193366', y: 3.64}, {color: '#193366', y: 3.22}, 2.48, 2.02, 1.82, 1.75, 1.55, 1.11, 1.07]
				},{showInLegend: false, name: 'Male',
				data: [-3.48, -3.71, -3.75, -3.70, -3.46, -3.45, -3.66, {color: '#193366', y: -4.00}, {color: '#193366', y: -3.96}, {color: '#193366', y: -3.53}, {color: '#193366', y: -3.08}, -2.32, -1.83, -1.56, -1.39, -1.08, -0.66, -0.44]
				}];
			case 1995:
				return [{showInLegend: false, name: 'Female',
				data: [3.59, 3.56, 3.51, 3.35, 3.38, 3.67, {color: '#193366', y: 4.19}, {color: '#193366', y: 4.24}, {color: '#193366', y: 3.84}, {color: '#193366', y: 3.36}, 2.66, 2.18, 2.01, 2.04, 1.89, 1.50, 1.09, 1.00]
				},{showInLegend: false, name: 'Male',
				data: [-3.77, -3.73, -3.69, -3.55, -3.52, -3.74, {color: '#193366', y: -4.22}, {color: '#193366', y: -4.21}, {color: '#193366', y: -3.75}, {color: '#193366', y: -3.25}, -2.53, -2.02, -1.79, -1.70, -1.45, -1.02, -0.60, -0.38]
				}];
			case 1990:
				return [{showInLegend: false, name: 'Female',
				data: [3.68, 3.53, 3.36, 3.46, 3.77, {color: '#193366', y: 4.24}, {color: '#193366', y: 4.41}, {color: '#193366', y: 4.03}, {color: '#193366', y: 3.60}, 2.82, 2.34, 2.19, 2.27, 2.22, 1.84, 1.49, 1.03, 0.88]
				},{showInLegend: false, name: 'Male',
				data: [-3.86, -3.70, -3.53, -3.66, -3.96, {color: '#193366', y: -4.31}, {color: '#193366', y: -4.40}, {color: '#193366', y: -3.98}, {color: '#193366', y: -3.52}, -2.71, -2.21, -2.00, -1.98, -1.80, -1.37, -0.96, -0.55, -0.34]
				}];
			case 1985:
				return [{showInLegend: false, name: 'Female',
				data: [3.65, 3.41, 3.48, 3.85, {color: '#193366', y: 4.43}, {color: '#193366', y: 4.55}, {color: '#193366', y: 4.23}, {color: '#193366', y: 3.74}, 3.01, 2.49, 2.35, 2.47, 2.45, 2.17, 1.83, 1.42, 0.93, 0.80]
				},{showInLegend: false, name: 'Male',
				data: [-3.83, -3.58, -3.66, -4.02, {color: '#193366', y: -4.58}, {color: '#193366', y: -4.60}, {color: '#193366', y: -4.20}, {color: '#193366', y: -3.66}, -2.91, -2.38, -2.20, -2.23, -2.12, -1.75, -1.32, -0.89, -0.49, -0.32]
				}];
			case 1980:
				return [{showInLegend: false, name: 'Female',
				data: [3.53, 3.56, 3.92, {color: '#193366', y: 4.56}, {color: '#193366', y: 4.70}, {color: '#193366', y: 4.35}, {color: '#193366', y: 3.94}, 3.14, 2.63, 2.49, 2.67, 2.69, 2.39, 2.15, 1.74, 1.30, 0.85, 0.70]
				},{showInLegend: false, name: 'Male',
				data: [-3.69, -3.73, -4.09, {color: '#193366', y: -4.73}, {color: '#193366', y: -4.78}, {color: '#193366', y: -4.34}, {color: '#193366', y: -3.88}, -3.06, -2.53, -2.36, -2.47, -2.41, -2.06, -1.72, -1.26, -0.82, -0.45, -0.30]
				}];
			case 1975:
				return [{showInLegend: false, name: 'Female',
				data: [3.65, 3.99, {color: '#193366', y: 4.68}, {color: '#193366', y: 4.85}, {color: '#193366', y: 4.49}, {color: '#193366', y: 4.01}, 3.32, 2.75, 2.64, 2.81, 2.89, 2.59, 2.33, 2.10, 1.55, 1.20, 0.80, 0.57]
				},{showInLegend: false, name: 'Male',
				data: [-3.82, -4.15, {color: '#193366', y: -4.88}, {color: '#193366', y: -5.01}, {color: '#193366', y: -4.56}, {color: '#193366', y: -3.99}, -3.25, -2.64, -2.55, -2.64, -2.66, -2.34, -2.02, -1.67, -1.13, -0.77, -0.45, -0.27]
				}];
			case 1970:
				return [{showInLegend: false, name: 'Female',
				data: [4.10, {color: '#193366', y: 4.76}, {color: '#193366', y: 4.99}, {color: '#193366', y: 4.64}, {color: '#193366', y: 4.17}, 3.37, 2.86, 2.77, 3.00, 3.06, 2.82, 2.55, 2.25, 1.90, 1.53, 1.12, 0.70, 0.46]
				},{showInLegend: false, name: 'Male',
				data: [-4.27, {color: '#193366', y: -4.95}, {color: '#193366', y: -5.18}, {color: '#193366', y: -4.79}, {color: '#193366', y: -4.22}, -3.33, -2.79, -2.67, -2.85, -2.86, -2.62, -2.33, -1.98, -1.53, -1.13, -0.77, -0.43, -0.24]
				}];
			case 1965:
				return [{showInLegend: false, name: 'Female',
				data: [{color: '#193366', y: 5.01}, {color: '#193366', y: 5.15}, {color: '#193366', y: 4.82}, {color: '#193366', y: 4.32}, 3.52, 2.95, 2.89, 3.15, 3.28, 3.00, 2.76, 2.53, 2.05, 1.84, 1.54, 1.04, 0.61, 0.35]
				},{showInLegend: false, name: 'Male',
				data: [{color: '#193366', y: -5.19}, {color: '#193366', y: -5.33}, {color: '#193366', y: -4.99}, {color: '#193366', y: -4.45}, -3.55, -2.89, -2.84, -3.04, -3.12, -2.86, -2.63, -2.36, -1.84, -1.53, -1.21, -0.77, -0.41, -0.20]
				}];
			case 1960:
				return [{showInLegend: false, name: 'Female',
				data: [{color: '#193366', y: 5.54}, {color: '#193366', y: 5.12}, {color: '#193366', y: 4.61}, 3.68, 3.08, 3.05, 3.36, 3.54, 3.29, 3.06, 2.71, 2.39, 2.07, 1.85, 1.43, 0.95, 0.51, 0.32]
				},{showInLegend: false, name: 'Male',
				data: [{color: '#193366', y: -5.72}, {color: '#193366', y: -5.29}, {color: '#193366', y: -4.76}, -3.77, -3.08, -3.00, -3.27, -3.40, -3.17, -2.98, -2.64, -2.29, -1.89, -1.63, -1.22, -0.76, -0.37, -0.20]
				}];
			case 1955:
				return [{showInLegend: false, name: 'Female',
				data: [{color: '#193366', y: 5.49}, {color: '#193366', y: 4.95}, 4.03, 3.30, 3.23, 3.60, 3.82, 3.63, 3.37, 3.09, 2.65, 2.38, 2.11, 1.78, 1.32, 0.84, 0.47, 0.27]
				},{showInLegend: false, name: 'Male',
				data: [{color: '#193366', y: -5.69}, {color: '#193366', y: -5.14}, -4.18, -3.35, -3.22, -3.53, -3.68, -3.52, -3.29, -3.03, -2.61, -2.31, -2.01, -1.64, -1.16, -0.71, -0.35, -0.19]
				}];
			case 1950:
				return [{showInLegend: false, name: 'Female',
				data: [{color: '#193366', y: 5.29}, 4.31, 3.62, 3.48, 3.87, 4.13, 3.90, 3.78, 3.39, 3.01, 2.73, 2.39, 2.00, 1.71, 1.18, 0.76, 0.42, 0.23]
				},{showInLegend: false, name: 'Male',
				data: [{color: '#193366', y: -5.49}, -4.47, -3.75, -3.53, -3.81, -3.99, -3.76, -3.67, -3.36, -3.00, -2.72, -2.40, -2.01, -1.61, -1.08, -0.66, -0.34, -0.16]
				}];
		}
	}

	var population_pyramid = jQuery.extend(true, {}, default_highcharts, {
		chart: {
			type: 'bar',
			marginTop: 120,
			marginLeft: 60
		},
		title: {
			text: 'U.S. Age Pyramid Becomes a Rectangle'
		},
		subtitle: {
			text: 'U.S. population by age group, 1950-2060'
		},
		colors: ['#ff99dd', '#7094db', '#193366'],
		tooltip: {
			formatter: function() {
				var s = '<b>Ages '+ this.x + '</b><table class="tooltip">';
				$.each(this.points, function(i, point) {
					if ( point.series.name != 'Boomers' ){
						if (point.y < 0) point.y = 0 - point.y;
						s += '<tr><td style="color:'+point.series.color+'">'+
							point.series.name+':</td>'+
							'<td style="text-align: right">'+
							Highcharts.numberFormat(point.y, 2)+'%</td></tr>';
					}
				});
				s += '</table>';
				return s;
			}
		},
		xAxis: {
			categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85+']	,
			reversed: false,
			labels: {
				step: 1
			}
		},
		yAxis: [{
			title: {
				text: null
			},
			labels: {
				formatter: function(){
					if (this.value < 0) this.value = 0 - this.value;
					return this.value + '%';
				}
			},
			min: -6,
			max: 6,
			gridLineWidth: 0
		},{
			title: {
				text: null
			},
			categories: ['MALES', 'FEMALES'],
            opposite: true,
			max: 1
		}],
		plotOptions: {
			series: {
				stacking: 'normal',
				pointWidth: 18,
				states: {
					hover: {
						enabled: false
					}
				}
			}
		},
		legend: {
			align: 'center',
			labelFormatter: function() {
				if ( this.name == 'Boomers' ){
                	return 'Baby Boomers (born 1946-1964)';
				}
            }
		},
		series: [{
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}]
	});


	$('#chartpyramid').highcharts(population_pyramid);
	var chartpyramid = $('#chartpyramid').highcharts();

	var theYear = 1950;
	var yearAnimate;
	var yeartext;

	$("#chartpyramid").waypoint( function(direction) {
		chartpyramid.series[0].remove();
		chartpyramid.colorCounter = 0;
		chartpyramid.symbolCounter = 0;
		var startData = getPyramidData(theYear);
		$.each(startData, function(index,value){
			chartpyramid.addSeries(value, false);
		});
		chartpyramid_w = $("#chartpyramid").width();
		chartpyramid.addSeries({data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], name: 'Boomers', yAxis: 1}, false);

		chartpyramid.redraw();
		yearAnimate = setInterval( updateYearData, 1400);
	});

	$('#chartpyramid').waypoint(function() {
 		clearInterval(yearAnimate);
	}, {
	  offset: function() {
		return -$(this).height();
	  },
	  triggerOnce: false
	});

	function updateYearData(year, tab){
		if (year) { theYear = parseInt(year); } else { theYear += 5; }
		if (theYear == 2065) { clearInterval(yearAnimate); $('.pyramid_toggle').trigger('click'); return false; }
		var nextData = getPyramidData(theYear);
		$('#pyramid_year').text(theYear);
		$.each(chartpyramid.series, function(seriesIndex, seriesValue){
			if (seriesIndex == 2) { return false; }
			$.each(seriesValue.data, function(dataIndex, dataValue){
				var thisDataPoint = nextData[seriesIndex]['data'][dataIndex];
				if (!thisDataPoint.color) {
					thisY = thisDataPoint;
					thisDataPoint = new Object();
					thisDataPoint.y = thisY;
					thisDataPoint.color = population_pyramid['colors'][seriesIndex];
				} else {
					thisDataPoint = thisDataPoint;
				}
				chartpyramid.series[seriesIndex].data[dataIndex].update(thisDataPoint, false);
			});
		});
		chartpyramid.redraw();
		if (!tab){
			if (theYear == 1950) {
				$('#pyramid_controls select option[value="1950"]').attr('selected', 'selected');
			} else {
				$('#pyramid_controls select option:selected').next().attr('selected', 'selected');
			}
		}
	}

	$('.pyramid_toggle').on('click', function(){
		if ( $(this).hasClass('pyramid_pause') ) {
			clearInterval(yearAnimate);
		} else {
			theYear = 1945;
			yearAnimate = setInterval( updateYearData, 1400);
		}
		$('.pyramid_toggle').toggleClass('pyramid_replay').toggleClass('pyramid_pause');
	});

	$('#pyramid_controls select').change( function(){
		clearInterval(yearAnimate);
		var year = $( "#pyramid_controls select option:selected" ).text();
		updateYearData(year, true);
	});

});