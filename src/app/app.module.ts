import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './common/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './common/_services';
import { HomeComponent } from './common/home/home.component';
import { PersonComponent } from './common/person/person.component';
import { PetComponent } from './common/pet/pet.component';
import { PetService } from './common/_services/pet.service';
import { PersonService } from './common/_services/person.service';
import { PersonlistComponent } from './common/personlist/personlist.component';
import { PetlistComponent } from './common/petlist/petlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonComponent,
    PetComponent,
    PersonlistComponent,
    PetlistComponent
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
    PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
