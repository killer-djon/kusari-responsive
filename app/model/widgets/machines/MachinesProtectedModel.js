Ext.define("Kusari.model.widgets.machines.MachinesProtectedModel", {
	extend: 'Ext.data.Model',
	
	fields: [
		'_id', 'id', 
		{name: 'machine_status', type: 'bool'},
		'machine_name', 'machine_type',
		{name: 'machine_size', type: 'number'},
		{name: 'machine_sizetotal', type: 'number'},
		{name: 'machine_snapshots', type: 'int'},
		{name: 'machine_lastsnapshots', type: 'date'},
		{name: 'machine_nextsnapshots', type: 'date'},
		{name: 'machine_memory', type: 'number'},
		'machine_agentstatus', 'machine_agentversion'
	],
});