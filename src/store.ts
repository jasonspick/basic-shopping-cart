import { ShoppingCart } from "./cart";
import { POS } from "./pos";

export class Store {
    private inventory: Array<any>;
    constructor(items: Array<any>) {
            // this assignment was suppose to be imported from json. Instead I will set here.
        this.inventory = items
    }
    public getItem(upc:number){
        // return single item from inventory. the ID of the item is it's index. We'll call it UPC
        return this.inventory[upc];
    }

    public grabCart(items?:Array<number>){
        return new ShoppingCart(items);
    }

    public checkOut(cart:ShoppingCart){
        return new POS(cart, this);
    }
}