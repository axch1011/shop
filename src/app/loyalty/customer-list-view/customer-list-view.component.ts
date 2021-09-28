import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Customer} from '../../entity/Customer';
import {CustomerService} from '../../controller/customer.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css']
})
export class CustomerListViewComponent implements OnInit {

  customers: Customer[] = [];

  constructor(public customerService: CustomerService) {
    this.getAllCustomers();
  }

  ngOnInit(): void {
  }

  getAllCustomers(): void {
    this.customerService.getAllCustomers()
        .subscribe(res => {
          this.customers = res as Customer[];
          this.customers.forEach(c => {
              if (c.id === undefined){ c.id = c.customerNumber.toString(); }
          })
          this.customers.sort((a, b) => b.customerNumber - a.customerNumber).reverse();
        });
  }

}
