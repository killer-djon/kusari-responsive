Ext.define('Kusari.store.widgets.taskmonitor.ActiveTaskStore', {
	extend: 'Ext.data.Store',
	
	autoLoad: false,
	autoSync: false,
	
	model: 'Kusari.model.widgets.taskmonitor.ActiveTaskModel',
	
	proxy: {
		type: 'memory',
		
		reader: {
			type: 'json'
		}
	},
	
	data: [
		{
			task_type: 'Full backup', task_state: 'run', task_size: 1319413953331.2, task_speed: 15728640, task_dedupratio: 0.73, 
			task_starttime: new Date(), task_completed: 0.30, task_name: 'Msk0801', task_timeelipsed: new Date(),
		},
		{
			task_type: 'Snapshot backup', task_state: 'paused', task_size: 140660178944, task_speed: 0, task_dedupratio: 0.71, 
			task_starttime: new Date(), task_completed: 0.17, task_name: 'Msk0802', task_timeelipsed: new Date(),
		},
		{
			task_type: 'Restore', task_state: 'error', task_size: 989560464998.4, task_speed: 0, task_dedupratio: 0.72, 
			task_starttime: new Date(), task_completed: 0.24, task_name: 'Msk0303', task_timeelipsed: new Date(),
		},
		{
			task_type: 'Snapshot backup', task_state: 'Scheduled', task_size: 13958643712, task_speed: 0, task_dedupratio: 0.69, 
			task_starttime: new Date(), task_completed: 0, task_name: 'Msk0401', task_timeelipsed: '',
		},
		{
			task_type: 'Snapshot backup', task_state: 'Completed', task_size: 13958643712, task_speed: 15728640, task_dedupratio: 0.69, 
			task_starttime: new Date(), task_completed: 1, task_name: 'Msk0402', task_timeelipsed: new Date(),
		}
	]
});