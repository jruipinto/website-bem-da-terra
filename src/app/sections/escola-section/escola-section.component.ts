import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escola-section',
  templateUrl: './escola-section.component.html',
  styleUrls: ['./escola-section.component.css'],
})
export class EscolaSectionComponent implements OnInit {
  images = [
    { path: 'assets/escola-bem-da-terra-1.jpg' },
    { path: 'assets/escola-bem-da-terra-2.jpg' },
    { path: 'assets/escola-bem-da-terra-3.jpg' },
    { path: 'assets/escola-bem-da-terra-4.jpg' },
    { path: 'assets/escola-bem-da-terra-5.jpg' },
    { path: 'assets/escola-bem-da-terra-6.jpg' },
    { path: 'assets/escola-bem-da-terra-7.jpg' },
    { path: 'assets/escola-bem-da-terra-8.jpg' },
    { path: 'assets/escola-bem-da-terra-9.jpg' },
    { path: 'assets/escola-bem-da-terra-10.jpg' },
    { path: 'assets/escola-bem-da-terra-11.jpg' },
    { path: 'assets/escola-bem-da-terra-12.jpg' },
    { path: 'assets/escola-bem-da-terra-13.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
