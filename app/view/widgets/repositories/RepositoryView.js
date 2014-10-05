Ext.define("Kusari.view.widgets.repositories.RepositoryView", {
	extend: 'Ext.panel.Panel',
	xtype: 'repositoryview',
	
	title: 'Repository',
	
	requires: [
		'Kusari.view.widgets.repositories.RepositoryController',
		'Kusari.view.widgets.repositories.RepositoryViewModel'
	],
	
	controller: 'repository',
	
	viewModel: {
		type: 'repository'
	},
	
	//layout: 'fit',
	
	bodyPadding: 10,
	
	items: [
		{
			xtype: 'gridpanel',
			rowLines: true,
		    columnLines: true,
			viewConfig: {
				stripeRows: true,
			},
			forceFit: true,
			store: 'widgets.repositories.RepositoryStore',
			
			columns: [
				{
					text: 'Storage type',
					dataIndex:'storagetype',
					flex: 1
				},
				{
					text: 'size',
					dataIndex: 'size',
					renderer: Ext.util.Format.fileSize
				},
				{
		            xtype: 'widgetcolumn',
			        text: 'Progress',
					cls: 'kusari-progressbar-widget',
			        dataIndex: 'freeused',
			        widget: {
			            xtype: 'progressbarwidget',
			            textTpl: '{value:percent}'
			        }
				},
		        {
		            text: 'Protected data',
		            dataIndex: 'protecteddata',
		            renderer: Ext.util.Format.fileSize
		        },
		        {
		            text: 'Dedup ratio',
		            dataIndex: 'deputeratio',
		            renderer: function(v){
			            return v+'%';
		            }
		        },
		        {
		            text: 'Snapshots',
		            dataIndex: 'snapshots'
		        },
		        {
		            text: 'Name',
		            dataIndex:'name',
		            flex: 2
		        },
			],
		}
	]
});