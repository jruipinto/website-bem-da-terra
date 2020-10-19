import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @Input() images: string[];
  viewInited = false;

  constructor() {}

  ngAfterViewInit(): void {
    this.viewInited = true;
  }
}
