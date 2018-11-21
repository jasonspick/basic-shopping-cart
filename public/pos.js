System.register(["./printer", "./receipt"], function (exports_1, context_1) {
    "use strict";
    var printer_1, receipt_1, POS;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (printer_1_1) {
                printer_1 = printer_1_1;
            },
            function (receipt_1_1) {
                receipt_1 = receipt_1_1;
            }
        ],
        execute: function () {
            POS = class POS {
                constructor(cart, store) {
                    this.cart = cart;
                    this.store = store;
                    this.receipt = new receipt_1.receipt([], 0, 0, 0);
                    this.printer = new printer_1.printer(this.receipt);
                    this.checkout();
                }
                checkout() {
                    for (let upc of this.cart.items) { //scan every item in cart ;)
                        let item = this.store.getItem(upc); //get item data from store
                        this.receipt.items.push(item);
                        this.calculateCost(item); //calculate tax and add subtotal
                    }
                    this.calculateTotal();
                    this.printer.print();
                }
                calculateCost(item) {
                    this.calculateTax(item);
                    this.receipt.subTotal += item.cost;
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
                    this.receipt.totalTax += item.tax;
                    item.total = item.cost + item.tax;
                }
                calculateTotal() {
                    this.receipt.subTotal = parseFloat(this.receipt.subTotal.toFixed(2));
                    this.receipt.totalCost = parseFloat((this.receipt.subTotal + this.receipt.totalTax).toFixed(2));
                }
            };
            exports_1("POS", POS);
        }
    };
});
