(function () {
'use scrict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
.directive('shoppingList', ShoppingList);

function ShoppingList() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      title: '@',
      badRemove: '=',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true,
    link: ShoppingListDirectiveLink
  };

  return ddo;
}

function ShoppingListDirectiveLink(scope, element, attrs, controller) {
  console.log('link scope: ', scope);
  console.log('controller instance ', controller);
  console.log('element is ', element);

  scope.$watch('list.cookieInList()', function (newValue, oldValue) {
    console.log('old value ', oldValue);
    console.log('new value ', newValue);

    if (newValue === true) {
      displayCookieWarning();
    }
    else {
      removeCookieWarning();
    }

  });

  function displayCookieWarning() {
    // Using Angular jqLite
    // var warningElem = element.find('div');
    // warningElem.css('display', 'block');

    // If jQuery included before Angular
    var warningElem = element.find("div.error");
    warningElem.slideDown(900);
  }

  function removeCookieWarning() {
    // Using Angular jqLite
    // var warningElem = element.find('div');
    // warningElem.css('display', 'none');

    // If jQuery included before Angular
    var warningElem = element.find("div.error");
    warningElem.slideUp(900);
  }
}

function ShoppingListDirectiveController() {
  var list = this;

  list.cookieInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf('cookie') !== -1) {
        return true;
      }
    }

    return false;
  };
}

// List1
ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = 'Shopping List1';
  list.title = origTitle + "(" + list.items.length + " items )";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + "(" + list.items.length + " items )";
  };

  list.removeItem = function (itemIndex) {
    console.log('this is: ', this);
    this.lastRemoved = 'last removed ' + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    list.title = origTitle + "(" + list.items.length + " items )";
  }
}

// If maxItems not specified then unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
    (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max Item reached");
    }
  };

  service.getItems = function () {
    return items;
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

}

function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
