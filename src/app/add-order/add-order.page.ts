import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})

export class AddOrderPage implements OnInit{

  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore,) {
    this.orderForm = this.fb.group({
      descripcion: ['', Validators.required],
      fechaRequerida: ['', Validators.required],
      estado: ['', Validators.required],
      visto: [false, Validators.required],
      prioridad: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    const data = this.orderForm.value;
    this.firestore
      .collection('encargos')
      .add(data)
      .then(() => {
        console.log('Documento agregado con éxito!');
        this.orderForm.reset();
      })
      .catch((error) => {
        console.error('Error al agregar el documento: ', error);
      });
  }

}
