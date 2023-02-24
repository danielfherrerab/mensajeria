import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrderPageRoutingModule } from './add-order-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { AddOrderPage } from './add-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddOrderPage]
})
export class AddOrderPageModule {}
