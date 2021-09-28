import { Component, OnInit } from '@angular/core';
import {Customer} from '../../entity/Customer';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Router} from '@angular/router';
import {CustomerService} from '../../controller/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css']
})
export class SignUpViewComponent implements OnInit {

  customers: Customer[];
  customerMails = [];
  customerNumbers = [];
  customer: Customer;
  firstStepCheck = false;

  customerData1 = new FormGroup({
    salutation: new FormControl(null, {validators: Validators.required}),
    mail: new FormControl(null, {validators: Validators.required}),
    name: new FormControl(null, {validators: Validators.required}),
  });
  customerData2 = new FormGroup({
    town: new FormControl(null),
    phoneNumber: new FormControl(null),
    birthday: new FormControl(null)
  });

  constructor(public db: AngularFirestore,
              public router: Router,
              public customerService: CustomerService) {
    this.getAllCustomers();
  }

  ngOnInit(): void {
  }

  getAllCustomers(): void {
    this.customerService.getAllCustomers()
        .subscribe(res => {
          this.customers = res as Customer[];
          this.customerMails = [];
          this.customerNumbers = [];
          this.customers.forEach(c => {
            this.customerMails.push(c.mail);
            this.customerNumbers.push(c.customerNumber);
          });
        });
  }

  stepForward() {
    if (this.customerMails.includes(this.customerData1.value.mail)) {
      alert('Diese E-Mail-Adresse existiert bereits!');
    } else {
      this.firstStepCheck = true;
    }
}



  createCustomer() {
    let val = Math.floor(1000 + Math.random() * 9000);
    while (this.customerNumbers.includes(val)) {
      val = Math.floor(1000 + Math.random() * 9000);
      console.log('Random: ' + val);
    }
    const cd1 = this.customerData1.value;
    const cd2 = this.customerData2.value;
    const cust = new Customer(undefined, cd1.salutation, cd1.name, val, cd2.town, cd1.mail, cd2.phoneNumber, cd2.birthday, null);
    this.customerService.createCustomer(cust).then((res) => {
      if (res === true){
        this.router.navigateByUrl('/signUpCompleted');
      }
    });
  }
}
