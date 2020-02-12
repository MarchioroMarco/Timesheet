import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DipendentiPageComponent } from './pages/dipendenti-page/dipendenti-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DettaglioDipendentiPageComponent } from './pages/dettaglio-dipendenti-page/dettaglio-dipendenti-page.component';
import { NewDipendentiPageComponent } from './pages/new-dipendenti-page/new-dipendenti-page.component';
import { EditDipendentiPageComponent } from './pages/edit-dipendenti-page/edit-dipendenti-page.component';
import { LoginPageComponentComponent } from './pages/login-page-component/login-page-component.component';
import { AuthenticationGuard } from './shared/guard/authentication.guard';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponentComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
  },
  {
    path: "login",
    component: LoginPageComponentComponent
  },
  {
    path: "registra",
    component: RegistrazioneComponent
  },
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "dipendenti",
    component: DipendentiPageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "dipendenti/new",
    component: NewDipendentiPageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "dipendenti/:id",
    component: DettaglioDipendentiPageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "dipendenti/edit/:id",
    component: EditDipendentiPageComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
