import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { TimerService } from '../../core/services/timer.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.html',
  styleUrl: './timer.scss'
})
export class Timer implements OnDestroy {
  public timerService = inject(TimerService);

  get timeLeft() {
    return this.timerService.timeLeft();
  }

  get isActive(): boolean {
    return this.timerService.isRunning();
  }

  // Utilisé par [value] dans le template
  getDurationMinutes() { return this.timerService.getDurationMinutes(); }

  setDuration(minutes: number) {
    this.timerService.setDuration(minutes);
  }

  toggleTimer() {
    if (this.isActive) {
      this.timerService.pause();
    } else {
      this.timerService.start();
    }
  }

  resetTimer() {
    this.timerService.reset();
  }

  calculateOffset() {
    const circumference = 283; // 2 * Math.PI * 45
    const totalSeconds = this.getDurationMinutes() * 60;
    const progress = this.timeLeft / (totalSeconds || 1);
    return circumference * (1 - progress);
  }

  formatTime() {
    const time = this.timeLeft;
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  changeDuration(event: Event) {
  const value = Number(
    (event.target as HTMLInputElement).value
  );

  if (value >= 1 && value <= 180) {
    this.timerService.setDuration(value);
  }
}

  ngOnDestroy() {
    this.timerService.pause();
  }
}