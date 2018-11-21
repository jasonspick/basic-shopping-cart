System.register(["./store"], function (exports_1, context_1) {
    "use strict";
    var store_1, inventory, store, cart1, cart2, cart3;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (store_1_1) {
                store_1 = store_1_1;
            }
        ],
        execute: function () {
            inventory = [
                {
                    "description": "16lb bag of Skittles",
                    "cost": 16.00,
                    "exempt": true,
                    "imported": false
                },
                {
                    "description": "Walkman",
                    "cost": 99.99,
                    "exempt": false,
                    "imported": false
                },
                {
                    "description": "bag of microwave Popcorn",
                    "cost": 0.99,
                    "exempt": true,
                    "imported": false
                },
                {
                    "description": "bag of Vanilla-Hazelnut Coffee",
                    "cost": 11.00,
                    "exempt": true,
                    "imported": true
                },
                {
                    "description": "Vespa",
                    "cost": 15001.25,
                    "exempt": false,
                    "imported": true
                },
                {
                    "description": "crate of Almond Snickers",
                    "cost": 75.99,
                    "exempt": true,
                    "imported": true
                }, {
                    "description": "Discman",
                    "cost": 55.00,
                    "exempt": false,
                    "imported": false
                },
                {
                    "description": "Bottle of Wine",
                    "cost": 10.00,
                    "exempt": false,
                    "imported": true
                },
                {
                    "description": "300# bag of Fair-Trade Coffee",
                    "cost": 997.99,
                    "exempt": true,
                    "imported": false
                }
            ];
            store = new store_1.Store(inventory);
            cart1 = store.grabCart();
            cart1.addItems([0, 1]);
            cart1.addItem(2);
            store.checkOut(cart1);
            cart2 = store.grabCart([3, 4]);
            cart3 = store.grabCart();
            cart3.addItems([5, 6, 7, 8]);
            store.checkOut(cart2);
            store.checkOut(cart3);
        }
    };
});
