/*
 * File: app/store/Loans.js
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

Ext.define('Kiva.store.Loans', {
    extend: 'Ext.data.Store',

    requires: [
        'Kiva.model.Loan',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        model: 'Kiva.model.Loan',
        storeId: 'Loans',
        proxy: {
            type: 'kiva',
            reader: {
                type: 'json',
                rootProperty: 'query.results.loans'
            }
        }
    }
});