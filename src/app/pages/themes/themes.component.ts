import { Component, OnInit } from '@angular/core';

interface Formation {
  imageUrl: string;
  nom: string;
  prix: number;
  dateDebut: string;
  dateFin: string;
}

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  showAll: boolean = false;
  formations: Formation[] = [
    {
      imageUrl: 'assets/loo.png',
      nom: 'Formation Zngular avancée',
      prix: 200,
      dateDebut: '2023-09-01',
      dateFin: '2023-09-15'
    },
    {
      imageUrl: 'chemin/vers/image2.jpg',
      nom: 'Formation React pour les débutants',
      prix: 150,
      dateDebut: '2023-08-15',
      dateFin: '2023-08-30'
    },
    {
      imageUrl: 'chemin/vers/image3.jpg',
      nom: 'Formation Vue.js complète',
      prix: 180,
      dateDebut: '2023-10-01',
      dateFin: '2023-10-30'
    },
    {
      imageUrl: 'chemin/vers/image4.jpg',
      nom: 'Formation Node.js et Express',
      prix: 220,
      dateDebut: '2023-09-20',
      dateFin: '2023-10-10'
    },
    {
      imageUrl: 'chemin/vers/image5.jpg',
      nom: 'Formation HTML et CSS pour les débutants',
      prix: 100,
      dateDebut: '2023-08-25',
      dateFin: '2023-09-05'
    },
    {
      imageUrl: 'chemin/vers/image3.jpg',
      nom: 'Formation Vue.js complète',
      prix: 180,
      dateDebut: '2023-10-01',
      dateFin: '2023-10-30'
    },

    {
      imageUrl: 'chemin/vers/image3.jpg',
      nom: 'Formation nodee complète',
      prix: 180,
      dateDebut: '2021-10-01',
      dateFin: '2023-10-30'
    },


    {
      imageUrl: 'chemin/vers/image3.jpg',
      nom: 'Formation gut complète',
      prix: 180,
      dateDebut: '2023-10-09',
      dateFin: '2023-10-31'
    },


    {
      imageUrl: 'chemin/vers/image3.jpg',
      nom: 'Formation ji complète',
      prix: 180,
      dateDebut: '2022-05-01',
      dateFin: '2023-10-30'
    },

{
      imageUrl: 'chemin/vers/image3.jpg',
      nom: 'Formation csharp complète',
      prix: 180,
      dateDebut: '2023-09-01',
      dateFin: '2023-10-05'
    },
  ];

  visibleFormations: Formation[] = [];

  ngOnInit() {
    // At startup, display the first four formations
    this.showFourFormations();
  }

  showFourFormations() {
    this.visibleFormations = this.formations.slice(0, 4);
  }

  toggleShowAllFormations() {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.visibleFormations = this.formations;
    } else {
      this.showFourFormations();
    }
  }

  showAllFormations() {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.visibleFormations = this.formations;
    } else {
      this.showFourFormations();
    }
  }

  sortByName() {
    this.visibleFormations = this.formations.slice().sort((a, b) => a.nom.localeCompare(b.nom));
    
  }

  sortByPrice() {
    this.visibleFormations = this.formations.slice().sort((a, b) => a.prix - b.prix);
    
  }

  sortByDate() {
    this.visibleFormations = this.formations.slice().sort((a, b) => new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime());
    
  }
}
