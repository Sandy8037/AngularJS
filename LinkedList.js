(function () {
'use strict';

function LinkedList() {
  this.head = null;
}

LinkedList.prototype = {
  push: function (val) {
    var current;
    var node = {
      value: val,
      next: null
    };
    if (!this.head) {
      this.head = node;
    }
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  },
  remove: function (val) {
    var current = this.head;
    if (current.value === val) {
      this.head = current.next;
    }
    else {
      var previous = current;
      while (current.next) {
        if (current.value === val) {
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }
      if (current.value === val) {
        current.next = null;
      }
    }
  }
};

var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.remove(3);

console.log(sll.head);
console.log(sll.head.next);
console.log(sll.head.next.next);
console.log(sll);

})();
