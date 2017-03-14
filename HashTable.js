(function () {
'use strict';

function HashTable(obj) {
  this.length = 0;
  this.items = {};

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      this.items[p] = obj[p];
      this.length++;
    }
  }

  this.setItem = function (key, value) {
    var previous = undefined;
    if (this.hasItem(key)) {
      previous = this.items[key];
    }
    else {
      this.length++;
    }
    this.items[key] = value;
    console.log(this.items);
    return 'added ' + value;
  };

  this.hasItem = function (key) {
    return this.items.hasOwnProperty(key);
  };

  this.getItem = function (key) {
    return this.hasItem(key) ? this.items[key] : undefined;
  };

  this.removeItem = function (key) {
    var previous = undefined;
    if (this.hasItem(key)) {
      previous = this.items[key];
      this.length--;
      delete this.items[key];
      return 'deleted';
    }
    else {
      return undefined;
    }
  };

  this.keys = function () {
    var keys = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        keys.push(k);
      }
    }
    return keys;
  };

  this.values = function () {
    var values = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        values.push(this.items[k]);
      }
    }
    return values;
  };

  this.clear = function () {
    this.items = {};
    this.length = 0;
    return 'cleared';
  };
}

var newHash = new HashTable({one: 1, two: 2, three: 3});
console.log(newHash.setItem('four', 4));
console.log(newHash.getItem('one'));
console.log(newHash.removeItem('four'));
console.log(newHash.keys());
console.log(newHash.values());
console.log(newHash.clear());

})();
