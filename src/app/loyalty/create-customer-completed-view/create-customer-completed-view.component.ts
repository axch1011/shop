import { Component, OnInit } from '@angular/core';
import {Customer} from '../../entity/Customer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-customer-completed-view',
  templateUrl: './create-customer-completed-view.component.html',
  styleUrls: ['./create-customer-completed-view.component.css']
})
export class CreateCustomerCompletedViewComponent implements OnInit {

  customerNumber = '';

  constructor(public aR: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomerNumber();
  }

  getCustomerNumber() {
    this.customerNumber = this.aR.snapshot.paramMap.get('id');
  }

}
