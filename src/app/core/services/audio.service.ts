import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  // Instance audio native du navigateur
  private audio = new Audio();

  // Signal stockant le son actuellement actif ou null s'il n'y a pas de son
  activeSound = signal<string | null>(null);

  // Signal pour le volume actuel, par défaut à 50%
  volume = signal<number>(0.5);

  // Liste des chemins vers les fichiers audio disponibles
  private soundPaths: Record<string, string> = {
    rain: 'sounds/rain.mp3',
    cafe: 'sounds/cafe.mp3',
    forest: 'sounds/forest.mp3',
    lofi: 'sounds/lofi.mp3'
  };

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
    this.audio.volume = this.volume(); // Applique le volume actuel

    // Lance la lecture et capture les erreurs éventuelles
    this.audio.play().catch(err => {
      console.error('Erreur lors de la lecture du son :', err);
    });

    // Marque le son comme actif
    this.activeSound.set(sound);
  }

  // Arrête la lecture audio en cours
  stop(): void {
    this.audio.pause();
    this.activeSound.set(null);
  }

  // Modifie le volume et l'applique immédiatement à l'instance audio
  setVolume(val: number): void {
    this.volume.set(val);
    this.audio.volume = val;
  }
}
