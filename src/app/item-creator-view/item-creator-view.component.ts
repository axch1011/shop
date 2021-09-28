import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import 'firebase/storage';
import {Clothing} from '../entity/Clothing';
import { v4 as uuid } from 'uuid';



@Component({
  selector: 'app-item-creator-view',
  templateUrl: './item-creator-view.component.html',
  styleUrls: ['./item-creator-view.component.css']
})
export class ItemCreatorViewComponent implements OnInit {

  clothing: Clothing = new Clothing(null, null, null, null, null, null, null, null);
  file: any;
  transferReady = false;
  id: string;
  targetFile: any;
  workInProgress = false;

  constructor(public db: AngularFirestore,
              public storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  addItem(event) {
    this.transferReady = true;
    this.targetFile = event.target.files[0];
  }

  addItemToDatabase() {
    this.workInProgress = true;
    const id: string = uuid();
    console.log(id);
    this.db.collection('items').doc(id).set({
      brand: this.clothing.brand,
      description: this.clothing.description,
      price: this.clothing.price,
      id,
      gender: this.clothing.gender,
      sizes: this.clothing.sizes,
      type: this.clothing.type,
      verified: false,
      creationDate: Date()
    }).then(() => {

      const path = id + '.png';
      this.storage.upload(path, this.targetFile).then(() => {
        this.workInProgress = false;
        alert('Alles hochgeladen!');
        window.location.reload();
      }).catch((error) => alert(error.message));
    });
  }
}
