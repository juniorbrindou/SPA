import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component';
import { UtilisateursComponent } from './Components/utilisateurs/utilisateurs.component';


const appRoutes: Routes = [
  {path: 'utilisateurs', component:UtilisateursComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UtilisateursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
