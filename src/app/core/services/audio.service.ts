import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private audio = new Audio();
  activeSound = signal<string | null>(null);
  volume = signal<number>(0.5);

  private soundPaths: Record<string, string> = {
    rain: 'sounds/rain.mp3',
    cafe: 'sounds/cafe.mp3',
    forest: 'sounds/forest.mp3',
    lofi: 'sounds/lofi.mp3'
  };

  get availableSounds(): string[] {
    return Object.keys(this.soundPaths);
  }

  play(sound: string): void {
    if (this.activeSound() === sound) {
      this.stop();
      return;
    }

    this.audio.pause();
    this.audio.src = this.soundPaths[sound];
    this.audio.loop = true;
    this.audio.volume = this.volume();
    this.audio.play().catch(err => {
      console.error('Erreur lors de la lecture du son :', err);
    });
    this.activeSound.set(sound);
  }

  stop(): void {
    this.audio.pause();
    this.activeSound.set(null);
  }

  setVolume(val: number): void {
    this.volume.set(val);
    this.audio.volume = val;
  }
}
