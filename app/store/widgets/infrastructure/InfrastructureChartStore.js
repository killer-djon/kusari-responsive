Ext.define('Kusari.store.widgets.infrastructure.InfrastructureChartStore', {
	extend : 'Ext.data.Store',
	
	autoLoad : true,
	autoSync: false,
	
	model: 'Kusari.model.widgets.infrastructure.InfrastructureChartModel',
  
	proxy: {
		
		type: 'ajax',
		url: "/resources/Chart/getter/examples.json",
		
		reader: {
			type: 'json',
			rootProperty: 'rows'
		}
	},
	
});
