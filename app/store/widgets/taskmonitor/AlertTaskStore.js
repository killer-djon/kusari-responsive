Ext.define('Kusari.store.widgets.taskmonitor.AlertTaskStore', {
	extend: 'Ext.data.Store',
	
	autoLoad: false,
	autoSync: false,
	
	model: 'Kusari.model.widgets.taskmonitor.AlertTaskModel',
	
	proxy: {
		type: 'memory',
		
		reader: {
			type: 'json'
		}
	},
	
	data: [
		{alert_state: 'kusari-large-deleted deleted-state', alert_time: new Date(), alert_message: 'Events, alerts, reports and background jobs older than 4/19/2014 1:48:13 AM were deleted from database'},
		{alert_state: 'kusari-large-failed failed-state', alert_time: new Date(), alert_message: 'Transfer of backup of "E:\; I:\; J:\" on "msk0801.gusda.lan" failed for some volumes'},
		{alert_state: 'kusari-large-deleted success-state', alert_time: new Date(), alert_message: 'Backup job for msk0201 competed succesfully!'},
	]
});