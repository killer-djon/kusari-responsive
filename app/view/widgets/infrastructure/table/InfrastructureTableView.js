Ext.define("Kusari.view.widgets.infrastructure.table.InfrastructureTableView", {
	extend: 'Ext.grid.Panel',
	
	xtype: 'infrastructuretable',
    
    rowLines: true,
    columnLines: true,
    
    viewConfig: {
        stripeRows: true,
    },
    forceFit: true,
    
    columns: [
        {
            dataIndex:'first_column',
            flex: 1,
            text: 'Storage status'
        },
        {
            dataIndex: 'second_column',
            text: 'Value'
        }
    ],
	store: 'widgets.infrastructure.InfrastructureViewStore'
});