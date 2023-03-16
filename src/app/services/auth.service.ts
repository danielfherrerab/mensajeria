import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor( private auth: Auth, private firestore: Firestore) {}

  authState$ = authState(this.auth);

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return await signOut(this.auth);
  }

}