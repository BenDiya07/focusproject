import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // Configuration
  private readonly WORK_TIME = 25 * 60; // 25 min en secondes
  
  private secondsLeft = new BehaviorSubject<number>(this.WORK_TIME);
  private running = new BehaviorSubject<boolean>(false);
  private timerSub?: Subscription;

  // Accès aux données (Observables)
  timeLeft$ = this.secondsLeft.asObservable();
  isRunning$ = this.running.asObservable();

  start() {
    if (this.running.value) return;

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

  pause() {
    this.timerSub?.unsubscribe();
    this.running.next(false);
  }

  reset() {
    this.pause();
    this.secondsLeft.next(this.WORK_TIME);
  }

  private completeCycle() {
    this.pause();
    alert('Session terminée ! Bravo.');
    // Ici on pourra appeler une méthode pour enregistrer la session
  }
}