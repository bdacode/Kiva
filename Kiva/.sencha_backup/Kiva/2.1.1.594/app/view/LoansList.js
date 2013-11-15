/*
 * File: app/view/LoansList.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Kiva.view.LoansList', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.loanslist',

    config: {
        ui: 'loans',
        deselectOnContainerClick: false,
        defaultType: 'loanslistitem',
        store: 'Loans',
        useComponents: true,
        refreshed: [
            '["[\\\'false\\\']"]'
        ]
    },

    onLoad: function() {
        var me = this,
            store = me.getStore();

        me.callParent(arguments);

        if (store.getCount() === 0 && store.isLoaded()) {
            me.setMasked({
                xtype: 'loadmask',
                indicator: false,
                message: 'Sorry, KIVA is having issues right now.'
            });

            me.getScrollable().getScroller().setDisabled(true);
        }
    }

});