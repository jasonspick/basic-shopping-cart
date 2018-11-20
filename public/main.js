"use strict";
// import * as items from "../data/items.json"
// was not able to get json import to work properly.
var App;
(function (App) {
    const inventory = [
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
    let store;
    class Store {
        constructor(items) {
            // this assignment was suppose to be imported from json. Instead I will set here.
            this.inventory = items;
        }
        getItem(upc) {
            // return single item from inventory. the ID of the item is it's index. We'll call it UPC
            return this.inventory[upc];
        }
    }
    App.Store = Store;
    class ShoppingCart {
        constructor(items) {
            this.items = [];
            this.addItems(items);
        }
        addItems(item) {
            if (Array.isArray(item)) {
                this.items = item;
            }
            else {
                this.items.push(item);
            }
        }
    }
    App.ShoppingCart = ShoppingCart;
    class POS {
        constructor(cart) {
            this.items = [];
            this.totalTax = 0;
            this.subTotal = 0;
            this.totalCost = 0;
            this.items = cart.items.map(upc => store.getItem(upc));
            this.checkout();
            this.printReciept();
        }
        checkout() {
            for (const i in this.items) {
                let item = this.items[i];
                this.calculateCost(item);
            }
            this.calculateTotal();
        }
        calculateCost(item) {
            this.calculateTax(item);
            this.subTotal += item.cost;
        }
        calculateTax(item) {
            item.tax = 0;
            if (!item.exempt) {
                let tax = item.cost * 0.1;
                item.tax = (Math.round((tax * 10) * 2) / 2) / 10;
            }
            if (item.imported) {
                let tax = item.cost * 0.05;
                item.tax += (Math.round((tax * 10) * 2) / 2) / 10;
            }
            this.totalTax += item.tax;
            item.total = item.cost + item.tax;
        }
        calculateTotal() {
            this.subTotal = parseFloat(this.subTotal.toFixed(2));
            this.totalCost = parseFloat((this.subTotal + this.totalTax).toFixed(2));
        }
        printReciept() {
            console.log('-------------------------------------------------------');
            for (let item of this.items) {
                console.log(item.description + ' $' + item.total.toFixed(2));
            }
            console.log(' ');
            console.log('Sales Tax $' + this.totalTax);
            console.log('Sub Total $' + this.subTotal);
            console.log('Total $' + this.totalCost);
            console.log('-------------------------------------------------------');
        }
    }
    App.POS = POS;
    store = new Store(inventory);
    let cart1 = new ShoppingCart([0, 1, 2]);
    new POS(cart1);
    let cart2 = new ShoppingCart([3, 4]);
    new POS(cart2);
    let cart3 = new ShoppingCart([5, 6, 7, 8]);
    new POS(cart3);
})(App || (App = {}));
