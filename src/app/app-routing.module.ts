import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DipendentiPageComponent } from './pages/dipendenti-page/dipendenti-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DettaglioDipendentiPageComponent } from './pages/dettaglio-dipendenti-page/dettaglio-dipendenti-page.component';
import { NewDipendentiPageComponent } from './pages/new-dipendenti-page/new-dipendenti-page.component';
import { EditDipendentiPageComponent } from './pages/edit-dipendenti-page/edit-dipendenti-page.component';


const routes: Routes = [
  {path:"home" , component: HomePageComponent},
  {path:"dipendenti" , component: DipendentiPageComponent},
  {path:"dipendenti/new", component: NewDipendentiPageComponent},
  {path:"dipendenti/:id", component: DettaglioDipendentiPageComponent },
  {path:"dipendenti/edit/:id", component: EditDipendentiPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
