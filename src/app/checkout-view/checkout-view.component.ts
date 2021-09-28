import { Component, OnInit } from '@angular/core';
import {Order} from '../entity/Order';
import Item = firebase.analytics.Item;
import {Clothing} from '../entity/Clothing';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';
import { v4 as uuid } from 'uuid';
import {RouterService} from '../router.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit {

  order: Order = new Order(null, null, null, null, null, null, [], [],
      null, null);
  items: Clothing[] = [];
  orderInProgress = false;

  constructor(public db: AngularFirestore,
              public orderService: OrderService,
              public router: Router,
              public routerService: RouterService) { }

  ngOnInit(): void {
    this.order = this.orderService.order;
    this.order.items.forEach(item => {
      this.db.collection('items').doc(item).get().forEach(c => {
        const d = c.data();
        this.items.push(new Clothing(d.brand, d.description, d.price, d.id, d.gender, d.sizes, d.type, d.deleted));
      });
    });
  }

  goToInto() {
    this.router.navigateByUrl('');
  }

  removeItemFromOrder(id: number) {
    console.log(this.items[id]);
    console.log(this.order.items[id]);
  }

  sendOrder() {
    this.orderInProgress = true;
    const id: string = uuid();
    const state = 'new'
    this.db.collection('orders').doc(id).set({
      id,
      orderName: this.order.orderName,
      orderMail: this.order.orderMail,
      orderAdress: this.order.orderAdress,
      orderTown: this.order.orderTown,
      orderPLZ: this.order.orderPLZ,
      items: this.order.items,
      sizes: this.order.sizes,
      orderState: state,
      orderCreation: new Date()
    }).then(() => {
      this.orderService.order = new Order(null, null, null, null, null, null,
          [], [], null, null);
      this.orderInProgress = false;
      this.router.navigateByUrl('orderSend');
    });
  }
}
