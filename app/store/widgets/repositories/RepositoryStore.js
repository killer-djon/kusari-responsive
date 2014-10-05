Ext.define("Kusari.store.widgets.repositories.RepositoryStore", {
	extend: 'Ext.data.Store',
	
	autoLoad: false,
	autoSync: false,
	
	model: 'Kusari.model.widgets.repositories.RepositoryModel',
	
	proxy: {
		type: 'memory',
		
		reader: {
			type: 'json'
		}
	},
	
	data: [
		{
            storagetype: 'Distributed',
            size: 26058425578291.2,
            freeused: 0.73,
            protecteddata: 15723016277196.8,
            deputeratio: 73,
            snapshots: 139,
            name: 'P2P_storage'
		},
        {
            storagetype: 'Local',
            size: 769658139443.2,
            freeused: 0.71,
            protecteddata: 0,
            deputeratio: 71,
            snapshots: 3,
            name: 'Raid5'
        },
        {
	        storagetype: 'Network',
            size: 4507997673881.6,
            freeused: 0.72,
            protecteddata: 1429365116108.8,
            deputeratio: 72,
            snapshots: 11,
            name: 'SMB_share1'
        },
        {
	        storagetype: 'Public cloud',
            size: 1099511627776,
            freeused: 0.34,
            protecteddata: 989560464998.4,
            deputeratio: 69,
            snapshots: 2,
            name: 'Dropbox_folder1'
        }

	],
});