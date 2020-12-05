import { Component } from '@angular/core';
import { Evento } from '../../components/event-card/evento.model';

@Component({
  selector: 'app-agenda-section',
  templateUrl: './agenda-section.component.html',
  styleUrls: ['./agenda-section.component.css'],
})
export class AgendaSectionComponent {
  eventos: Evento[] = [
    {
      href: 'https://www.facebook.com/events/287568325661644/',
      imgSrc: 'assets//agenda-1.jpg',
      imgAlt: 'cartaz para evento 1',
    },
    {
      href: 'https://www.facebook.com/events/135515784714015/',
      imgSrc: 'assets/agenda-2.jpg',
      imgAlt: 'cartaz para evento 2',
    },
    {
      href: 'https://www.facebook.com/events/859364218134076/',
      imgSrc: 'assets/agenda-3.jpg',
      imgAlt: 'cartaz para evento 3',
    },
    {
      href: 'https://www.facebook.com/events/2712671838972902/',
      imgSrc: 'assets/agenda-4.jpg',
      imgAlt: 'cartaz para evento 4',
    },
    {
      href: 'https://www.facebook.com/events/1745236022301162/',
      imgSrc: 'assets/agenda-5.jpg',
      imgAlt: 'cartaz para evento 5',
    },
    {
      href: 'https://www.facebook.com/events/292392582095000/',
      imgSrc: 'assets/agenda-6.jpg',
      imgAlt: 'cartaz para evento 6',
    },
    {
      href: 'https://www.facebook.com/events/388079149299431/',
      imgSrc: 'assets/agenda-7.jpg',
      imgAlt: 'cartaz para evento 7',
    },
    {
      href: 'https://www.facebook.com/events/828130091317780/',
      imgSrc: 'assets/agenda-8.jpg',
      imgAlt: 'cartaz para evento 8',
    },
    {
      href: 'https://www.facebook.com/events/213386796823494/',
      imgSrc: 'assets/agenda-9.jpg',
      imgAlt: 'cartaz para evento 9',
    },
  ];
  constructor() {}
}
