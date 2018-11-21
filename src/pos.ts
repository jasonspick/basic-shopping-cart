import {ShoppingCart} from './cart';
import {Store} from './store';
import {printer} from './printer';
import {receipt} from './receipt';
export class POS {
    receipt = new receipt([],0,0,0);
    printer:any = new printer(this.receipt);
    constructor(private cart: ShoppingCart, private store: Store){
        this.checkout();
    }

    private checkout(){
        for(let upc of this.cart.items){ //scan every item in cart ;)
            let item = this.store.getItem(upc); //get item data from store
            this.receipt.items.push(item); 
            this.calculateCost(item); //calculate tax and add subtotal
        }
        this.calculateTotal();
        this.printer.print();
    }
    private calculateCost(item:any){
        this.calculateTax(item);
        this.receipt.subTotal += item.cost;
    }
    private calculateTax(item:any){
        item.tax = 0;
        if(!item.exempt){
            let tax = item.cost*0.1;
            item.tax = (Math.round((tax*10)*2)/2)/10;
        }
        if(item.imported){
            let tax = item.cost*0.05;
            item.tax += (Math.round((tax*10)*2)/2)/10;
        }

        this.receipt.totalTax += item.tax;
        item.total = item.cost + item.tax;
    }
    private calculateTotal(){
        this.receipt.subTotal = parseFloat(this.receipt.subTotal.toFixed(2));
        this.receipt.totalCost = parseFloat((this.receipt.subTotal+this.receipt.totalTax).toFixed(2));
    }
    
}