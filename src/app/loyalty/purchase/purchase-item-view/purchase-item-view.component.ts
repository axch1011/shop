import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {Purchase} from '../../../entity/Purchase';

@Component({
  selector: 'app-purchase-item-view',
  templateUrl: './purchase-item-view.component.html',
  styleUrls: ['./purchase-item-view.component.css']
})
export class PurchaseItemViewComponent implements OnInit {

  purchase = new Purchase(null, null, null, [], [], [], [],
      [], null, null);

  constructor(public dB: AngularFirestore,
              public aR: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    const id = this.aR.snapshot.paramMap.get('id');
    this.dB.collection('purchases').doc(id).get().forEach(item => {
      const d = item.data();
      this.purchase = new Purchase(d.id, d.creationDate, d.price, d.itemBrand, d.itemType, d.itemSize, d.itemPrice, d.itemGender,
          d.customerNumber, d.customerName);
    });
  }

}
