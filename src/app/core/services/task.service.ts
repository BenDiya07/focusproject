import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly STORAGE_KEY = 'study-chill-tasks';

  tasks = signal<Task[]>([]);

  constructor(private storage: StorageService) {
    this.loadTasks();
  }

  private loadTasks(): void {
    const storedTasks = this.storage.get<Task[]>(this.STORAGE_KEY);

    if (storedTasks) {
      this.tasks.set(
        storedTasks.map(task => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }))
      );
    }
  }

  private persist(): void {
    this.storage.save(this.STORAGE_KEY, this.tasks());
  }

  addTask(title: string): void {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
      createdAt: new Date()
    };

    this.tasks.update(tasks => [...tasks, newTask]);
    this.persist();
  }

  toggleTask(id: string): void {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );

    this.persist();
  }

  deleteTask(id: string): void {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
    this.persist();
  }
}
