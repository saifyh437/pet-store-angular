import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './common/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './common/_services/authentication.service';
import { HomeComponent } from './common/home/home.component';
import { PersonComponent } from './common/person/person.component';
import { PetComponent } from './common/pet/pet.component';
import { PetService } from './common/_services/pet.service';
import { PersonService } from './common/_services/person.service';
import { PersonlistComponent } from './common/personlist/personlist.component';
import { PetlistComponent } from './common/petlist/petlist.component';
import { ConnectionRefusedComponent } from './connection-refused/connection-refused.component';
import { NotValidComponent } from './not-valid/not-valid.component';
import { AuthGuardService } from './common/_services/auth-guard.service';
import { AddPersonComponent } from './common/add-person/add-person.component';
import { AddPetComponent } from './common/add-pet/add-pet.component';
import { PersonSearchComponent } from './common/person-search/person-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonComponent,
    PetComponent,
    PersonlistComponent,
    PetlistComponent,
    ConnectionRefusedComponent,
    NotValidComponent,
    AddPersonComponent,
    AddPetComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService ,
    PetService,
    PersonService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
