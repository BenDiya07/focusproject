import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss']
})
export class Timer implements OnDestroy {
  totalSeconds = 25 * 60;
  timeLeft = signal(25 * 60);
  isActive = false;
  private intervalId: any;

  toggleTimer() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.update(t => t - 1);
      } else {
        this.pauseTimer();
        this.isActive = false;
      }
    }, 1000);
  }

  pauseTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.isActive = false;
    this.timeLeft.set(this.totalSeconds);
  }

  calculateOffset() {
    const circumference = 283; // 2 * Math.PI * 45
    const progress = this.timeLeft() / this.totalSeconds;
    return circumference * (1 - progress);
  }

  formatTime() {
    const time = this.timeLeft();
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  ngOnDestroy() {
    this.pauseTimer();
  }
}