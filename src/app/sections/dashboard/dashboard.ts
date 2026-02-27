import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  public taskService = inject(TaskService);
  
  ngOnInit() {
    // Force le scroll en haut dès que le composant est chargé
    window.scrollTo(0, 0);
    this.taskService.refresh();
  }

  getTaskProgress(dayIndex: number) {
    // On lie la hauteur des barres au taux de complétion global pour donner une impression de progression
    const baseHeight = this.taskService.percent(); 
    // Simulation : on fait varier la hauteur autour du taux de complétion
    return Math.min(100, Math.max(10, baseHeight + (dayIndex * 5) - 10));
  }
}