import { Component, OnInit } from '@angular/core';
import {Purchase} from '../../entity/Purchase';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Customer} from '../../entity/Customer';
import {CustomerService} from '../../controller/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-profile-view',
  templateUrl: './customer-profile-view.component.html',
  styleUrls: ['./customer-profile-view.component.css']
})
export class CustomerProfileViewComponent implements OnInit {

  customer: Customer;

  purchases: Purchase[] = [];
  customerRevenue = 0;
  customerPurchases = 0;
  customerItems = 0;

  brandMap = new Map();
  brandMapArray = [];
  statPurchasesPerMonth = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];

  typeMap = new Map();
  typeMapArray = [];

  constructor(public aR: ActivatedRoute,
              public dB: AngularFirestore,
              public customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    const id = this.aR.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id)
        .subscribe(res => {
            this.customer = res as Customer;
            if (this.customer.id === undefined){
                this.customer.id = this.customer.customerNumber.toString();
            }
            this.getPurchasesByCustomer();
        });
  }

  updateCustomer(): void {
      this.customerService.updateCustomer(this.customer).then((res) => {
          if (res === true){
              alert('Profil wurde geupdated');
              window.location.reload();
          }
      });
  }

  getPurchasesByCustomer() {
    this.dB.collection('purchases').ref.where('customerNumber', '==', this.customer.customerNumber).get()
        .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const d = doc.data();
        // tslint:disable-next-line:radix
        this.purchases.push(new Purchase(d.id, d.creationDate, parseInt(d.price), d.itemBrand, d.itemType, d.itemSize, d.itemPrice,
            d.itemGender, d.customerNumber, d.customerName));
      });
    }).then(() => this.setCustomerStats());
  }

  setCustomerStats() {
      this.customerPurchases = this.purchases.length;
      this.purchases.forEach(purchase => {
          this.customerRevenue += purchase.price;
          let i = 0;
          purchase.itemBrand.forEach(brand => {
            if (!this.brandMap.has(brand)) {
              // tslint:disable-next-line:radix
              this.brandMap.set(brand, parseInt(purchase.itemPrice[i]));
            } else {
              // tslint:disable-next-line:radix
              this.brandMap.set(brand, this.brandMap.get(brand) + parseInt(purchase.itemPrice[i]));
            }
            i++;
          });
      });

      this.purchases.forEach(p => {

          let i = 0;
          p.itemType.forEach(type => {
              this.customerItems++;
              if (!this.typeMap.has(type)) {
                  this.typeMap.set(type, 1);
              } else {
                  this.typeMap.set(type, this.typeMap.get(type) + 1);
              }
              i++;
          });
      });

      this.typeMap.forEach((k, v) => {
         this.typeMapArray.push([v, k]);
      });
      console.log(this.typeMapArray);

      let highestPurchases = 0;
      const today = new Date();
      for (let i = 0; i < 12; i++) {
          const cDate = new Date();
          cDate.setMonth(cDate.getMonth() - i);
          this.purchases.forEach(p => {
              if (p.creationDate.toDate().getMonth() === cDate.getMonth() &&
                  p.creationDate.toDate().getFullYear() === cDate.getFullYear()) {

                  this.statPurchasesPerMonth[11 - i][0] = this.statPurchasesPerMonth[11 - i][0] + 1;

                  if (this.statPurchasesPerMonth[11 - i][0] >= highestPurchases) {
                      highestPurchases = this.statPurchasesPerMonth[11 - i][0];
                  }
              }
          });
      }
      this.statPurchasesPerMonth.forEach(s => {
          // s[1] = (s[0]) / highestPurchases * 100;
          s[1] = (s[0]) / 6 * 100;
      });
      this.brandMap.forEach((k, v) => {
          this.brandMapArray.push([v, k]);
      });
  }
}
