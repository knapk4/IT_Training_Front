import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent  {
  showFormations: boolean = true;
  showInformations: boolean = false;
  showAssiduite: boolean = false;
  newPassword: string = '';

  formations = [
    { name: 'Formation 1', finished: true },
    { name: 'Formation 2', finished: false },
    { name: 'Formation 3', finished: false }
  ];

  assiduite = [
    { date: '2023-07-25', present: true },
    { date: '2023-07-26', present: false },
    { date: '2023-07-27', present: true },
    { date: '2023-07-28', present: true },
    { date: '2023-07-29', present: false },
  ];


  savePassword() {
    // Logic to save the new password
    console.log('Password saved:', this.newPassword);
    this.newPassword = '';
  }
  




}

