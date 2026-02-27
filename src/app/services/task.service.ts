import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  // La source de vérité unique
  private tasks = signal<any[]>(JSON.parse(localStorage.getItem('study-tasks') || '[]'));

  // Des stats calculées automatiquement (Computed Signals)
  total = computed(() => this.tasks().length);
  completed = computed(() => this.tasks().filter((t: any) => t.completed).length);
  percent = computed(() => this.total() > 0 ? Math.round((this.completed() / this.total()) * 100) : 0);

  refresh() {
    this.tasks.set(JSON.parse(localStorage.getItem('study-tasks') || '[]'));
  }
}