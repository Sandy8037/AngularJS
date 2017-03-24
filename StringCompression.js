(function () {
'use strict';

function StringCompression() {
  this.buffer = [];
  this.length = 0;
}

StringCompression.prototype = {
  add: function (s) {
    this.buffer[0] = s;
  },
  compression: function () {
    var ch = '', com = '';
    for (var i = 0; i <= this.buffer[0].length; i++) {
      var inc = 1, k = i;
      com = com + ch;
      ch = '';
      for (var j = 1; j < this.buffer[0].length; j++) {
        if (j === k) {
          continue;
        }
        if (this.buffer[0][k] === this.buffer[0][j]) {
          inc++;
          i++;
          ch = this.buffer[0][k] + inc;
        }
        else {
          continue;
        }
      }
    }
    if (com.length < this.buffer[0].length && com.length !== 0) {
      console.log(com);
    }
    else {
      console.log(this.buffer[0]);
    }
  }
};

var newCompression = new StringCompression();
newCompression.add('ab');
newCompression.compression();

})();
