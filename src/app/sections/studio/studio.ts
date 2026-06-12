import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core'; // Ajoute AfterViewInit
import { animate, stagger } from 'animejs';
import { ButtonModule } from 'primeng/button';
import { Timer } from "../../components/timer/timer";
import { AudioService } from '../../core/services/audio.service';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [CommonModule, Timer, ButtonModule],
  templateUrl: './studio.html',
  styleUrl: './studio.scss'
})
export class Studio implements OnInit, AfterViewInit {
  ngOnInit() {
    // Force le scroll en haut dès que le composant est chargé
    window.scrollTo(0, 0);
  }
  public audioService = inject(AudioService);
  readonly sounds = this.audioService.availableSounds;

  private readonly soundDetails: Record<string, { emoji: string; name: string }> = {
    rain: { emoji: '🌧️', name: 'Pluie douce' },
    cafe: { emoji: '☕', name: 'Cafétéria' },
    forest: { emoji: '🌲', name: 'Forêt' },
    lofi: { emoji: '🎧', name: 'Lofi Beat' },
  };

  //  Animation d'entrée quand on arrive sur la page
ngAfterViewInit() {
  animate(
    '.sound-card',
    {
    
    scale: [0.9, 1],
    opacity: [0, 1],
    translateY: [20, 0],
    delay: stagger(100),
    easing: 'easeOutExpo',
    duration: 800
  });
}

  //  Animation boostée quand on clique sur une musique
 play(sound: string, element?: HTMLElement) {
  this.audioService.play(sound);

  if (this.audioService.activeSound() === sound && element) {
    animate(
      element,
      {
      
      scale: [1, 1.05, 1],
      duration: 400,
      easing: 'easeInOutQuad'
    });
  }
}

  getEmoji(sound: string): string { return this.soundDetails[sound]?.emoji || '🎵'; }
  getName(sound: string): string { return this.soundDetails[sound]?.name || sound; }
  
  updateVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.audioService.setVolume(parseFloat(input.value));
  }

  get volume() { return this.audioService.volume(); }
}