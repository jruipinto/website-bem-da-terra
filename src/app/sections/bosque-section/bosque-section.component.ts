import { Component } from '@angular/core';

@Component({
  selector: 'app-bosque-section',
  templateUrl: './bosque-section.component.html',
  styleUrls: ['./bosque-section.component.css'],
})
export class BosqueSectionComponent {
  images = [
    { path: 'assets/bosque-1.jpg' },
    { path: 'assets/bosque-2.jpg' },
    { path: 'assets/bosque-3.jpg' },
    { path: 'assets/bosque-4.jpg' },
    { path: 'assets/bosque-5.jpg' },
    { path: 'assets/bosque-6.jpg' },
    { path: 'assets/bosque-7.jpg' },
    { path: 'assets/bosque-8.jpg' },
    { path: 'assets/bosque-9.jpg' }
  ];

  constructor() {}
}
