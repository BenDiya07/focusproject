import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  isSending = signal(false);
  isSuccess = signal(false);

  onSubmit(form: any) {
  if (form.valid) {
    this.isSending.set(true);

    // On envoie les données à ton endpoint Formspree
    fetch('https://formspree.io/f/mvzbybpn', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })
    .then(response => {
      this.isSending.set(false);
      if (response.ok) {
        this.isSuccess.set(true);
        form.reset(); // Vide le formulaire après l'envoi
        
        // Cache le message de succès après 5 secondes
        setTimeout(() => this.isSuccess.set(false), 5000);
      } else {
        alert("Oups ! Un problème est survenu lors de l'envoi.");
      }
    })
    .catch(error => {
      this.isSending.set(false);
      console.error('Erreur Formspree:', error);
      alert("Erreur de connexion au serveur.");
    });
  }
}
}