import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './commons/footer/footer.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemesComponent } from './pages/themes/themes.component';
import { LoginComponent } from './connexion/login/login.component';
import { ForgotPasswordComponent } from './connexion/forgot-password/forgot-password.component';
import { RegisterComponent } from './connexion/register/register.component';
import { ClientComponent } from './dashboard/client/client.component';
import { SurthemesComponent } from './pages/surthemes/surthemes.component';

import { ResponsableLogistiqueComponent } from './dashboard/responsable/responsable-logistique/responsable-logistique.component';
import { ResponsableCommercialComponent } from './dashboard/responsable/responsable-commercial/responsable-commercial.component';
import { ResponsableFormationComponent } from './dashboard/responsable/responsable-formation/responsable-formation.component';

import { FormationComponent } from './pages/formation/formation.component';

//import { RouterModule, Routes } from '@angular/router'; // Importez RouterModule et Routes
/*
const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' }, // Route par défaut redirigeant vers '/accueil'
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Exemple de route vers un composant 'ProfileComponent'
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client', component: ClientComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'surthemes', component: SurthemesComponent },
  { path: 'themes', component: ThemesComponent },
  
];

*/









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ThemesComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ClientComponent,
    SurthemesComponent,

    ResponsableLogistiqueComponent,
    ResponsableCommercialComponent,
    ResponsableFormationComponent,

    FormationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    //RouterModule.forRoot(routes), // Ajoutez cette ligne pour configurer les routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
