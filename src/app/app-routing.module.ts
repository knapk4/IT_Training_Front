import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemesComponent } from './pages/themes/themes.component';
import { LoginComponent } from './connexion/login/login.component';
import { ForgotPasswordComponent } from './connexion/forgot-password/forgot-password.component';
import { RegisterComponent } from './connexion/register/register.component';
import { ClientComponent } from './dashboard/client/client.component';
import { SurthemesComponent } from './pages/surthemes/surthemes.component';
import { FormationComponent } from './pages/formation/formation.component';

import { FooterComponent } from './commons/footer/footer.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResponsableLogistiqueComponent } from './dashboard/responsable/responsable-logistique/responsable-logistique.component';
import { ResponsableCommercialComponent } from './dashboard/responsable/responsable-commercial/responsable-commercial.component';
import { ResponsableFormationComponent } from './dashboard/responsable/responsable-formation/responsable-formation.component';



const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' }, // Route par défaut redirigeant vers '/accueil'
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Exemple de route vers un composant 'ProfileComponent'
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client', component: ClientComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'surthemes', component: SurthemesComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'responsablelogistique', component: ResponsableLogistiqueComponent },
  { path: 'responsablecommercial', component: ResponsableCommercialComponent },
  { path: 'responsableformation', component: ResponsableFormationComponent},



];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
