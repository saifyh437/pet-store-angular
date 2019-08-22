import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './common/_services/authentication.service';
import { PetService } from './common/_services/pet.service';
import { PersonService } from './common/_services/person.service';
import { AuthGuardService } from './common/_services/auth-guard.service';
import { AuthInterceptorService } from './common/_services/auth.interceptor.service';
import { LoggingInterceptorService } from './common/_services/logging.interceptor.service';
import { AlertComponent } from './common/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    AlertComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    PetService,
    PersonService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }


