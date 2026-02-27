import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studio.html',
  styleUrl: './studio.scss'
})
export class Studio {
  // On injecte le service pour l'utiliser dans le HTML
  public audioService = inject(AudioService);

  // On expose les sons disponibles pour itérer dans le template
  readonly sounds = this.audioService.availableSounds;

  // On centralise les détails des sons pour un code plus propre et maintenable
  private readonly soundDetails: Record<string, { emoji: string; name: string }> = {
    rain: { emoji: '🌧️', name: 'Pluie douce' },
    cafe: { emoji: '☕', name: 'Cafétéria' },
    forest: { emoji: '🌲', name: 'Forêt' },
    lofi: { emoji: '🎧', name: 'Lofi Beat' },
  };

  // Méthodes pour l'affichage
  getEmoji(sound: string): string {
    return this.soundDetails[sound]?.emoji || '🎵';
  }

  getName(sound: string): string {
    return this.soundDetails[sound]?.name || sound;
  }

  // Méthodes d'action
  play(sound: string) {
    this.audioService.play(sound);
  }

  updateVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.audioService.setVolume(parseFloat(input.value));
  }

  // Getter pour simplifier l'accès au volume dans le HTML
  get volume() {
    return this.audioService.volume();
  }
}