Ext.define("Kusari.view.widgets.infrastructure.chart.InfrastructureChartView", {
    extend: 'Ext.chart.PolarChart',

    xtype: 'infrastructurechart',
    
    store: 'widgets.infrastructure.InfrastructureChartStore',
	interactions: ['panzoom'],
	
    animation: {
        duration: 500,
        easing: 'easeIn'
    },
    legend: {
		docked: 'right',
		style: 'background: #fff',
		store: 'widgets.infrastructure.InfrastructureChartStore',
    },
    insetPadding: 50,
    innerPadding: 20,
    
    series: [
        {
            type: 'pie3d',
            field: 'temperature',
            angleField:'temperature',
            donut: 10,
            style: {
                strokeStyle: 'white',
                opacity: 0.90
            },
            highlight: {
                margin: 20
            },
            label: {
	            display: 'outside',
	            field: 'time'
            },

            tooltip: {
				trackMouse: true,
				style: 'background: #000',
				renderer: function (storeItem, item) {
			    	this.setHtml(storeItem.get('time') + ': ' + storeItem.get('temperature'));
				}
			}
        }
    ]
});