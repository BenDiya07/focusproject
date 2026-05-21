import { Injectable, computed } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private sessionService: SessionService) {}

  sessions = computed(() => this.sessionService.sessions());

  totalStudyTime = computed(() =>
    this.sessions().reduce((acc, s) => acc + s.duration, 0)
  );

  totalSessions = computed(() => this.sessions().length);

  averageSession = computed(() => {
    const sessions = this.sessions();

    if (!sessions.length) return 0;

    return Math.round(
      this.totalStudyTime() / sessions.length
    );
  });

  streak = computed(() => {
    const completed = this.sessions().filter(s => s.completed).length;
    return completed;
  });
}
