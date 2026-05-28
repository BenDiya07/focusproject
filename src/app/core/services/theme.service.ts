import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  toggleTheme() {
    // Dark mode removed. Keeping service for compatibility.
  }

  isDarkMode() {
    return false;
  }
}
