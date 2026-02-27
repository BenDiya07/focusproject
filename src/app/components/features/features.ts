import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Timer } from '../timer/timer';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-features',
  imports: [CommonModule, RouterModule],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  // On définit les données
private router = inject(Router); // Plus moderne que le constructor

  readonly features = [
    { 
      type: 'lecture',
      title: 'Lecture', 
      subtitle: '01',
      icon: 'images/desk_401636.png', 
      desc: 'Optimisez votre temps de lecture avec nos techniques de scan rapide.', 
      dark: true 
    },
    { 
      type: 'timer',
      title: 'Concentration', 
      subtitle: '02',
      icon: 'images/focus_4185551.png', 
      desc: '', // Pas besoin de desc ici, le timer prend la place
      dark: false 
    },
    { 
      type: 'analytics',
      title: 'Improve', 
      subtitle: '03',
      icon: 'images/development_3195171.png', 
      desc: 'Analysez vos progrès et ajustez vos habitudes au fil des jours.', 
      dark: false 
    }
  ];

  onNavigate(type: string) {
    const route = type === 'lecture' ? 'library' : 'dashboard';
    this.router.navigate([route]);
  }
}