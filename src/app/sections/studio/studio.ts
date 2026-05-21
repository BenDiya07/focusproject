import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core'; // Ajoute AfterViewInit
import { animate, stagger } from 'animejs';
import { Timer } from "../../components/timer/timer";
import { AudioService } from '../../core/services/audio.service';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [CommonModule, Timer],
  templateUrl: './studio.html',
  styleUrl: './studio.scss'
})
export class Studio implements AfterViewInit {
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

  // 1️⃣ Animation d'entrée quand on arrive sur la page
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

  // 2️⃣ Animation boostée quand on clique sur une musique
 play(sound: string) {
  this.audioService.play(sound);

  if (this.audioService.activeSound() === sound) {
    animate(
      `.sound-card.active`,
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