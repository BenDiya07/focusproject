import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si on défile de plus de 50px, on active le mode "scrolled"
    this.isScrolled = window.scrollY > 50;
  }
}