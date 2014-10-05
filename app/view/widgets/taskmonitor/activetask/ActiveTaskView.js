Ext.define("Kusari.view.widgets.taskmonitor.activetask.ActiveTaskView", {
	extend: 'Ext.panel.Panel',
	xtype: 'activetaskview',
	
	requires: [
		'Kusari.view.widgets.taskmonitor.activetask.ActiveTaskController',
		'Kusari.view.widgets.taskmonitor.activetask.ActiveTaskViewModel',
		
	],
	
	controller: 'activetask',
	
	viewModel: {
		type: 'activetask'
	},
	
	
	autoScroll: true,
	items: [
		{
	    	xtype: 'grid',
	    	margin: '0 0 10 0',
	    	cls: 'tasklist-grid taskgrid',
	    	forceFit: true,
	    	columnLines: true,
	    	rowLines: true,
	    	
	    	viewConfig: {
		    	stripeRows: true
	    	},
	    	store: 'widgets.taskmonitor.ActiveTaskStore',

	    	reference: 'taskgrid',

	    	title: 'List tasks',
	    	
	    	columns: [
	    		{
		    		text: 'Task type',
		    		dataIndex: 'task_type',
		    		flex: 2
	    		},
	    		{
		    		text: 'State',
		    		dataIndex: 'task_state',
	    		},
	    		{
		    		text: 'Size',
		    		dataIndex: 'task_size',
		    		xtype: 'numbercolumn',
		    		renderer: Ext.util.Format.fileSize
	    		},
	    		{
		    		text: 'Speed',
		    		dataIndex: 'task_speed',
		    		xtype: 'numbercolumn',
		    		renderer: Ext.util.Format.fileSize
	    		},
	    		{
	    			xtype: 'widgetcolumn',
		    		text: 'Dedup ratio',
		    		dataIndex: 'task_dedupratio',
		    		widget: {
			            xtype: 'progressbarwidget',
			            textTpl: '{value:percent}'
			        }
		    		
	    		},
	    		{
	    			xtype: 'datecolumn',
		    		text: 'Start time',
		    		dataIndex: 'task_starttime',
		    		format: 'H:i d/m/Y'
	    		},
	    		{
	    			xtype: 'widgetcolumn',
		    		text: '% Completed',
		    		dataIndex: 'task_completed',
		    		widget: {
			            xtype: 'progressbarwidget',
			            textTpl: '{value:percent}'
			        }
	    		},
	    		{
		    		text: 'Machine name',
		    		flex: 1,
		    		dataIndex: 'task_name',
		    		align: 'center'
	    		},
	    		{
		    		text: 'Time elipsed',
		    		dataIndex: 'task_timeelipsed',
		    		xtype: 'datecolumn',
		    		format: 'H:i'
	    		},
	    		{
	    			xtype:'actioncolumn',
		    		text: 'Details',
		    		align: 'center',
		    		items: [
		    			{
			    			iconCls: 'kusari-medium-list',
			    			tooltip: 'View details',
			    			handler: 'onActionTaskGridClick'
		    			}
		    		]
	    		}
	    	]
    	},
    	{
	    	xtype: 'grid',
	    	margin: '0 0 10 0',
	    	cls: 'taskalerts-grid taskgrid',
	    	forceFit: true,
	    	columnLines: true,
	    	rowLines: true,
	    	viewConfig: {		    	
		    	stripeRows: true
	    	},

	    	selType: 'rowmodel',
	    	reference: 'alertgrid',
	    	title: 'Alerts',
	    	store: 'widgets.taskmonitor.AlertTaskStore',
	    	columns: [
	    		{
		    		xtype:'templatecolumn',
		    		text: 'Level',
		    		tpl: '<div class="{alert_state} alert-icon"></div>'
	    		},
	    		{
		    		xtype: 'datecolumn',
		    		text: 'Time',
		    		dataIndex: 'alert_time',
		    		format: 'H:i d/m/Y',
		    		flex: 1
	    		},
	    		{
		    		text: 'Message',
		    		flex: 3,
		    		dataIndex: 'alert_message'
	    		}
	    	]
    	}
	]
});