import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  isMenuOpen = false;
  
  navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Experts', path: '/contact' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Coaching', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'About', path: '/about' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('working')
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
