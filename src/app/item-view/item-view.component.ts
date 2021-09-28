import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Clothing} from '../entity/Clothing';
import {OrderService} from '../order.service';
import {RouterService} from '../router.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  item: Clothing = new Clothing(null, null, null, null, null, '', null, null, undefined);
  itemSize: string;

  constructor(public route: ActivatedRoute,
              public db: AngularFirestore,
              public orderService: OrderService,
              public router: Router,
              public routerService: RouterService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    this.db.collection('items').doc(id).get().forEach(item => {
      const d = item.data();
      this.item = new Clothing(d.brand, d.description, d.price, d.id, d.gender, d.sizes, d.type, d.deleted , d.verified);
    });
  }

  addItemToOrder() {
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => {
              this.router.navigateByUrl('item/' + this.item.id);
          });
          // @ts-ignore
      this.orderService.order.items.push(this.item.id);
          // @ts-ignore
      this.orderService.order.sizes.push(this.itemSize);
      localStorage.setItem('order', JSON.stringify(this.orderService.order));
  }
}
