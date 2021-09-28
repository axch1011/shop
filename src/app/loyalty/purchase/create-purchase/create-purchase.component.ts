import { Component, OnInit } from '@angular/core';
import {Purchase} from '../../../entity/Purchase';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {

  itemNumber = [0];
  rowCheck = [[false, false, false]];
  purchase: Purchase = new Purchase(null, null, null, [], [], [], [], [], null);
  purchasePrice: number;
  customerName = '';
  customerNumber = 1;
  purchaseDate = '';

  constructor(public dB: AngularFirestore) { }

  ngOnInit(): void {
  }

  addItem() {
    this.itemNumber.push(0);
    this.rowCheck.push([false, false, false]);
  }

  updateRowCheck(index: number, id: number) {
    this.rowCheck[index][id] = true;
  }

  updatePrice() {

  }

  createPurchase() {

    const myDate = new Date();
    // tslint:disable-next-line:radix
    myDate.setDate(parseInt(this.purchaseDate.substring(0, 2)));
    // tslint:disable-next-line:radix
    myDate.setMonth(parseInt(this.purchaseDate.substring(3, 5)) - 1);
    // tslint:disable-next-line:radix
    myDate.setFullYear(parseInt(this.purchaseDate.substring(6, 10)));

    console.log(this.purchase);
    const id: string = uuid();
    let index = 0;
    this.itemNumber.forEach(i => {
      const brandInput = 'brandInput' + index;
      const typeInput = 'typeInput' + index;
      const sizeInput = 'sizeInput' + index;
      const priceInput = 'priceInput' + index;
      const genderInput = 'genderInput' + index;

      // @ts-ignore
      // tslint:disable-next-line:max-line-length
      if (document.getElementById(brandInput).value !== '' && document.getElementById(priceInput).value !== ''){
        // @ts-ignore
        this.purchase.itemBrand.push(document.getElementById(brandInput).value);
        // @ts-ignore
        this.purchase.itemType.push(document.getElementById(typeInput).value);
        // @ts-ignore
        this.purchase.itemSize.push(document.getElementById(sizeInput).value);
        // @ts-ignore
        this.purchase.itemPrice.push(document.getElementById(priceInput).value);
        // @ts-ignore
        this.purchase.itemGender.push(document.getElementById(genderInput).value);

        this.purchase.creationDate = myDate;
        this.purchase.customerNumber = this.customerNumber;
        // @ts-ignore
        this.purchase.price = document.getElementById('completePriceInput').value;
      }
      index++;
    });
    this.dB.collection('purchases').doc(id).set({
      id,
      creationDate: this.purchase.creationDate,
      price: this.purchase.price,
      customerNumber: this.purchase.customerNumber,
      itemBrand: this.purchase.itemBrand,
      itemType: this.purchase.itemType,
      itemSize: this.purchase.itemSize,
      itemPrice: this.purchase.itemPrice,
      itemGender: this.purchase.itemGender,
      customerName: this.customerName
    }).then(() => {
      alert('Buchung wurde erfolgreich angelegt!');
      window.location.reload();
    });
    console.log(this.purchase);
  }
}
