import { Component } from '@angular/core';
import { NavLink } from './nav-link.model';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar-animations.css']
})
export class NavbarComponent {
  navList: NavLink[] = [
    {
      href: '#permacultura',
      description: 'Design em permacultura'
    },
    {
      href: '#ecoalfabetização',
      description: 'Escola bem da terra'
    },
    {
      href: '#caminhadas_sensoriais',
      description: 'Caminhadas sensoriais'
    },
    {
      href: '#bosque_de_alimentos',
      description: 'Bosque de alimentos'
    },
    {
      href: '#contactos',
      description: 'Contactos'
    }
  ];
  constructor(private nav: NavbarService) {}

  closeMenu(): void {
    this.nav.closeMenu();
  }

  openMenu(): void {
    this.nav.openMenu();
  }
}
