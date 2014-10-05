/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Kusari.view.main.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    ui: 'navigation',
    

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
	removePanelHeader: false,
	
    header: {
        layout: {
            align: 'stretchmax'
        },
        //iconCls: 'exec-header-icon',
        title: {
            text: 'Kusari',
            textAlign: 'center',
            flex: 0,
            minWidth: 160
        },
        tools: [{
            type: 'gear',            
            plugins: 'responsive',
            width: 70,
            handler: 'onSwitchTool',
            margin: '0 0 0 0',
            cls: 'kusari-menu-navigation dark-menu',
            responsiveConfig: {
                'width < 800': {
                    visible: true
                },
                'width >= 800': {
                    visible: false
                }
            },
        }]
    },
    
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

	responsiveConfig: {
        "width < 800": {
            headerPosition: 'top'
        },
        "width >= 800": {
            headerPosition: 'left'
        }
    },
    
    defaults: {

        tabConfig: {

            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left',
                    flex: 0
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    flex: 1
                },
                'width < 800': {
                    visible: false
                },
                'width >= 800': {
                    visible: true
                }
            }
        }
    },
	/*listeners: {
		tabchange: 'onMainTabChange',
		beforetabchange: 'onMainTabBeforeChange'
	},*/
	

    items: [
    	{
			xtype: 'component',
	        tabConfig: {
	            hidden: true
	        },
		},
		{
			title: 'Home',	
			glyph: 0xf015,	
		},
		{
			title: 'Dashboard',
			glyph: 0xf080
		},
		{
			title: 'Task monitor',
			glyph: 0xf133,
			xtype: 'tasksmonitorview',
		},
		{
			title: 'Machines',
			glyph: 0xf0a0,
			xtype: 'machineview'
		},
		{
			title: 'Repository',
			glyph: 0xf1c0,
			xtype: 'repositoryview'
		},
		{
			title: 'Infrastructure',
			glyph: 0xf0e8
		},
		{
			title: 'Events',
			glyph: 0xf071
		},
		{
			title: 'Reports',
			glyph: 0xf1c1
		},
		{
			title: 'Settings',
			glyph: 0xf1de
		}
    ],
    
    assistiveMenu: {
    	cls: 'kusari-menu-navigation',
	    items: [
	    	{
				text: 'Home',	
				glyph: 0xf015	
			},
			{
				text: 'Dashboard',
				glyph: 0xf080
			},
			{
				text: 'Task monitor',
				glyph: 0xf133
			},
			{
				text: 'Machines',
				glyph: 0xf0a0
			},
			{
				text: 'Repository',
				glyph: 0xf1c0
			},
			{
				text: 'Infrastructure',
				glyph: 0xf0e8
			},
			{
				text: 'Events',
				glyph: 0xf071
			},
			{
				text: 'Reports',
				glyph: 0xf1c1
			},
			{
				text: 'Settings',
				glyph: 0xf1de
			}
	    ]
	    
    }
});
