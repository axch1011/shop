import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Purchase} from '../../entity/Purchase';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(public db: AngularFirestore) { }

  getAllPurchases(): Observable<any[]> {
    return this.db.collection('purchases')
        .snapshotChanges()
        .pipe(map(actions => {
          return actions.map(a => {
            const d = a.payload.doc.data();
            return d;
          });
        }));
  }
}
