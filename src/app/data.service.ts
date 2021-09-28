import { Injectable } from '@angular/core';

import 'firebase/firestore';
import {AngularFirestore} from '@angular/fire/firestore';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public db: AngularFirestore) {
  }

  createUser(user: User) {
    const id = uuid.v4();
    this.db.collection('users').doc(id).set({
      id,
      name: user.name,
      prename: user.prename,
      mail: user.mail,
      plz: user.plz
    }).then( () => {
      console.log('User wurde angelegt');
      }
    ).catch( () => console.log('User wurde nicht angelegt'));
  }
}
