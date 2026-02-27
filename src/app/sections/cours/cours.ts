import { Component, effect, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-cours',
  standalone: true,
  templateUrl: './cours.html',
  styleUrl: './cours.scss'
})
export class Cours {
  ngOnInit() {
    // Force le scroll en haut dès que le composant est chargé
    window.scrollTo(0, 0);
  }
  // On initialise le signal en lisant les données depuis le localStorage.
  // S'il n'y a rien, on utilise un tableau vide '[]'.
  tasks = signal<Task[]>(JSON.parse(localStorage.getItem('study-tasks') || '[]'));

  constructor() {
    // Cet `effect` s'exécutera à chaque fois que le signal `tasks` est modifié,
    // sauvegardant automatiquement la liste à jour dans le localStorage.
    effect(() => {
      localStorage.setItem('study-tasks', JSON.stringify(this.tasks()));
    });
  }

  addTask(title: string) {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.update(t => [...t, newTask]);
  }

  toggleTask(id: number) {
    this.tasks.update(t => t.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  deleteTask(id: number) {
    this.tasks.update(t => t.filter(task => task.id !== id));
  }
}