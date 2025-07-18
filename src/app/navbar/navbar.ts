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
  hoveredItemIndex: number | null = null;
  menuPosition = { left: 0, top: 0 };
  private hideTimeout: any;
  
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

  onMouseEnter(index: number, event: MouseEvent) {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    
    const target = event.currentTarget as HTMLElement;
    const isHoveringMenu = target.classList.contains('floating-menu-desktop');
    
    if (!isHoveringMenu) {
      this.hoveredItemIndex = index;
      this.calculateMenuPosition(event);
    }
  }

  hideMenu() {
    this.hoveredItemIndex = null;
  }

  private calculateMenuPosition(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    
    this.menuPosition = {
      left: rect.left + (rect.width / 2) - 200,
      top: rect.bottom + 10
    };
  }
}
