export interface StudySession {
  id: string;
  startedAt: Date;
  completedAt: Date;
  duration: number;
  completed: boolean;
  category?: string;
}
