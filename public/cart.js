System.register([], function (exports_1, context_1) {
    "use strict";
    var ShoppingCart;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ShoppingCart = class ShoppingCart {
                constructor(items) {
                    this.items = [];
                    if (items)
                        this.addItems(items);
                }
                addItems(items) {
                    this.items = this.items.concat(items);
                }
                addItem(item) {
                    this.items.push(item);
                }
            };
            exports_1("ShoppingCart", ShoppingCart);
        }
    };
});
