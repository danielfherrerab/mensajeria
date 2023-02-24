import { Injectable } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
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
}
