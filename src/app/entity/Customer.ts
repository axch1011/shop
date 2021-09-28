export class Customer {
    id: string;
    salutation: string;
    name: string;
    customerNumber: number;
    town: string;
    mail: string;
    phoneNumber?: string;
    birthday?: any;
    address?: string;


    constructor(id: string, salutation: string, name: string, customerNumber: number, town: string, mail: string, phoneNumber: string, birthday: any, address: string) {
        this.id = id;
        this.salutation = salutation;
        this.name = name;
        this.customerNumber = customerNumber;
        this.town = town;
        this.mail = mail;
        this.phoneNumber = phoneNumber;
        this.birthday = birthday;
        this.address = address;
    }
}
