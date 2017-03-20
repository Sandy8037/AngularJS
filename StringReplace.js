(function () {
'use strict';

function StringReplace() {
  this.buffer = [];
  this.length = 0;
}

StringReplace.prototype = {
  add: function (s) {
    this.buffer[0] = s;
  },
  replaceString: function () {
    var ch = '%20';
    for (var i = 0; i < this.buffer[0].length; i++) {
      if (this.buffer[0].charCodeAt(i) === 32) {
        return this.buffer[0].replace(this.buffer[0][i], ch);
      }
    }
  }
};

var newStringReplace = new StringReplace();
newStringReplace.add('sa ndy');
console.log(newStringReplace.replaceString());

})();
