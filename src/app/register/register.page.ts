import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { RegisterData } from '../interfaces/models.interface';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(
    private auth: Auth,
    private router: Router,
    private firestore: Firestore
  ) {
    this.form = new FormGroup({
      name: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl,
      role: new FormControl,
    })
  }

  ngOnInit() {
  }

  async register() {
    console.log(this.form.value);
    if (this.form.valid) {
      const { email, password, role, name } = this.form.getRawValue();
      if (email && password && role && name) {
        console.log("voy a crear");
        const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
        
        if(userCredential) {
          await this.addUsuario(this.form.value)

          .then(() => {
            this.router.navigate(['/home'])
          })
          .catch(error => {
            console.error(error);
          })
        }
        return signInWithEmailAndPassword(this.auth, email, password);
      }
    } else {
      this.form.markAllAsTouched();
      return console.log("debe llenar");
    }
  }

  async addUsuario(user: RegisterData ) {
    var estado = false;
    console.log(user);

    const userRef = collection(this.firestore, 'usuarios');
    return addDoc(userRef, user);
  }

}