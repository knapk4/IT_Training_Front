import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-responsable-formation',
  templateUrl: './responsable-formation.component.html',
  styleUrls: ['./responsable-formation.component.scss']
})
export class ResponsableFormationComponent {

  formateurs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  afficherFormateurs() {
    this.http.get<any[]>('http://localhost:8080/Formateur/all')
      .subscribe(data => {
        this.formateurs = data;
      });
  }

  trierParSpecialite() {
    this.formateurs.sort((a, b) => a.specialite.localeCompare(b.specialite));
  }
  trierParNote() {
    this.formateurs.sort((a, b) => b.noteMoyenne - a.noteMoyenne);
  }

  envoyerMail(formateur: any) {
  }

  confirmerFormation(formateur: any) {
  }

  attribuerBlame(formateur: any) {
  }
  
}

