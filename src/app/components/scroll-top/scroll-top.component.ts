import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 399) {
        document.getElementById('scrTop').style.display = 'block';
      } else {
        document.getElementById('scrTop').style.display = 'none';
      }
    });
  }

  scrollTop(): void {
    window.scrollTo(0, 0);
  }
}
