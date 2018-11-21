//import * as items from "../data/items.json"
// was not able to get json import to work properly.
import {Store} from './store';

let inventory:Array<any> = [
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
    },{
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
let store:any = new Store(inventory);
let cart1 = store.grabCart();
cart1.addItems([0,1]);
cart1.addItem(2);
store.checkOut(cart1);

let cart2 = store.grabCart([3,4]);

let cart3 = store.grabCart();
cart3.addItems([5,6,7,8]);

store.checkOut(cart2);
store.checkOut(cart3);