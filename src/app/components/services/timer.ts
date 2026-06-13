import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // Configuration
  private readonly DEFAULT_TIME = 25 * 60; // 25 min en secondes
  private WORK_TIME = this.DEFAULT_TIME;

  // État du timer
  private secondsLeft = new BehaviorSubject<number>(this.WORK_TIME);
  private running = new BehaviorSubject<boolean>(false);
  private timerSub?: Subscription;

  // Accès aux données (Observables)
  timeLeft$ = this.secondsLeft.asObservable();
  isRunning$ = this.running.asObservable();

  start() {
    if (this.running.value) return;
   // Démarre le timer
    this.running.next(true);
    this.timerSub = interval(1000).subscribe(() => {
      const current = this.secondsLeft.value;
      if (current > 0) {
        this.secondsLeft.next(current - 1);
      } else {
        this.completeCycle();
      }
    });
  }

  // Permet de changer la durée du timer (en minutes)
  setDuration(minutes: number) {
  this.WORK_TIME = minutes * 60;

  if (!this.running.value) {
    this.secondsLeft.next(this.WORK_TIME);
  }
}
  // Permet de récupérer la durée actuelle du timer en minutes
  getDurationMinutes(): number {
  return Math.floor(this.WORK_TIME / 60);
}
 
  // Permet de récupérer le temps restant en secondes
  pause() {
    this.timerSub?.unsubscribe();
    this.running.next(false);
  }
 
  // Permet de réinitialiser le timer à la durée configurée
  reset() {
    this.pause();
    this.secondsLeft.next(this.WORK_TIME);
  }
 
  // Méthode privée pour compléter un cycle de timer
  private completeCycle() {
    this.pause();
    alert('Session terminée ! Bravo.');
    // Ici on pourra appeler une méthode pour enregistrer la session
  }
}