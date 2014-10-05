Ext.define('Kusari.model.widgets.taskmonitor.AlertTaskModel', {
	extend: 'Ext.data.Model',
	
	fields: [
		'_id', 'id', 
		{name: 'alert_time', type: 'date'},
		'alert_message', 'alert_state'
	]
});