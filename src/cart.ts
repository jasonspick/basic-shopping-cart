export class ShoppingCart {
    items: Array<any> = [];
    constructor(items?: Array<number>){
        if(items) this.addItems(items);
    }
    addItems(items:Array<number>){
        this.items = this.items.concat(items);
    }
    addItem(item:number){
        this.items.push(item);
    }
}

