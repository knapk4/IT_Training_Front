import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  specialites: any[] = [];
  partners: any[] = [  
  { name: 'Partner 1', imageUrl: 'assets/url1.jpg' },
  { name: 'Partner 2', imageUrl: 'assets/url2.jpg' }, 
  { name: 'Partner 3', imageUrl: 'assets/url3.jpg' },
  { name: 'Partner 4', imageUrl: 'assets/url4.jpg' },
  { name: 'Partner 5', imageUrl: 'assets/url5.jpg' },
  { name: 'Partner 6', imageUrl: 'assets/url6.jpg' },
  { name: 'Partner 7', imageUrl: 'assets/url7.jpg' },
  { name: 'Partner 8', imageUrl: 'assets/url8.jpg' },
  { name: 'Partner 9', imageUrl: 'assets/url9.jpg' },


];

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
