System.register([], function (exports_1, context_1) {
    "use strict";
    var receipt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            receipt = class receipt {
                constructor(items, totalTax, subTotal, totalCost) {
                    this.items = items;
                    this.totalTax = totalTax;
                    this.subTotal = subTotal;
                    this.totalCost = totalCost;
                }
            };
            exports_1("receipt", receipt);
        }
    };
});
