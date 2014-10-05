Ext.define('Kusari.model.widgets.taskmonitor.ActiveTaskModel', {
	extend: 'Ext.data.Model',
	
	fields: [
		'_id', 'id', 'task_name',
		'task_type', 'task_state', 
		{name: 'task_size', type: 'number'},
		{name: 'task_speed', type: 'number',},
		{name: 'task_dedupratio'}, {name: 'task_completed'},
		{name: 'task_starttime', type: 'date'},
		{name: 'task_timeelipsed', type: 'date'}
	]
});