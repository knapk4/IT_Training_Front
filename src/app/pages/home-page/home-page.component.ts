import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  specialites: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/specialites/all').subscribe(
      (data) => {
        this.specialites = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }
}