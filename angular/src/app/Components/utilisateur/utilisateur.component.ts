import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateur:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getUtilisateurData();
  }

  getUtilisateurData() {
    this.dataService.getData().subscribe(res => {
      this.utilisateur = res;
    });
  }
}
