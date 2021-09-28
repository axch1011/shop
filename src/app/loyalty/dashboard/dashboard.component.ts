import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Purchase} from '../../entity/Purchase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  purchases: Purchase[] = [];
  statRevnuePerDayInCurrentMonth = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
    [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
    [0, 0]];
  statPurchasesPerDayInCurrentMonth = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],[0, 0],
    [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
    [0, 0]];
  statPurchasesRevenue = 0;
  statPurchasesNumber = 0;
  statPurchasesCustomers = 0;
  statItemPurchases = [['T-Shirt', 0], ['Polo', 0], ['Hemd', 0], ['Bluse', 0], ['Kleider', 0], ['Jacken & Mäntel', 0], ['Jeans & Hosen', 0],
    ['Schuhe', 0]];
  statItemRevenues = [['T-Shirt', 0], ['Polo', 0], ['Hemd', 0], ['Bluse', 0], ['Kleider', 0], ['Jacken & Mäntel', 0], ['Jeans & Hosen', 0],
    ['Schuhe', 0]];
  statItemPurchasesInsgesamt = 0;
  statItemRevenuesInsgesamt = 0;

  brands = new Map();
  brandTypeRevenuePairs = [];

  constructor(public dB: AngularFirestore) {
    this.dB.collection('purchases').get().forEach(purchases => {
      purchases.forEach(purchase => {
        const d = purchase.data();
        this.purchases.push(new Purchase(d.id, d.creationDate, d.price, d.itemBrand, d.itemType, d.itemSize, d.itemPrice,
            d.itemGender, d.customerNumber, d.customerName));

        d.itemBrand.forEach(brand => {
          if (!this.brands.has(brand)) {
            this.brands.set(brand, 0);
          }
        });
        let i = 0;
        d.itemBrand.forEach(brand => {
          // tslint:disable-next-line:radix
           this.brandTypeRevenuePairs.push([brand, parseInt(d.itemPrice[i])]);

           i++;
        });
      });
    }).then(() => {
      this.createStats();
      this.brandTypeRevenuePairs.forEach(pair => {
        // tslint:disable-next-line:radix
        this.brands.set(pair[0], this.brands.get(pair[0]) + parseInt(pair[1]));
      });
    });
  }

  ngOnInit(): void {
    const date = new Date();
    const newDate = new Date();
    newDate.setDate(date.getDate() - 4);
  }

  createStats() {
    this.statPurchasesNumber = this.purchases.length;
    let highestRevenue = 0;
    let highestPurchases = 0;
    const purchasesCustomers = [];

    this.purchases.forEach(p => {
      // tslint:disable-next-line:radix
      this.statPurchasesRevenue = this.statPurchasesRevenue + parseInt(String(p.price));
      if (!purchasesCustomers.includes(p.customerName)) {
        purchasesCustomers.push(p.customerName);
      }

      const i = 0;
      p.itemType.forEach(type => {
        switch (type) {
          case 'T-Shirt':
            // @ts-ignore
            this.statItemPurchases[0][1] = this.statItemPurchases[0][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[0][1] = this.statItemRevenues[0][1] + parseInt(p.itemPrice[i]);
            break;
          case 'Polo':
            // @ts-ignore
            this.statItemPurchases[1][1] = this.statItemPurchases[0][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[1][1] = this.statItemRevenues[0][1] + parseInt(p.itemPrice[i]);
            break;
          case 'Hemd':
            // @ts-ignore
            this.statItemPurchases[2][1] = this.statItemPurchases[0][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[2][1] = this.statItemRevenues[0][1] +  parseInt(p.itemPrice[i]);
            break;
          case 'Bluse':
            // @ts-ignore
            this.statItemPurchases[3][1] = this.statItemPurchases[0][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[3][1] = this.statItemRevenues[0][1] + parseInt(p.itemPrice[i]);
            break;
          case 'Kleider':
            // @ts-ignore
            this.statItemPurchases[4][1] = this.statItemPurchases[1][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[4][1] = this.statItemRevenues[1][1] + parseInt(p.itemPrice[i]);
            break;
          case 'Jacken & Mäntel':
            // @ts-ignore
            this.statItemPurchases[5][1] = this.statItemPurchases[2][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[5][1] = this.statItemRevenues[2][1] + parseInt(p.itemPrice[i]);
            break;
          case 'Jeans & Hosen':
            // @ts-ignore
            this.statItemPurchases[6][1] = this.statItemPurchases[3][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[6][1] = this.statItemRevenues[3][1] + parseInt(p.itemPrice[i]);
            break;
          case 'Schuhe':
            // @ts-ignore
            this.statItemPurchases[7][1] = this.statItemPurchases[4][1] + 1;
            // @ts-ignore
            // tslint:disable-next-line:radix
            this.statItemRevenues[7][1] = this.statItemRevenues[4][1] + parseInt(p.itemPrice[i]);
            break;
        }
      });
    });
    this.statItemPurchases.forEach(iP => {
      // @ts-ignore
      this.statItemPurchasesInsgesamt = this.statItemPurchasesInsgesamt + iP[1];
    });
    this.statItemRevenues.forEach(iR => {
      // @ts-ignore
      this.statItemRevenuesInsgesamt = this.statItemRevenuesInsgesamt + iR[1];
    })
    this.statPurchasesCustomers = purchasesCustomers.length;

    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const cDate = new Date();
      cDate.setDate(cDate.getDate() - i);
      this.purchases.forEach(p => {
        if (p.creationDate.toDate().getDate() === cDate.getDate() &&
            p.creationDate.toDate().getMonth() === cDate.getMonth() &&
            p.creationDate.toDate().getFullYear() === cDate.getFullYear()) {
          // tslint:disable-next-line:radix
          this.statRevnuePerDayInCurrentMonth[30 - i][0] = this.statRevnuePerDayInCurrentMonth[30 - i][0] + parseInt(String(p.price));
          this.statPurchasesPerDayInCurrentMonth[30 - i][0] = this.statPurchasesPerDayInCurrentMonth[30 - i][0] + 1;

          if (this.statRevnuePerDayInCurrentMonth[30 - i][0] >= highestRevenue) {
            highestRevenue = this.statRevnuePerDayInCurrentMonth[30 - i][0];
          }
          if (this.statPurchasesPerDayInCurrentMonth[30 - i][0] >= highestPurchases) {
            highestPurchases = this.statPurchasesPerDayInCurrentMonth[30 - i][0];
          }
        }
      });
    }
    this.statRevnuePerDayInCurrentMonth.forEach(s => {
      s[1] = (s[0]) / highestRevenue * 100;
      // s[1] = (s[0]) / 3000 * 100;
    });
    this.statPurchasesPerDayInCurrentMonth.forEach(s => {
      s[1] = (s[0]) / highestPurchases * 100;
      // s[1] = (s[0]) / 8 * 100;
    });
    console.log(this.statItemRevenues);
    console.log(this.statItemRevenuesInsgesamt);
  }

}
