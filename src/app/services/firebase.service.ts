import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  
  createOrder(data: any) {

    const userRef = collection(this.firestore, 'usuarios');
    return addDoc(userRef, data);

  }

  // getId() {
  //   return this.firestore.createId();
  // }

  // getCollection<tipo>(path: string) {

  //   const collection = this.firestore.collection<tipo>(path);
  //   return collection.valueChanges();

  // }

  // getDoc<tipo>(path: string, id: string) {
  //  return this.firestore.collection(path).doc<tipo>(id).valueChanges()
  // }

  // updateDoc(path: string, id: string, data: any) {
  //   return  this.firestore.collection(path).doc(id).update(data);
  // }
}
