import { Injectable, signal } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private initialDuration = signal(25 * 60);
  timeLeft = signal(this.initialDuration());
  isRunning = signal(false);

  setDuration(minutes: number) {
    const seconds = minutes * 60;
    this.initialDuration.set(seconds);
    
    // Met à jour le temps restant si le chrono n'est pas déjà lancé
    if (!this.isRunning()) {
      this.timeLeft.set(seconds);
    }
  }

  getDurationMinutes() {
    return Math.floor(this.initialDuration() / 60);
  }

  private intervalId?: number;

  constructor(private sessionService: SessionService) {}

  start(): void {
    if (this.isRunning()) {
      return;
    }

    this.isRunning.set(true);

    this.intervalId = window.setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.update((t: number) => t - 1);
      } else {
        this.stop();
      }
    }, 1000);
  }

  pause(): void {
    clearInterval(this.intervalId);
    this.isRunning.set(false);
  }

  reset(): void {
    this.pause();
    this.timeLeft.set(this.initialDuration());
  }

  stop(): void {
    this.pause();

    const now = new Date();
    const session: any = {
      id: crypto.randomUUID(),
      startedAt: now,
      completedAt: now,
      duration: this.initialDuration(),
      completed: true,
      category: 'focus'
    };

    this.sessionService.addSession(session);

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Session terminée 🎉');
    }
  }
}
