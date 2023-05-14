/*=========================================================================================
  File Name: custom.js
  Description: Load JS from NPM and custom general javascript function

  ----------------------------------------------------------------------------------------
    Do npm install and put require inside here. settle. dont forget to run npm run prod, hafiz
==========================================================================================*/

try {

    window.$ = window.jQuery = require('jquery');
    window.Swal = require('sweetalert2');
    window.flatpickr = require('flatpickr');
    window.toastr = require('toastr');
    window.Chart = require('chart.js/auto');
    window.moment = require('moment');

    /*-- Datatables Jquery with all extension --*/
    window.JSZip = require('jszip');
    require('datatables.net-bs5');
    require('datatables.net-buttons/js/dataTables.buttons');
    require('datatables.net-buttons/js/buttons.flash');
    require('datatables.net-buttons/js/buttons.html5');
    require('datatables.net-buttons/js/buttons.print');
    require('datatables.net-buttons/js/buttons.colVis');
    require('datatables.net-autofill');
    require('datatables.net-colreorder');
    require('datatables.net-datetime');
    require('datatables.net-fixedcolumns');
    require('datatables.net-fixedheader');
    require('datatables.net-keytable');
    require('datatables.net-rowgroup');
    require('datatables.net-rowreorder');
    require('datatables.net-scroller');
    require('datatables.net-searchbuilder');
    require('datatables.net-searchpanes');
    require('datatables.net-select');
    require('datatables.net-staterestore');
    window.pdfMake = require('pdfmake/build/pdfmake');
    window.pdfFonts = require('pdfmake/build/vfs_fonts');
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    /*-- End Datatables Jquery with all extension --*/

} catch (e) {}

//Custom Function Execute By Name
//Used in generalFormSubmit
window.executeFunctionByName = function ( functionName, context ) {
    var args, namespaces, func;
    if( typeof functionName === 'undefined' ) { throw 'function name not specified'; }
    if( typeof eval( functionName ) !== 'function' ) { throw functionName + ' is not a function'; }

    if( typeof context !== 'undefined' ) {
        if( typeof context === 'object' && context instanceof Array === false ) {
            if( typeof context[ functionName ] !== 'function' ) {
                throw context + '.' + functionName + ' is not a function';
            }
            args = Array.prototype.slice.call( arguments, 2 );

        } else {
            args = Array.prototype.slice.call( arguments, 1 );
            context = window;
        }

    } else {
        context = window;
    }

    namespaces = functionName.split( "." );
    func = namespaces.pop();

    for( var i = 0; i < namespaces.length; i++ ) {
        context = context[ namespaces[ i ] ];
    }

    return context[ func ].apply( context, args );
}
