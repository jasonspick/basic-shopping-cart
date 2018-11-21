System.register(["./cart", "./pos"], function (exports_1, context_1) {
    "use strict";
    var cart_1, pos_1, Store;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (cart_1_1) {
                cart_1 = cart_1_1;
            },
            function (pos_1_1) {
                pos_1 = pos_1_1;
            }
        ],
        execute: function () {
            Store = class Store {
                constructor(items) {
                    // this assignment was suppose to be imported from json. Instead I will set here.
                    this.inventory = items;
                }
                getItem(upc) {
                    // return single item from inventory. the ID of the item is it's index. We'll call it UPC
                    return this.inventory[upc];
                }
                grabCart(items) {
                    return new cart_1.ShoppingCart(items);
                }
                checkOut(cart) {
                    return new pos_1.POS(cart, this);
                }
            };
            exports_1("Store", Store);
        }
    };
});
