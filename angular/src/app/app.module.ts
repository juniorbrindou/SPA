import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component';
import { UtilisateursComponent } from './Components/utilisateurs/utilisateurs.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { UtilisateurComponent } from './Components/utilisateur/utilisateur.component';
import { UtilisateurService } from './Services/utilisateur.service';


const appRoutes: Routes = [
  {path: 'utilisateurs', component:UtilisateursComponent},
  {path: 'utilisateurs/:id', component:UtilisateurComponent},
  {path: '', component:AccueilComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UtilisateursComponent,
    AccueilComponent,
    UtilisateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UtilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
