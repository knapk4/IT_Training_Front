import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surthemes',
  templateUrl: './surthemes.component.html',
  styleUrls: ['./surthemes.component.scss']
})
export class SurthemesComponent {
  constructor(private router: Router) {}

  redirectToThemes() {
    // Rediriger l'utilisateur vers le composant 'themes'
    this.router.navigate(['/themes']); // Assurez-vous que '/themes' est le bon chemin
  }
}
