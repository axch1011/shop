import { Injectable } from '@angular/core';
import {Order} from './entity/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order = new Order(null, null, null, null, null, null, [], [],
      null, null);

  constructor() { }
}
