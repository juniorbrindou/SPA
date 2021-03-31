import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  utilisateurs = [
    {
      name: 'Bernard',
      email: 'bernard@gmail.com'
    },
    {
      name: 'Franck',
      email: 'franck@gmail.com'
    },
    {
      name: 'Roland',
      email: 'roland@gmail.com'
    },

  ];
}