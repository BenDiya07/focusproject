import { Injectable, computed } from '@angular/core';
import { SessionService } from './session.service';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private sessionService: SessionService,
    private taskService: TaskService
  ) {}

  // Tasks
  readonly sessions = computed(() => this.sessionService.sessions());
 
  readonly totalStudyTime = computed(() =>
    this.sessions().reduce((acc, s) => acc + s.duration, 0)
  );

  readonly totalSessions = computed(() => this.sessions().length);

  readonly averageSession = computed(() => {
    const sessions = this.sessions();

    if (!sessions.length) return 0;

    return Math.round(
      this.totalStudyTime() / sessions.length
    );
  });

  readonly streak = computed(() => {
    const completed = this.sessions().filter(s => s.completed).length;
    return completed;
  });

  readonly tasks = computed(() => this.taskService.tasks());

  readonly totalTasks = computed(() => this.tasks().length);

  readonly completedTasks = computed(() =>
    this.tasks().filter(t => t.completed).length
  );

  readonly pendingTasks = computed(() =>
    this.totalTasks() - this.completedTasks()
  );

  readonly completionRate = computed(() => {
    if (!this.totalTasks()) return 0;

    return Math.round((this.completedTasks() / this.totalTasks()) * 100);
  });
}
