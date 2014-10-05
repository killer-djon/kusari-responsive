/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

 
Ext.define('Kusari.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickButton: function () {
        
    },
    
    onSwitchTool: function (e) {
        var menu = this.menu;

        if (!menu) {
            menu = this.getView().assistiveMenu;
            this.menu = menu = new Ext.menu.Menu(menu);
        }

        menu.showAt(e.getXY());
    },
    /*
    onMainTabBeforeChange: function(tabPanel, newCard, oldCard){
	    newCard.setVisible(false);
    },
    
    onMainTabChange: function(tabPanel, newCard, oldCard){
	 	
		newCard.getEl().slideIn('r', {
			duration: 1000,
		});
    }*/
});
