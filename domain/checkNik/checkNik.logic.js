var checkNik = require('../person/person.logic');

class checkNik2 extends checkNik {
  constructor(...args) {
    super(...args)
  }
  checkpanjangNik() {
    //   console.log(this.nik.length);
      if (this.nik.length != 16) {
        console.log("Panjang NIK tidak 16 karakter !!");
      } else {          
        console.log("Panjang NIK OK (16 karakter) !!"); 
       };
       };

    checkDobvalid() {
        var th = this.nik.slice(6,10);
        var bln = this.nik.slice(10,12);
        var tgl = this.nik.slice(12,14);
        var bod1 = th + '-' + bln + '-' + tgl;
        // console.log(bod1);
        // console.log(this.bod);

        if (this.nik.length == 16) {
        if (bod1 === this.bod) {
          console.log('Check BoD OK!')
        } else {
           console.log('Check BoD NOK!')
        }
    } else {
        console.log('Check BoD NOK!')
    }
    }
}
module.exports = checkNik2;