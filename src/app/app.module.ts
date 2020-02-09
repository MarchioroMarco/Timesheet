import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DipendentiPageComponent } from './pages/dipendenti-page/dipendenti-page.component';
import { DettaglioDipendentiPageComponent } from './pages/dettaglio-dipendenti-page/dettaglio-dipendenti-page.component';
import { NewDipendentiPageComponent } from './pages/new-dipendenti-page/new-dipendenti-page.component';
import { EditDipendentiPageComponent } from './pages/edit-dipendenti-page/edit-dipendenti-page.component';
import { ApiService } from './shared/services/api.service';
import { DipendentiService } from './shared/services/dipendenti.service';
import { AuthenticationGuard } from './shared/guard/authentication.guard';
import { AuthenticationService } from './shared/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DipendentiPageComponent,
    DettaglioDipendentiPageComponent,
    NewDipendentiPageComponent,
    EditDipendentiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    DipendentiService,
    AuthenticationGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
