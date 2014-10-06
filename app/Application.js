/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.Loader.setConfig({
    enabled: true,
    disableCaching : true,
    paths : {
    	'Ext': 'ext/src',
		'Ext.ux': 'ext/src/ux',
		'Chart' : 'app/Chart',
	}
}); 

Ext.require("Kusari.*");

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.AreaRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineSerie');
Ext.require('Chart.ux.Highcharts.BarSerie');
Ext.require('Chart.ux.Highcharts.BoxPlotSerie');
Ext.require('Chart.ux.Highcharts.BubbleSerie');
Ext.require('Chart.ux.Highcharts.ColumnRangeSerie');
Ext.require('Chart.ux.Highcharts.ColumnSerie');
Ext.require('Chart.ux.Highcharts.ErrorBarSerie');
Ext.require('Chart.ux.Highcharts.FunnelSerie');
Ext.require('Chart.ux.Highcharts.GaugeSerie');
Ext.require('Chart.ux.Highcharts.LineSerie');
Ext.require('Chart.ux.Highcharts.PieSerie');
Ext.require('Chart.ux.Highcharts.RangeSerie');
Ext.require('Chart.ux.Highcharts.ScatterSerie');
Ext.require('Chart.ux.Highcharts.SplineSerie');
Ext.require('Chart.ux.Highcharts.WaterfallSerie');
Ext.require('Chart.ux.Highcharts.PyramidSerie');

Ext.define('Kusari.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Kusari',

	views: [
		'dashboard.DashboardView',
		
		// widgets views
		'widgets.taskmonitor.TaskMonitorView',
		'widgets.machines.MachinesView',
		'widgets.infrastructure.InfrastructureView'
	],

	models: [
		'widgets.taskmonitor.ActiveTaskModel',
		'widgets.taskmonitor.AlertTaskModel',
		'widgets.machines.MachinesProtectedModel',
		'widgets.repositories.RepositoryModel',
		'widgets.infrastructure.InfrastructureViewModel',
		'widgets.infrastructure.InfrastructureChartModel'
	],

	stores: [
		'widgets.taskmonitor.ActiveTaskStore',
		'widgets.taskmonitor.AlertTaskStore',
		'widgets.machines.MachinesProtectedStore',
		'widgets.repositories.RepositoryStore',
		'widgets.infrastructure.InfrastructureViewStore',
		'widgets.infrastructure.InfrastructureChartStore'
	],
    
    launch: function () {
        // TODO - Launch the application
    }
});
