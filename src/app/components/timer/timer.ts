import { Component, inject } from '@angular/core';
import { TimerService } from '../services/timer'; // Vérifie bien le chemin
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [AsyncPipe], // On a besoin de AsyncPipe pour gérer l'observable dans le HTML
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss']
})
export class Timer {
  // On injecte le service global pour que le timer continue même si on change de vue
  public timerService = inject(TimerService);

  // Formate les secondes (ex: 1500) en texte (ex: "25:00")
  displayTime$ = this.timerService.timeLeft$.pipe(
    map(totalSeconds => {
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    })
  );
}