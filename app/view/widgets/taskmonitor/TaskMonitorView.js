Ext.define("Kusari.view.widgets.taskmonitor.TaskMonitorView", {
	extend: 'Ext.panel.Panel',
	
	xtype: 'tasksmonitorview',
	
	requires: [
		'Kusari.view.widgets.taskmonitor.TaskMonitorViewModel',
		'Kusari.view.widgets.taskmonitor.TaskMonitorController',
		
		'Kusari.view.widgets.taskmonitor.activetask.ActiveTaskView',
	],
	
	controller: 'tasksmonitorcontroller',
	
	viewModel: {
        type: 'tasksmonitorviewmodel'
    },
    
    title: 'Tasks Monitor',
    
    layout: 'fit',
    items: [
    	{
	    	xtype: 'tabpanel',
	    	tabBar: {
		    	layout: {
			    	pack: 'end'
		    	}	
	    	},
	    	plain: true,
	    	defaults: {
		    	bodyPadding: 10
	    	},
	    	items: [
	    		{
		    		xtype: 'activetaskview',
		    		title: 'Active task'
	    		},
	    		{
		    		title: 'Scheduled tasks',
	    		},
	    		{
		    		title: 'History'
	    		}
	    	]
    	},
    	
    ]
});
