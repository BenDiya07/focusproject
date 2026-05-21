import { Injectable, signal } from '@angular/core';
import { StudySession } from '../models/session.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly STORAGE_KEY = 'study-sessions';

  sessions = signal<StudySession[]>([]);

  constructor(private storage: StorageService) {
    this.load();
  }

  private load(): void {
    const data = this.storage.get<StudySession[]>(this.STORAGE_KEY);
    if (data) {
      this.sessions.set(
        data.map(session => ({
          ...session,
          startedAt: new Date(session.startedAt),
          completedAt: new Date(session.completedAt)
        }))
      );
    }
  }

  private persist(): void {
    this.storage.save(this.STORAGE_KEY, this.sessions());
  }

  addSession(session: StudySession): void {
    this.sessions.update(sessions => [...sessions, session]);
    this.persist();
  }
}
