(function () {
'use strict';

var arr = [], min;
for (var i = 0; i < 5; i++) {
  arr[i] = i + 1;
}

console.log(arr.push(0));

for (var i = 0; i < arr.length; i++) {
  if (i === 0) {
    min = arr[i];
  }
  else {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
}
console.log(arr);
console.log(arr.pop());
console.log(min);

})();
