import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  navbarOpened = false;

  constructor() {}

  closeMenu(): void {
    const elMenuSwitch = document.getElementById('menu_switch');
    const elMenu = document.getElementById('menu');
    const elNavbar = document.getElementById('navbar');
    const w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (w > 1024) {
      return;
    }
    if (this.navbarOpened) {
      elNavbar.style.animation =
        'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';

      elNavbar.style.overflowY = 'hidden';
      elNavbar.scrollTop = 0;
      elMenuSwitch.style.animation = 'fade-in 0.3s ease-out both';
      elMenu.style.animation =
        'slide-bottom-0 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
      this.navbarOpened = false;
    }
  }

  openMenu(): void {
    const elMenuSwitch = document.getElementById('menu_switch');
    const elMenu = document.getElementById('menu');
    const elNavbar = document.getElementById('navbar');
    const w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (w > 1024) {
      return;
    }
    elNavbar.style.animation =
      'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    elNavbar.style.overflowY = 'auto';
    elMenu.style.animation =
      'slide-top-0 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    setTimeout(() => {
      elMenuSwitch.style.animation = 'fade-out 0.1s ease-out both';
    }, 100);
    this.navbarOpened = true;
  }
}
