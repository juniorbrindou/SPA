import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  isAuth = false;
  constructor(private UtilisateurService: UtilisateurService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

}
