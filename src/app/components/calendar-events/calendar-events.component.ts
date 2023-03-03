import { Component, OnInit } from '@angular/core';
import {
    Notifications,
    setOptions
    , localeEs
} from '@mobiscroll/angular';

setOptions({
    locale: localeEs,
    theme: 'ios',
    themeVariant: 'light'
});

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.scss'],
  providers: [Notifications]
})
export class CalendarEventsComponent implements OnInit {

    options = {
        display: 'inline',
        view: {
          calendar: {
            labels: true,
          },
        },
        data: [
          {
            start: new Date(2022, 0, 2),
            end: new Date(2022, 0, 3),
            text: 'My Event',
            color: '#F44336',
          },
        ],
      };
    
      constructor() {}
    
      ngOnInit() {}
    }