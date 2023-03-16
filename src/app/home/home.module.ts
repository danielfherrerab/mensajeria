import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
// import { CalendarEventsComponent } from '../components/calendar-events/calendar-events.component';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // CalendarEventsComponent
  ],
  declarations: [HomePage, ],
  // exports: [CalendarEventsComponent]
})
export class HomePageModule {}
