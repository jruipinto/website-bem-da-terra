import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-cta',
  templateUrl: './button-cta.component.html',
  styleUrls: ['./button-cta.component.css'],
})
export class ButtonCtaComponent {
  @Input() href = '#contactos';
}
