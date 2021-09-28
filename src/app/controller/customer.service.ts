import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Customer} from '../entity/Customer';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public db: AngularFirestore) { }

  createCustomer(customer: Customer): Promise<any>{
    const id = uuid();
    return this.db.collection('customers').doc(id).set({
      id,
      customerNumber: customer.customerNumber,
      salutation: customer.salutation,
      name: customer.name,
      town: customer.town,
      mail: customer.mail,
      phoneNumber: customer.phoneNumber,
      birthday: customer.birthday,
      creationDate: Date(),
      creatorType: 'employee'
    }).then(() => {
      return true;
    }, error => {
      return false;
    });
  }

  getAllCustomers(): Observable<any>{
    return this.db.collection('customers')
        .snapshotChanges()
        .pipe(map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            return data;
          });
        }));
  }

  getCustomerById(id: string): Observable<any>{
    return this.db.collection('customers').doc(id)
        .snapshotChanges()
        .pipe(map(actions => {
          return actions.payload.data();
        }));
  }

  updateCustomer(customer: Customer): Promise<any>{
    return this.db.collection('customers').doc(customer.id).set({
      id: customer.id,
      customerNumber: customer.customerNumber,
      salutation: customer.salutation,
      name: customer.name,
      town: customer.town,
      mail: customer.mail,
      phoneNumber: customer.phoneNumber,
      birthday: customer.birthday
    }).then(() => {
      return true;
    });
  }
}
