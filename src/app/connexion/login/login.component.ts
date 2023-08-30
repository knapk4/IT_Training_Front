import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // Assurez-vous d'ajouter cette ligne

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = ''; // Binding pour le champ de saisie 'username'
  password: string = ''; // Binding pour le champ de saisie 'password'

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Le code que vous souhaitez exécuter lors de l'initialisation du composant
    // peut être placé ici.
  }

  onLoginSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Gérez l'envoi du formulaire ici
      // Utilisez this.username et this.password pour obtenir les valeurs
      // Ensuite, en fonction de la valeur de 'username', effectuez la redirection
      if (this.username === 'client') {
        this.router.navigate(['/client']);
      } else if (this.username === 'login') {
        this.router.navigate(['/login']);
      }
      else {
        this.router.navigate(['/surthemes']);
      }
    }
  }
}

 /* showLoginForm = false;

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
*/
