import { Component } from '@angular/core';
import eventos from './eventos';
import { Evento } from 'src/app/components/event-card/evento.model';

@Component({
  selector: 'app-agenda-section',
  templateUrl: './agenda-section.component.html',
  styleUrls: ['./agenda-section.component.css'],
})
export class AgendaSectionComponent {
  eventos: Evento[]

  constructor() {
    this.eventos = eventos;
  }
}
