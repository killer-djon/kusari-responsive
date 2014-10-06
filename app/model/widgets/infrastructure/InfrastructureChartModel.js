Ext.define('Kusari.model.widgets.infrastructure.InfrastructureChartModel', {
	extend: 'Ext.data.Model',
	
	fields: [
		{name: 'time', type: 'string'},
		{name: 'yesterday', type: 'float'},
		{name: 'today', type: 'float'},
		{name: 'temperature', type: 'int'}
	]
});