Ext.define("Kusari.view.widgets.machines.MachinesView", {
	extend: 'Ext.panel.Panel',
	
	xtype: 'machineview',
	
	requires: [
		'Kusari.view.widgets.machines.MachinesController',
		'Kusari.view.widgets.machines.MachinesViewModel',
		
		'Kusari.view.widgets.machines.protected.ProtectedView'
	],
	
	controller: 'machinescontroller',
	
	viewModel: {
        type: 'machinesviewmodel'
    },
    
    title: 'Machines View',
  
    items: [
    	{
	    	xtype: 'panel',
	    	layout: 'card',
	    	
	    	activeItem: 0,
	    	cls: 'machineview-panel',
	    	defaults: {
		    	bodyPadding: 10
	    	},
	    	items: [
		    	{
			    	xtype: 'tabpanel',
			    	tabBar: {
				    	layout: {
					    	pack: 'end'
				    	}	
			    	},
			    	plain: true,

			    	items: [
			    		{		    		
				    		xtype: 'machineprotectedview',
				    		title: 'Protected',
			    		},
			    		{
				    		xtype: 'panel',
				    		title: 'Not configured',
			    		},
			    		{
				    		xtype: 'panel',
				    		title: 'Do not protect',
			    		},
			    	]
		    	}		    	
		    ]
    	}
    ]
});
