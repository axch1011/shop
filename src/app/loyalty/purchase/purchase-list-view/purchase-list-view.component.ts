import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Purchase} from '../../../entity/Purchase';

@Component({
  selector: 'app-purchase-list-view',
  templateUrl: './purchase-list-view.component.html',
  styleUrls: ['./purchase-list-view.component.css']
})
export class PurchaseListViewComponent implements OnInit {

  purchases: Purchase[] = [];
  currentPurchases: Purchase[] = [];
  statPurchasesNumber = 0;
  statPurchasesRevenue = 0;
  statPurchasesCustomers = 0;
  currentFilter = 'all';

  constructor(public dB: AngularFirestore) { }

  ngOnInit(): void {
    this.dB.collection('purchases').get().forEach(purchases => {
      purchases.forEach(purchase => {
        const d = purchase.data();
        this.purchases.push(new Purchase(d.id, d.creationDate, d.price, d.itemBrand, d.itemType, d.itemSize, d.itemPrice,
            d.itemGender, d.customerNumber, d.customerName));
      });
    }).then(() => {
      this.currentPurchases = this.purchases;
      this.createStats();
    });
  }

  filterItems(type: string) {
    const today = new Date();
    switch (type) {
      case 'all':
        this.currentPurchases = this.purchases;
        this.createStats();
        this.currentFilter = 'all';
        break;
      case 'lastWeek':
        today.setDate(today.getDate() - 7);
        console.log(today);
        this.currentPurchases = [];
        this.purchases.forEach(p => {
          if (p.creationDate.toDate() >= today) {
            this.currentPurchases.push(p);

          }
        });
        this.createStats();
        this.currentFilter = 'lastWeek';
        break;
      case 'lastMonth':
        today.setDate(today.getDate() - 31);
        console.log(today);
        this.currentPurchases = [];
        this.purchases.forEach(p => {
          console.log(p);
          if (p.creationDate.toDate() >= today) {
            this.currentPurchases.push(p);

          }
        });
        this.createStats();
        this.currentFilter = 'lastMonth';
        break;
    }
  }


  createStats() {
    this.statPurchasesRevenue = 0;
    this.statPurchasesNumber = this.currentPurchases.length;
    const purchasesCustomers = [];
    this.currentPurchases.forEach(p => {
      // tslint:disable-next-line:radix
      this.statPurchasesRevenue = this.statPurchasesRevenue + parseInt(String(p.price));
      if (!purchasesCustomers.includes(p.customerName)) { this.statPurchasesCustomers++; }
    });
    this.currentPurchases.sort((a, b) => b.creationDate - a.creationDate);
  }

}
