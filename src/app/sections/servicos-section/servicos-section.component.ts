import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-section',
  templateUrl: './servicos-section.component.html',
  styleUrls: ['./servicos-section.component.css']
})
export class ServicosSectionComponent implements OnInit {
  images = [
    { path: 'https://source.unsplash.com/800x600/?wild-river' },
    { path: 'https://source.unsplash.com/800x600/?rainforest' },
    { path: 'https://source.unsplash.com/800x600/?butterfly' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
