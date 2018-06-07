import '../../../node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css'

global.moment = require('moment');
require('tempusdominus-bootstrap-4');

$('#datetimepicker4').datetimepicker({
    format: 'L'
});