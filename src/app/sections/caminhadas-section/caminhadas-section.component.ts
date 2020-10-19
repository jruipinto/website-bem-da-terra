import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caminhadas-section',
  templateUrl: './caminhadas-section.component.html',
  styleUrls: ['./caminhadas-section.component.css'],
})
export class CaminhadasSectionComponent implements OnInit {
  images = [
    { path: 'assets/caminhadas-sensoriais-1.jpg' },
    { path: 'assets/caminhadas-sensoriais-2.jpg' },
    { path: 'assets/caminhadas-sensoriais-3.jpg' },
    { path: 'assets/caminhadas-sensoriais-4.jpg' },
    { path: 'assets/caminhadas-sensoriais-5.jpg' },
    { path: 'assets/caminhadas-sensoriais-6.jpg' },
    { path: 'assets/caminhadas-sensoriais-7.jpg' },
    { path: 'assets/caminhadas-sensoriais-8.jpg' },
    { path: 'assets/caminhadas-sensoriais-9.jpg' },
    { path: 'assets/caminhadas-sensoriais-10.jpg' },
    { path: 'assets/caminhadas-sensoriais-11.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
