(function () {
'use strict';

function UniqueCharacter() {
  this.buffer = [];
  this.lenght = 0;
}

UniqueCharacter.prototype = {
  add: function (s) {
    this.buffer[this.lenght] = s;
    this.lenght++;
  },
  unique: function () {
    var self = this;
    var a = this.buffer[0].toLowerCase().split('');
    var b = a.filter(onlyUnique);
    if (a.length === b.length) {
      console.log('Unique');
    }
    else {
      console.log('Not Unique');
    }
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
  },
  clear: function () {
    this.buffer = [];
    this.lenght = 0;
  }
};


var newUnique = new UniqueCharacter();
newUnique.add('Sands');
newUnique.unique();
newUnique.clear();

})();
