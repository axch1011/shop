import {isBoolean} from 'util';

export class Clothing {
    brand: string;
    description: string;
    price: number;
    id: string;
    gender: string;
    sizes: string;
    type: string;
    deleted: any;
    verified?: boolean;

    constructor(brand: string, description: string, price: number, id: string, gender: string, sizes: string, type: string, deleted: any,
                verified?: boolean) {
        this.brand = brand;
        this.description = description;
        this.price = price;
        this.id = id;
        this.gender = gender;
        this.sizes = sizes;
        this.type = type;
        this.deleted = deleted;
        this.verified = verified;
    }
}
