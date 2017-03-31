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
  },
  kthFromEnd: function (k) {
    var node = this.head;
    var i = 1, kthnode;
    if (k <= 0) {
      return;
    }
    while (node) {
      if (i === k) {
        kthnode = this.head;
      }
      else if (i - k > 0) {
        kthnode = kthnode.next;
      }
      i++;
      node = node.next;
    }
    return kthnode;
  }
};

var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);

console.log(sll.kthFromEnd(1));

})();
