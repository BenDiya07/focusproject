import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { TimerService } from '../../core/services/timer.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss']
})
export class Timer implements OnDestroy {
  private timerService = inject(TimerService);

  get timeLeft() {
    return this.timerService.timeLeft();
  }

  get isActive() {
    return this.timerService.isRunning();
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
    const progress = this.timeLeft / (25 * 60);
    return circumference * (1 - progress);
  }

  formatTime() {
    const time = this.timeLeft;
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  ngOnDestroy() {
    this.timerService.pause();
  }
}