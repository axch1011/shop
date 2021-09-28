import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-current-news-view',
  templateUrl: './current-news-view.component.html',
  styleUrls: ['./current-news-view.component.css']
})
export class CurrentNewsViewComponent implements OnInit {

  aktuellesText = '';
  aktuellesActive = true;

  constructor(public db: AngularFirestore) {
    this.db.collection('metadata').doc('website').get().forEach(data => {
      const d = data.data();
      this.aktuellesText = d.aktuellesText;
      this.aktuellesActive = d.aktuellesActivated;
    }).then(() => console.log(this.aktuellesActive));
  }

  ngOnInit(): void {
  }

  deactivateNews() {
    this.aktuellesActive = false;
  }

  publishNews() {
    if (this.aktuellesText.length !== 0) {
      this.aktuellesActive = true;
      this.db.collection('metadata').doc('website').update({
        aktuellesText: this.aktuellesText,
        aktuellesActive: this.aktuellesActive
      }).then(() => alert('Neuigkeiten wurden auf der Website publiziert!' + this.aktuellesText));
    }
  }

}
