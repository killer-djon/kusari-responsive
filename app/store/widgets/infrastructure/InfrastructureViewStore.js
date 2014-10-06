Ext.define("Kusari.store.widgets.infrastructure.InfrastructureViewStore", {
	extend: 'Ext.data.Store',
	
	autoLoad: false,
	autoSync: false,
	
	model: 'Kusari.model.widgets.infrastructure.InfrastructureViewModel',
	
	proxy: {
		type: 'memory',
		
		reader: {
			type: 'json'
		}
	},
	
	data: [
		{
            first_column: 'Total physical hosts',
            second_column: '11'
        },

        {
            first_column: 'Total protected VMs',
            second_column: '43'
        },

        {
            first_column: 'Num of storage nodes in a cluster',
            second_column: '101'
        },

        {
            first_column: 'Average disk size on nodes',
            second_column: '421Gb'
        },

        {
            first_column: 'Average free disk space on nodes',
            second_column: '69.081%'
        },
	]
});