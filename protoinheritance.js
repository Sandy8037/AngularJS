(function () {
'use scrict';

var parent = {
  value: 'parentValue',
  obj: {
    objValue: 'parentObjValue'
  },
  walk: function () {
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("parent:");
console.log(parent.value);
console.log(parent.obj.objValue);
console.log(parent.walk());
console.log("child");
console.log(child.value);
console.log(child.obj.objValue);
console.log(child.walk());
console.log(parent);
console.log(child);

child.value = 'childValue';
child.obj.objValue = 'childObjValue';
console.log("parent:");
console.log(parent.value);
console.log(parent.obj.objValue);
console.log(parent.walk());
console.log("child");
console.log(child.value);
console.log(child.obj.objValue);
console.log(child.walk());
console.log(parent);
console.log(child);

var grandChild = Object.create(child);
console.log("child");
console.log(child.value);
console.log(child.obj.objValue);
console.log(child.walk());
console.log("grand child:");
console.log(grandChild.value);
console.log(grandChild.obj.objValue);
console.log(grandChild.walk());
console.log(child);
console.log(grandChild);

// Function Constructor
function Dog(name) {
  this.name = name;
  console.log('this is: ', this);
}

var myDog = new Dog('max');
console.log('myDog: ', myDog);

Dog('max2');

})();
