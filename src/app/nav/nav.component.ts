import { Component } from '@angular/core';

@Component({
  selector: '.nav_c',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  links = [{ link: '#', name: 'About', id: 'about' },
  { link: '#', name: 'Menu', id: 'menu' },
  { link: '#', name: 'Gallery', id: 'gallery' },
  { link: '#', name: 'Contact', id: 'contact' }];

  constructor() { }

}
