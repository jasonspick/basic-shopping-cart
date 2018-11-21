export class receipt {
    constructor(
        public items: Array<any>,
        public totalTax: number,
        public subTotal: number,
        public totalCost: number,
    ){}
}