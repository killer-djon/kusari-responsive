Ext.define("Kusari.model.widgets.repositories.RepositoryModel", {
	extend: 'Ext.data.Model',
	
	fields: [
		'_id', 'id', 'storagetype',
		{name: 'storagetype', type: 'string'},
        {name: 'size', type: 'number'},
        {name: 'freeused'},
        {name: 'protecteddata', type: 'number'},
        {name: 'deputeratio', type: 'int'},
        {name: 'snapshots', type: 'int'},
        {name: 'name', type: 'string'}
	],
});