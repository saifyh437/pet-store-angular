import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';

import { ConnectionRefusedComponent } from './connection-refused/connection-refused.component';
import { NotValidComponent } from './not-valid/not-valid.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path :'person' , loadChildren:'./person/person.module#PersonModule'},
  { path :'pet' , loadChildren:'./pet/pet.module#PetModule'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'connection-refused', component: ConnectionRefusedComponent },
  { path: '**', component: NotValidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes , {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  LoginComponent,
  HomeComponent,
  ConnectionRefusedComponent,
  NotValidComponent,
]