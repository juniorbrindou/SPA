import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['../../app.component.css']
})
export class UtilisateurComponent implements OnInit {
  name: string = 'Utilisateur';
  email: string = 'Email';

  constructor() { }

  ngOnInit(): void {
  }

}
