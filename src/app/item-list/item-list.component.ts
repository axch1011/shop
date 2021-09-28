import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Clothing} from '../entity/Clothing';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  colthings: Clothing[] = [];
  cuttentClothings: Clothing[] = [];
  currentGender = 'woman';
  currentType = 'all';

  constructor(public dB: AngularFirestore) {
    this.dB.collection('items').get().forEach(items => {
      items.forEach(item => {
        const d = item.data();
        if (d.deleted === undefined || d.deleted === null) {
          this.colthings.push(new Clothing(d.brand, d.description, d.price, d.id, d.gender, d.sizes, d.type, d.deleted, d.verified));
        }
      });
    }).then(() => {
      this.colthings.forEach(c => {
        if (c.gender === 'woman') {
          this.cuttentClothings.push(c);
        }
      });
    });
  }

  ngOnInit(): void {
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
    this.cuttentClothings = [];
    this.colthings.forEach(c => {
      if (this.currentType === 'all' && c.gender === gender) {
        this.cuttentClothings.push(c);
      } else if (c.gender === gender && c.type === this.currentType) {
        this.cuttentClothings.push(c);
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
    this.cuttentClothings = [];
    this.colthings.forEach(c => {
      if (type === 'all' && c.gender === this.currentGender) {
        this.cuttentClothings.push(c);
      } else if (c.gender === this.currentGender && c.type === type){
        this.cuttentClothings.push(c);
      }
    });
  }
}
