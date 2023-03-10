import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationPage } from './location.page';

const routes: Routes = [
  {
    path: '',
    component: LocationPage
  }
];

@NgModule({
  imports: [ 
    FormsModule, 
    MbscModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationPageRoutingModule {}
