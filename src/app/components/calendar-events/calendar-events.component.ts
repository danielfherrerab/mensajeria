import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.scss'],
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
            color: '#F44356',
          },
        ],
      };
    
      constructor() {}
    
      ngOnInit() {}
    }