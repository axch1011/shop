import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Clothing} from '../entity/Clothing';
import {AngularFireStorage} from '@angular/fire/storage';
import 'firebase/firestore';

@Component({
  selector: 'app-edit-items-view',
  templateUrl: './edit-items-view.component.html',
  styleUrls: ['./edit-items-view.component.css']
})
export class EditItemsViewComponent implements OnInit {
  clothings: Clothing[] = [];
  currentClothing: Clothing[] = [];
  currentGender = 'woman';
  currentType = 'all';

  file: any;
  transferReady = false;
  targetFile: any;


  constructor(public dB: AngularFirestore,
              public storage: AngularFireStorage) {
    this.dB.collection('items').get().forEach(items => {
      items.forEach(item => {
        const d = item.data();
        this.clothings.push(new Clothing(d.brand, d.description, d.price, d.id, d.gender, d.sizes, d.type, d.deleted));
      });
    }).then(() => {
      this.clothings.forEach(c => {
        if (c.gender === 'woman') {
          this.currentClothing.push(c);
        }
      });
    });
  }

  ngOnInit(): void {
  }

  addItem(event, id: string) {
    const path = id + '.png';
    this.transferReady = true;
    this.targetFile = event.target.files[0];
    this.storage.upload(path, this.targetFile).then(() => {
      alert('Alles hochgeladen!');
    });
  }

  deleteItem(id: string) {
    this.dB.collection('items').doc(id).update({
      deleted: new Date()
    }).then(() => window.location.reload());
  }

  reactivateItem(id: string) {
    this.dB.collection('items').doc(id).update({
      deleted: null
    }).then(() => window.location.reload());
  }

  updateItem(id: string) {
    const firstInput: string = 'updateInputSizes' + id;
    const secondInput: string = 'updateInputPrice' + id;
    // @ts-ignore
    const firstInputValue: string = document.getElementById(firstInput).value;
    // @ts-ignore
    const secondInputValue: string = document.getElementById(secondInput).value;
    if (firstInputValue !== '' && secondInputValue === '') {
      this.dB.collection('items').doc(id).update({
        sizes: firstInputValue
      }).then(() => alert('Objekt wurde erfolgreich bearbeitet!'));
      this.currentClothing.forEach(c => {
        if (c.id === id) {
          c.sizes = firstInputValue;
        }
      });
      this.clothings.forEach(c2 => {
        if (c2.id === id) {
          c2.sizes = firstInputValue;
        }
      });
    } else if (secondInputValue !== '') {
      this.dB.collection('items').doc(id).update({
        price: secondInputValue
      }).then(() => alert('Objekt wurde erfolgreich bearbeitet!'));
      this.currentClothing.forEach(c => {
        if (c.id === id) {
          // tslint:disable-next-line:radix
          c.price = parseInt(secondInputValue);
        }
      });
      this.clothings.forEach(c2 => {
        if (c2.id === id) {
          // tslint:disable-next-line:radix
          c2.price = parseInt(secondInputValue);
        }
      });
    } else {
      this.dB.collection('items').doc(id).update({
        sizes: firstInputValue,
        price: secondInputValue
      }).then(() => alert('Objekt wurde erfolgreich bearbeitet!'));
      this.currentClothing.forEach(c => {
        if (c.id === id) {
          // tslint:disable-next-line:radix
          c.price = parseInt(secondInputValue);
          c.sizes = firstInputValue;
        }
      });
      this.clothings.forEach(c2 => {
        if (c2.id === id) {
          // tslint:disable-next-line:radix
          c2.price = parseInt(secondInputValue);
          c2.sizes = firstInputValue;
        }
      });
    }
  }

  sortItemsByGender(gender: string) {
    switch (gender) {
      case 'woman':
        this.currentGender = 'woman';
        document.getElementById('genderNavWoman').style.color = 'darkgoldenrod';
        document.getElementById('genderNavMan').style.color = 'darkgrey';
        break;
      case 'man':
        this.currentGender = 'man';
        document.getElementById('genderNavWoman').style.color = 'darkgrey';
        document.getElementById('genderNavMan').style.color = 'darkgoldenrod';
        break;
    }
    this.currentClothing = [];
    this.clothings.forEach(c => {
      if (this.currentType === 'all' && c.gender === gender) {
        this.currentClothing.push(c);
      } else if (c.gender === gender && c.type === this.currentType) {
        this.currentClothing.push(c);
      }
    });
  }

  sortItemsByType(type: string) {
    document.getElementById('typeNavAll').style.color = 'darkgrey';
    document.getElementById('typeNavTops').style.color = 'darkgrey';
    document.getElementById('typeNavJackets').style.color = 'darkgrey';
    document.getElementById('typeNavPants').style.color = 'darkgrey';
    document.getElementById('typeNavShoes').style.color = 'darkgrey';
    if (this.currentGender === 'woman'){
      document.getElementById('typeNavDress').style.color = 'darkgrey';
    }
    switch (type) {
      case 'all':
        document.getElementById('typeNavAll').style.color = 'darkgoldenrod';
        break;
      case 'tops':
        document.getElementById('typeNavTops').style.color = 'darkgoldenrod';
        break;
      case 'jackets':
        document.getElementById('typeNavJackets').style.color = 'darkgoldenrod';
        break;
      case 'pants':
        document.getElementById('typeNavPants').style.color = 'darkgoldenrod';
        break;
      case 'shoes':
        document.getElementById('typeNavShoes').style.color = 'darkgoldenrod';
        break;
      case 'dress':
        document.getElementById('typeNavDress').style.color = 'darkgoldenrod';
        break;
    }
    this.currentType = type;
    this.currentClothing = [];
    this.clothings.forEach(c => {
      if (type === 'all' && c.gender === this.currentGender) {
        this.currentClothing.push(c);
      } else if (c.gender === this.currentGender && c.type === type){
        this.currentClothing.push(c);
      }
    });
  }
}
