import { Component, OnInit } from '@angular/core';
import {Customer} from '../../entity/Customer';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Router} from '@angular/router';
import { v4 as uuid } from 'uuid';
import {CustomerService} from '../../controller/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer-view',
  templateUrl: './create-customer-view.component.html',
  styleUrls: ['./create-customer-view.component.css']
})
export class CreateCustomerViewComponent implements OnInit {

  customers: Customer[] = [];
  customerMails = [];
  customerNumbers = [];

  customerData = new FormGroup({
      customerNumber: new FormControl(null, {validators: [Validators.required]}),
      customerSalutation: new FormControl(null, {validators: [Validators.required]}),
      customerName: new FormControl(null, {validators: [Validators.required]}),
      customerMail: new FormControl(null),
      customerTown: new FormControl(null),
      customerAdress: new FormControl(null),
      customerPhoneNumber: new FormControl(null),
      customerBirthday: new FormControl(null),
  });

  constructor(public db: AngularFirestore,
              public router: Router,
              public customerService: CustomerService) {
    this.getAllCustomers();
  }

  ngOnInit(): void {
  }

  getAllCustomers(): void{
    this.customerService.getAllCustomers()
        .subscribe(res => {
          this.customers = res as Customer[];
          this.customerMails = [];
          this.customerNumbers = [];
          this.customers.forEach(c => {
            this.customerMails.push(c.mail);
            this.customerNumbers.push(c.customerNumber);
          })
        });
  }

  createCustomer() {
      const data = this.customerData.value;
      const customer = new Customer(undefined, data.customerSalutation, data. customerName, data.customerNumber, data.customerTown,
          data.customerMail, data.customerPhoneNumber, data.customerBirthday, data.customerAdress);
      this.customerService.createCustomer(customer).then((res) => {
      if (res === true) {
        this.router.navigateByUrl('/createCustomerCompleted/' + customer.customerNumber);
      }
    });
  }
}
