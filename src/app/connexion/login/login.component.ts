import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  showLoginForm = false;

  constructor() { }

  ngOnInit(): void {
    // Simulez une petite attente avant d'afficher le formulaire
    setTimeout(() => {
      this.showLoginForm = true;
    }, 300);
  }

  onLoginSubmit() {
    // Gérez l'envoi du formulaire ici
  }
}
