import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  showLoginForm = false;

  constructor() { }

  ngOnInit(): void {
    // Simulez une petite attente avant d'afficher le formulaire
    setTimeout(() => {
      this.showLoginForm = true;
    }, 300);
  }

  onRegisterSubmit() {
    // Gérez l'envoi du formulaire ici
  }
}
