Ext.define("Kusari.view.dashboard.DashboardView", {
	extend: 'Ext.panel.Panel',
	
	requires: [
		'Kusari.view.dashboard.DashboardController',
		'Kusari.view.dashboard.DashboardViewModel'
	],
	
	controller: 'viewmodel.dashboard'
});