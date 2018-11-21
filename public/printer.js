System.register([], function (exports_1, context_1) {
    "use strict";
    var printer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            printer = class printer {
                constructor(receipt) {
                    this.receipt = receipt;
                }
                print() {
                    console.log('-------------------------------------------------------');
                    for (let item of this.receipt.items) {
                        console.log(item.description + ' $' + item.total.toFixed(2).toLocaleString('en'));
                    }
                    console.log(' ');
                    console.log('Sales Tax $' + this.receipt.totalTax.toLocaleString('en'));
                    console.log('Sub Total $' + this.receipt.subTotal.toLocaleString('en'));
                    console.log('Total $' + this.receipt.totalCost.toLocaleString('en'));
                    console.log('-------------------------------------------------------');
                }
            };
            exports_1("printer", printer);
        }
    };
});
