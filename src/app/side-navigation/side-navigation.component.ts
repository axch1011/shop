import { Component, OnInit } from '@angular/core';
import {Order} from '../entity/Order';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  orders: Order[] = [];
  newOrders: Order[] = [];
  progressOrders: Order[] = [];
  sendOrders: Order[] = [];
  doneOrders: Order[] = [];

  constructor(public db: AngularFirestore) {
    this.db.collection('orders').get().forEach(orders => {
      this.orders = [];
      orders.forEach(d => {
        const o = d.data();
        // @ts-ignore
        this.orders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes, o.orderState, o.orderCreation));
        switch (o.orderState) {
          case 'new':
            this.newOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes, o.orderState, o.orderCreation));
            break;
          case 'in Bearbeitung':
            this.progressOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes, o.orderState, o.orderCreation));
            break;
          case 'Versandt':
            this.sendOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes, o.orderState, o.orderCreation));
            break;
          case 'Abgeschlossen':
            this.doneOrders.push(new Order(o.id, o.orderName, o.orderMail, o.orderAdress, o.orderTown, o.orderPLZ, o.items, o.sizes, o.orderState, o.orderCreation));
            break;
        }
      });
    }).then(() => console.log(this.orders)).catch(error => error.message);
  }

  ngOnInit(): void {
  }

}
