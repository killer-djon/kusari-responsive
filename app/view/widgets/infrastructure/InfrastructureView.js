Ext.define("Kusari.view.widgets.infrastructure.InfrastructureView", {
	extend: 'Ext.panel.Panel',
	
	xtype: 'infrastructureview',
	title: 'Infrastructure view',
    
    requires: [
    	'Kusari.view.widgets.infrastructure.InfrastructureController',
    	'Kusari.view.widgets.infrastructure.InfrastructureViewModel',
    	
    	'Kusari.view.widgets.infrastructure.table.InfrastructureTableView',
    	'Kusari.view.widgets.infrastructure.chart.InfrastructureChartView'
    ],
    
    controller: 'infrastructure',
    
    viewModel: {
	    type: 'infrastructure'
    },
    
    layout: 'border',
    
    bodyPadding: 10,
    items: [
    	{
	    	xtype: 'infrastructuretable',
	    	title: 'List infrastructure',
	    	region: 'north',
	    	height: '40%',
	    	split: true
    	},
    	{
	    	xtype: 'infrastructurechart',
    		title: 'Infrastructure Chart',
    		region: 'center'
    	}
    ]
});