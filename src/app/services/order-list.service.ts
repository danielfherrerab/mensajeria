import { Injectable } from '@angular/core';
import { collectionData, Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OrderData } from '../interfaces/models.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private firestore: Firestore) {}

  getOrders(): Observable<OrderData[]>{
    const encargoRef = collection(this.firestore, 'encargos');
    return collectionData(encargoRef, { idField: 'id' }) as Observable<OrderData[]>;
  }

  addOrder(order: OrderData) {
    const encargoRef = collection(this.firestore, 'encargos');
    return addDoc(encargoRef, order); // add the order object to the encargoRef collection
  }
}
