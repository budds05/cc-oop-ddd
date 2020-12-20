const checkNik1 = require('./domain/checkNik/checkNik.logic')
var check1 = new checkNik1('Budi Susanto', '6403051993102001', '1993-10-20');

check1.checkpanjangNik();
check1.checkDobvalid();
