(function () {
'use strict';

function StringPermutation() {
  this.buffer = [];
  this.length = 0;
}

StringPermutation.prototype = {
  add: function (s) {
    if (this.length === 0) {
      this.buffer[this.length] = s;
      this.length++;
    }
    else {
      this.buffer[this.length] = s;
    }
  },
  checkPermutation: function () {
    var ch;
    for (var i = 0; i < this.buffer[0].length; i++) {
      ch = this.buffer[0].slice(i + 1, this.buffer[0].length) + this.buffer[0].slice(0, i + 1);
      if (ch === this.buffer[1]) {
        return 'Is Permutation';
      }
    }
    return 'Not Permutation';
  }
};

var newStringPermutation = new StringPermutation();
newStringPermutation.add('sandy');
newStringPermutation.add('dysan');
console.log(newStringPermutation.checkPermutation());

})();
