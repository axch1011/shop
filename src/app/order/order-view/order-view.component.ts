import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../entity/Order';
import {Clothing} from '../../entity/Clothing';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  order: Order = new Order(null, null, null, null, null, null,
      [], [], null, null);
  items: Clothing[] = [];

  constructor(public db: AngularFirestore,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    const id = this.route.snapshot.paramMap.get('id');
    this.db.collection('orders').doc(id).get().forEach(item => {
      const d = item.data();
      this.order = new Order(d.id, d.orderName, d.orderMail, d.orderAdress, d.orderTown, d.orderPLZ,
          d.items, d.sizes, d.orderState, d.orderCreation);
    }).then(() => {
      this.order.items.forEach(i => {
        this.db.collection('items').doc(i).get().forEach(e => {
          const d = e.data();
          this.items.push(new Clothing(d.brand, d.description, d.price, d.id, d.gender, d.sizes, d.type, d.deleted));
        });
      });
    });
  }

  setOrderState(type: string) {
    switch (type) {
      case 'in Bearbeitung':
        this.db.collection('orders').doc(this.order.id).update({
          orderState: type
        }).then(() => {
          alert('Bestellung wurde in Bearbeitung gesetzt!');
          window.location.reload();
        });
        break;
      case 'Versandt':
        this.db.collection('orders').doc(this.order.id).update({
          orderState: type
        }).then(() => {
          alert('Bestellung wurde als gesendet gesetzt!');
          window.location.reload();
        });
        break;
      case 'Abgeschlossen':
        this.db.collection('orders').doc(this.order.id).update({
          orderState: type
        }).then(() => {
          alert('Bestellung abgeschlossen!');
          window.location.reload();
        });
        break;
    }
  }
}
