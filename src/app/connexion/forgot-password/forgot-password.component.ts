import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{
  showLoginForm = false;

  constructor() { }

  ngOnInit(): void {
    // Simulez une petite attente avant d'afficher le formulaire
    setTimeout(() => {
      this.showLoginForm = true;
    }, 300);
  }

  onForgotPasswordSubmit() {
    // Gérez l'envoi du formulaire ici
  }
}

