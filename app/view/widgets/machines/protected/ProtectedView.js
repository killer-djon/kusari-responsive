Ext.define("Kusari.view.widgets.machines.protected.ProtectedView", {
	extend: 'Ext.grid.Panel',
	xtype: 'machineprotectedview',
	
	title: 'List of protected machines',
	
	forceFit: true,
	columnLines: true,
	rowLines: true,
	
	viewConfig: {
		stripeRows: true,
		getRowClass: function(){
			return 'kusari-grid-item';	
		},
		overItemCls: 'kusari-grid-item-over'
	},
	store: 'widgets.machines.MachinesProtectedStore',

	columns: [
		{
			xtype:'actioncolumn',
    		text: 'Status',
    		align: 'center',
    		items: [
    			{
	    			iconCls: 'kusari-medium-icon kusari-medium-circle-o-notch kusari-spin',
	    			tooltip: 'Status details',
    			}
    		],
    		dataIndex: 'machine_status',
		},
		{
			text: 'Machine name',
			flex: 2,
			dataIndex: 'machine_name',			
		},
		{
			text: 'Machine size',
			dataIndex: 'machine_size',
			xtype: 'numbercolumn',
			renderer: Ext.util.Format.fileSize
		},
		{
			text: 'Size total',
			dataIndex: 'machine_sizetotal',
			xtype: 'numbercolumn',
			renderer: Ext.util.Format.fileSize
		},
		{
			text: 'Snapshots',
			dataIndex: 'machine_snapshots',
			xtype: 'numbercolumn',
			format: '0'
		},
		{
			text: 'Last Snapshots',
			dataIndex: 'machine_lastsnapshots',
			xtype: 'datecolumn',
			format: 'H:i d/m/Y',
			flex: 1,
		},
		{
			text: 'Next Snapshots',
			dataIndex: 'machine_nextsnapshots',
			xtype: 'datecolumn',
			format: 'H:i d/m/Y',
			flex: 1,
		},
		{
			xtype:'actioncolumn',
    		text: 'Actions',
    		align: 'center',
    		items: [
    			{
	    			iconCls: 'fa fa-list',
	    			tooltip: 'Actions',
	    			menu: {
		    			items: [
		    				{
			    				text: 'Force'
		    				}
		    			]
	    			}
    			}
    		],
		},
	],
});