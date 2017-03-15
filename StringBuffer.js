(function () {
'use strict';

function StringBuffer() {
  this.buffer = [];
  this.index = 0;
}

StringBuffer.prototype = {
  append: function (s) {
    this.buffer[this.index] = s;
    this.index += 1;
    return this;
  },
  toString: function () {
    return this.buffer.join(' ');
  }
}

var newBuffer = new StringBuffer();
console.log(newBuffer.append('Sandy'));
console.log(newBuffer.append('Devarapalli'));
console.log(newBuffer.toString());

})();
