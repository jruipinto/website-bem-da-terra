import { Component, Input } from '@angular/core';
import { Evento } from './evento.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent {
  @Input() evento: Evento;
  constructor() {}
}
