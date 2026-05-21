import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-cours',
  standalone: true,
  templateUrl: './cours.html',
  styleUrl: './cours.scss'
})
export class Cours implements OnInit {
  ngOnInit() {
    // Force le scroll en haut dès que le composant est chargé
    window.scrollTo(0, 0);
  }

  public taskService = inject(TaskService);

  addTask(title: string) {
    this.taskService.addTask(title);
  }

  toggleTask(id: string) {
    this.taskService.toggleTask(id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }
}