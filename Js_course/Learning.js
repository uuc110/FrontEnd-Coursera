class Product{
    constructor(itemName, Price, discount, productcode){
        this.itemName = itemName;
        this.Price = Price;
        this.discount = discount;
        this.productcode = productcode;
    }
}

let pencil = new Product('Pencil', 20,2,'P10');

const Product1 = class{
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }

    get getdiscountValue(){
        return this.discount;
    }

    set setDiscountValue(value){
        this.discount = value;
    }
};



let chair = new Product1('Chair', 499, 15,'C10');
