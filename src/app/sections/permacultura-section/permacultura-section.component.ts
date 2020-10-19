import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permacultura-section',
  templateUrl: './permacultura-section.component.html',
  styleUrls: ['./permacultura-section.component.css'],
})
export class PermaculturaSectionComponent implements OnInit {
  images = [
    { path: 'assets/design-permacultura-1.jpg' },
    { path: 'assets/design-permacultura-2.jpg' },
    { path: 'assets/design-permacultura-3.jpg' },
    { path: 'assets/design-permacultura-4.jpg' },
    { path: 'assets/design-permacultura-5.jpg' },
    { path: 'assets/design-permacultura-6.jpg' },
    { path: 'assets/design-permacultura-7.jpg' },
    { path: 'assets/design-permacultura-8.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
