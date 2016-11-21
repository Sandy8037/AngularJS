(function () {
'use scrict';

function Person() {
  this.fullName = "Sandeep";
  this.fav = 'JS';

  this.describe = function () {
    console.log(this.fullName + " likes " + this.fav);
  };
}

var sandy = new Person();
sandy.describe();

var describe = sandy.describe;
describe();
describe.call(sandy);
})();
