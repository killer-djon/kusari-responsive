Ext.define("Kusari.model.widgets.infrastructure.InfrastructureViewModel", {
	extend: 'Ext.data.Model',
	
	fields: [
        'id', 'first_column',
        {name: 'first_column', type: 'string'},
        {name: 'second_column', type: 'string'}
    ],
});