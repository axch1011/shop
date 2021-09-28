import { Component, OnInit } from '@angular/core';
import {PurchaseService} from '../../../shared/controller/purchase.service';
import {Purchase} from '../../../entity/Purchase';

@Component({
  selector: 'app-purchases-per-day-graph',
  templateUrl: './purchases-per-day-graph.component.html',
  styleUrls: ['./purchases-per-day-graph.component.css']
})
export class PurchasesPerDayGraphComponent implements OnInit {

  purchases: Purchase[];
  purchasesPerDay = new Map();

  constructor(public purchaseService: PurchaseService) {
    this.getAllPurchases();
  }

  ngOnInit(): void {
  }

  getAllPurchases(): void {
    this.purchaseService.getAllPurchases()
        .subscribe(res => {
          this.purchases = res;
        });
  }

  createStats(): void {
    let i = 90;
    const cd = new Date();
    this.purchases.forEach(p => {
      cd.setDate(cd.getDate() - 1);
      const pD = new Date(p.creationDate * 1000);
      if (pD.getMonth() === cd.getMonth() &&
          pD.getFullYear() === cd.getFullYear() &&
          pD.getDate() === cd.getDate()){

      }
    });
  }

}
