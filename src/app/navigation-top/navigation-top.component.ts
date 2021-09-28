import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.css']
})
export class NavigationTopComponent implements OnInit {

  orderItems = 0;

  constructor(public router: Router,
              public orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderItems = this.orderService.order.items.length;
  }

  goToCheckout() {
    this.router.navigateByUrl('checkout');
  }

}
