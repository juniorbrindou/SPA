import { Component } from '@angular/core';
import { UtilisateurService } from './Services/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  utilisateurs: any[];
  title = 'SPA';
  constructor (private UtilisateurService: UtilisateurService){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }
}
