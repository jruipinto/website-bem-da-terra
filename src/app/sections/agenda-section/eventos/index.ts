import { Evento } from 'src/app/components/event-card/evento.model';
import { evento1 } from './descriptions/evento1';
import { evento2 } from './descriptions/evento2';
import { evento3 } from './descriptions/evento3';
import { evento4 } from './descriptions/evento4';
import { evento5 } from './descriptions/evento5';

const eventos: Evento[] = [
  {
    description: evento1,
    href: 'https://forms.gle/NYpsXGRY61ttT6HCA',
    imgSrc: 'assets/agenda-1.jpg',
    imgAlt: 'cartaz para evento 1',
  },
  {
    description: evento2,
    href: 'https://forms.gle/NYpsXGRY61ttT6HCA',
    imgSrc: 'assets/agenda-2.jpg',
    imgAlt: 'cartaz para evento 2',
  },
  {
    description: evento3,
    href: 'https://forms.gle/RKguULbYakc3a7oV9',
    imgSrc: 'assets/agenda-3.jpg',
    imgAlt: 'cartaz para evento 3',
  },
  {
    description: evento4,
    href: null,
    imgSrc: 'assets/agenda-4.jpg',
    imgAlt: 'cartaz para evento 4',
  },
  {
    description: evento5,
    href: null,
    imgSrc: 'assets/agenda-5.jpg',
    imgAlt: 'cartaz para evento 5',
  },
];

export default eventos

