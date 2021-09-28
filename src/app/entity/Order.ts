export class Order {
    id: string;
    orderName: string;
    orderMail: string;
    orderAdress: string;
    orderTown: string;
    orderPLZ: number;
    items?: [] = [];
    sizes?: [] = [];
    orderState: string;
    orderCreation: any;

    constructor(id: string, orderName: string, orderMail: string, orderAdress: string,
                orderTown: string, orderPLZ: number, items: [], sizes: [],
                orderState: string, orderCreation: any) {
        this.id = id;
        this.orderName = orderName;
        this.orderMail = orderMail;
        this.orderAdress = orderAdress;
        this.orderTown = orderTown;
        this.orderPLZ = orderPLZ;
        this.items = items;
        this.sizes = sizes;
        this.orderState = orderState;
        this.orderCreation = orderCreation;
    }
}
