export class Purchase {
    id: string;
    creationDate: any;
    price: number;
    itemBrand: [];
    itemType: [];
    itemSize: [];
    itemPrice: [];
    itemGender: [];
    customerNumber: number;
    customerName?: string;

    constructor(id: string, creationDate: any, price: number, itemBrand: [], itemType: [], itemSize: [], itemPrice: [], itemGender: [],
                customerNumber: number, customerName?: string) {
        this.id = id;
        this.creationDate = creationDate;
        this.price = price;
        this.itemBrand = itemBrand;
        this.itemType = itemType;
        this.itemSize = itemSize;
        this.itemPrice = itemPrice;
        this.itemGender = itemGender;
        this.customerNumber = customerNumber;
        this.customerName = customerName;
    }
}
