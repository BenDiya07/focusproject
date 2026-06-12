import { effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  // Instance audio native du navigateur
  private audio = new Audio();

  // Signal stockant le son actuellement actif ou null s'il n'y a pas de son
  activeSound = signal<string | null>(null);

 // Signal indiquant si un son est en cours de lecture
  isPlaying = signal<boolean>(false);

  // Signal pour le volume actuel, par défaut à 50%
  volume = signal<number>(0.5);

  // Liste des chemins vers les fichiers audio disponibles
  private soundPaths: Record<string, string> = {
    rain: 'sounds/rain.mp3',
    cafe: 'sounds/cafe.mp3',
    forest: 'sounds/forest.mp3',
    lofi: 'sounds/lofi.mp3'
  };

  constructor() {
    // Synchronise automatiquement le volume dès que le signal change
    effect(() => {
      this.audio.volume = this.volume();
    });
  }

  // Retourne la liste des sons disponibles pour l'interface
  get availableSounds(): string[] {
    return Object.keys(this.soundPaths);
  }

  // Lance la lecture d'un son ou arrête le son déjà actif si on reclique dessus
  play(sound: string): void {
    if (this.activeSound() === sound) {
      this.stop();
      return;
    }

    // Met en pause le son courant avant de charger le nouveau
    this.audio.pause();

    // Définit le fichier audio à jouer
    this.audio.src = this.soundPaths[sound];
    this.audio.loop = true; // Lecture en boucle

    // Lance la lecture et capture les erreurs éventuelles
    this.audio.play().catch(err => {
      console.error('Erreur lors de la lecture du son :', err);
    });

    // Marque le son comme actif
    this.activeSound.set(sound);
    this.isPlaying.set(true);
  }

  // Reprend la lecture sans changer le son ni toggler
  resume(): void {
    if (this.activeSound()) {
      this.audio.play();
      this.isPlaying.set(true);
    }
  }

  // Met le son en pause
  togglePause(): void {
    // Basculer entre la lecture et la pause
    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying.set(true);
    } else {
      this.audio.pause();
      this.isPlaying.set(false);
    }
  }

  // Met en pause (explicite pour le bouton Pause)
  pause(): void {
    this.audio.pause();
    this.isPlaying.set(false);
  }

  // Arrête la lecture audio en cours
  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0; // Réinitialise la position de lecture

    this.activeSound.set(null); // Marque le son comme inactif
    this.isPlaying.set(false); // Met à jour le signal isPlaying
  }

  // Modifie le volume et l'applique immédiatement à l'instance audio
  setVolume(val: number): void {
    this.volume.set(val); // Met à jour le signal de volume
  }
}
