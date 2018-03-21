import { Component } from '@angular/core';

@Component({
  selector: '.slider_c',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent {

  slides = [{ name: 'First slide', img_link: '/assets/brand/knife.png' },
  { name: 'Second slide', img_link: '/assets/brand/knife.png' },
  { name: 'Third slide', img_link: '/assets/brand/knife.png' },
  ];

  constructor() { }

  setActiveSlide(i: number) {
    if (i === 0) {
      return ' active';
    } else {
      return '';
    }
  }

}
