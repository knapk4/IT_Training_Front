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
      imageUrl: 'assets/javac.png',
      nom: 'JAVA',
      prix: 5000 ,
      dateDebut: '2023-09-01',
      dateFin: '2023-09-15'
    },
    {
      imageUrl: 'assets/loo.png',
      nom: 'ANGULAR',
      prix: 4500,
      dateDebut: '2023-08-15',
      dateFin: '2023-08-30'
    },
    {
      imageUrl: 'assets/c++.png',
      nom: 'C++',
      prix: 6000,
      dateDebut: '2023-10-01',
      dateFin: '2023-10-30'
    },
    {
      imageUrl: 'assets/csharp.png',
      nom: 'c#',
      prix: 5500,
      dateDebut: '2023-09-20',
      dateFin: '2023-10-10'
    },
    {
      imageUrl: 'assets/react.png',
      nom: 'REACT',
      prix: 3500,
      dateDebut: '2023-08-25',
      dateFin: '2023-09-05'
    },
    {
      imageUrl: 'assets/ruby.png',
      nom: 'RUBY',
      prix: 4000,
      dateDebut: '2023-10-01',
      dateFin: '2023-10-30'
    },

    {
      imageUrl: 'assets/mysql.png',
      nom: 'MYSQL',
      prix: 2000,
      dateDebut: '2021-10-01',
      dateFin: '2023-10-30'
    },


    {
      imageUrl: 'assets/pyhton.png',
      nom: 'PYTHON',
      prix: 8000,
      dateDebut: '2023-10-09',
      dateFin: '2023-10-31'
    },


    {
      imageUrl: 'assets/ts.png',
      nom: 'TYPESCRIPT',
      prix: 5500,
      dateDebut: '2022-05-01',
      dateFin: '2023-10-30'
    },

{
      imageUrl: 'assets/php.png',
      nom: 'PHP',
      prix: 1250,
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
