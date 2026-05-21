import { Injectable, signal } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timeLeft = signal(25 * 60);
  isRunning = signal(false);

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
    this.timeLeft.set(25 * 60);
  }

  stop(): void {
    this.pause();

    const now = new Date();
    const session = {
      id: crypto.randomUUID(),
      startedAt: now,
      completedAt: now,
      duration: 25 * 60,
      completed: true,
      category: 'focus'
    };

    this.sessionService.addSession(session);

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Session terminée 🎉');
    }
  }
}
