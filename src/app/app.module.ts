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
import { LoginPageComponentComponent } from './pages/login-page-component/login-page-component.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthenticationGuard } from './shared/guard/authentication.guard';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DipendentiPageComponent,
    DettaglioDipendentiPageComponent,
    NewDipendentiPageComponent,
    EditDipendentiPageComponent,
    LoginPageComponentComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
