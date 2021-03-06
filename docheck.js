(function () {
'use scrict';

angular.module('ShoppingListComponentApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
.component('shoppingList', {
  templateUrl: 'shoppingList.html',
  controller: ShoppingListComponentController,
  bindings: {
    items: '<',
    title: '@',
    onRemove: '&'
  }
});

ShoppingListComponentController.$inject = ['$element'];
function ShoppingListComponentController($element) {
  var $ctrl = this;
  var totalItems;

  $ctrl.cookieInList = function () {
    for (var i = 0; i < $ctrl.items.length; i++) {
      var name = $ctrl.items[i].name;
      if (name.toLowerCase().indexOf('cookie') !== -1) {
        return true;
      }
    }

    return false;
  };

  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex })
  };

  $ctrl.$onInit = function () {
    totalItems = 0;
  };

  $ctrl.$onChange = function (changeObj) {
    console.log('changes: ', changeObj);
  };

  $ctrl.$doCheck = function () {
    if ($ctrl.items.length !== totalItems) {
      totalItems = $ctrl.items.length;
      if ($ctrl.cookieInList()) {
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      }
      else {
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      }
    }
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

  list.warning = "COOKIES DETECTED";

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
