Ext.define("Kusari.store.widgets.machines.MachinesProtectedStore", {
	extend: 'Ext.data.Store',
	autoLoad: false,
	autoSync: false,
	
	model: 'Kusari.model.widgets.machines.MachinesProtectedModel',

	proxy: {
		type: 'memory',
		
		reader: {
			type: 'json',
		}
	},
	
	data: [
		{
			machine_status: true, 
			machine_name: 'Msk0201', 
			machine_size: 1319413953331.2, 
			machine_sizetotal: 3298534883328, 
			machine_snapshots: 15, 
			machine_lastsnapshots: new Date('17/11/2014 12:00'), 
			machine_nextsnapshots: new Date('17/11/2014 12:00'),
			machine_type: 'Vmware VM',
			machine_os: 'Server 2008 R2 (64bit)',
			machine_memory: 68719476736
		},
		{
			machine_status: true, 
			machine_name: 'Msk0802', 
			machine_size: 140660178944, 
			machine_sizetotal: 461708984320, 
			machine_snapshots: 19, 
			machine_lastsnapshots: new Date('17/11/2014 12:00'), 
			machine_nextsnapshots: new Date('17/11/2014 12:00')
		},
		{
			machine_status: false, 
			machine_name: 'Msk0303', 
			machine_size: 989560464998.4, 
			machine_sizetotal: 2748779069440, 
			machine_snapshots: 3, 
			machine_lastsnapshots: new Date('17/11/2014 12:00'), 
			machine_nextsnapshots: new Date('17/11/2014 12:00')
		},
		{
			machine_status: true, 
			machine_name: 'Msk0401', 
			machine_size: 13958643712, 
			machine_sizetotal: 97710505984, 
			machine_snapshots: 11, 
			machine_lastsnapshots: new Date('17/11/2014 12:00'), 
			machine_nextsnapshots: new Date('17/11/2014 12:00')
		},
		{
			machine_status: true, 
			machine_name: 'Msk0402', 
			machine_size: 149250113536, 
			machine_sizetotal: 707595862016, 
			machine_snapshots: 21, 
			machine_lastsnapshots: new Date('17/11/2014 12:00'), 
			machine_nextsnapshots: new Date('17/11/2014 12:00')
		}
	]
});
