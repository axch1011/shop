import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-brand-list-view',
  templateUrl: './brand-list-view.component.html',
  styleUrls: ['./brand-list-view.component.css']
})
export class BrandListViewComponent implements OnInit {

  brands: string[] = [];
  newBrand: string;

  constructor(public db: AngularFirestore) {
    this.db.collection('metadata').doc('website').get().forEach(data => {
      const d = data.data();
      this.brands = d.brands;
      this.brands.sort((a, b) => {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        return 0;
      });
    });
  }

  ngOnInit(): void {
  }

  createBrand() {
    if (!this.brands.includes(this.newBrand)) {
      this.brands.push(this.newBrand);
      this.db.collection('metadata').doc('website').update({
        brands: this.brands
      }).then(() => console.log('Marke wurde erfolgreich angelegt!'));
    } else {
      alert('Diese Marke existiert bereits!');
    }
    console.log(this.brands);
  }

}
