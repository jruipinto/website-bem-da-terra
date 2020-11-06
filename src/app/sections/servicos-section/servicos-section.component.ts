import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-section',
  templateUrl: './servicos-section.component.html',
  styleUrls: ['./servicos-section.component.css'],
})
export class ServicosSectionComponent implements OnInit {
  images = [
    { path: 'assets/servicos-1.jpg' },
    { path: 'assets/servicos-2.jpg' },
    { path: 'assets/servicos-3.jpg' },
    { path: 'assets/servicos-4.jpg' },
    { path: 'assets/servicos-5.jpg' },
    { path: 'assets/servicos-6.jpg' },
    { path: 'assets/servicos-7.jpg' },
    { path: 'assets/servicos-8.jpg' },
    { path: 'assets/servicos-9.jpg' },
    { path: 'assets/servicos-10.jpg' },
    { path: 'assets/servicos-11.jpg' },
    { path: 'assets/servicos-12.jpg' },
    { path: 'assets/servicos-13.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
