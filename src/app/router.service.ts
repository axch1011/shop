import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(public router: Router) { }

  routeToUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
