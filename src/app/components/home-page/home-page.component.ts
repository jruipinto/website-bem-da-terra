import { Component } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private nav: NavbarService) {}

  closeMenu(): void {
    this.nav.closeMenu();
  }
}
