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
	}
}); 

Ext.require("Kusari.*");

Ext.define('Kusari.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Kusari',

	views: [
		'dashboard.DashboardView',
		
		// widgets views
		'widgets.taskmonitor.TaskMonitorView',
		'widgets.machines.MachinesView',
	],

	models: [
		'widgets.taskmonitor.ActiveTaskModel',
		'widgets.taskmonitor.AlertTaskModel',
		'widgets.machines.MachinesProtectedModel',
		'widgets.repositories.RepositoryModel'
	],

	stores: [
		'widgets.taskmonitor.ActiveTaskStore',
		'widgets.taskmonitor.AlertTaskStore',
		'widgets.machines.MachinesProtectedStore',
		'widgets.repositories.RepositoryStore'
	],
    
    launch: function () {
        // TODO - Launch the application
    }
});
