import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Order} from '../entity/Order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-list-view',
  templateUrl: './order-list-view.component.html',
  styleUrls: ['./order-list-view.component.css']
})
export class OrderListViewComponent implements OnInit {

  orders: Order[] = [];
  newOrders: Order[] = [];
  progressOrders: Order[] = [];
  sendOrders: Order[] = [];
  doneOrders: Order[] = [];
  showOrders: Order[] = [];

  constructor(public db: AngularFirestore,
              public route: ActivatedRoute) {
    this.db.collection('orders').get().forEach(orders => {
      this.orders = [];
      orders.forEach(d => {
        const o = d.data();
        // @ts-ignore
        this.orders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes, o.orderState,
            o.orderCreation));
        switch (o.orderState) {
          case 'new':
            this.newOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes,
                o.orderState, o.orderCreation));
            break;
          case 'in Bearbeitung':
            this.progressOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes,
                o.orderState, o.orderCreation));
            break;
          case 'Versandt':
            this.sendOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes,
                o.orderState, o.orderCreation));
            break;
          case 'Abgeschlossen':
            this.doneOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes,
                o.orderState, o.orderCreation));
            break;
        }
      });
    }).then(() => {
    }).catch(error => error.message);

    this.route.params.subscribe(params => {
      switch (params.type) {
        case 'new':
          this.showOrders = [];
          this.showOrders = this.newOrders;
          break;
        case 'progress':
          this.showOrders = this.progressOrders;
          break;
        case 'send':
          this.showOrders = this.sendOrders;
          break;
        case 'done':
          this.showOrders = this.doneOrders;
          break;
      }
    });
  }

  ngOnInit(): void {
    this.setItems();
    console.log('go');
  }

  setItems() {
    const type = this.route.snapshot.paramMap.get('type');
    switch (type) {
      case 'new':
        this.showOrders = [];
        this.showOrders = this.newOrders;
        break;
      case 'progress':
        this.showOrders = this.progressOrders;
        break;
      case 'send':
        this.showOrders = this.sendOrders;
        break;
      case 'done':
        this.showOrders = this.doneOrders;
        break;
    }
  }

}
