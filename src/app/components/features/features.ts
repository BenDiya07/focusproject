import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Timer } from '../timer/timer';

@Component({
  selector: 'app-features',
  imports: [Timer, CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  // On définit les données
readonly features = [
  { 
    title: 'Lecture', 
    subtitle: '01',
    icon: '/images/desk_401636.png', 
    desc: 'Optimisez votre temps de lecture avec nos techniques de scan rapide.', 
    dark: true 
  },
  { 
    title: 'Concentration', 
    subtitle: '02',
    icon: '/images/focus_4185551.png', 
    desc: 'Le cœur de votre productivité. Gérez vos cycles de travail sans effort.', 
    dark: false 
  },
  { 
    title: 'Improve', 
    subtitle: '03',
    icon: '/images/development_3195171.png', 
    desc: 'Analysez vos progrès et ajustez vos habitudes au fil des jours.', 
    dark: false 
  }
]
}
