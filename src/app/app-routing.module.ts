import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { PersonComponent } from './common/person/person.component';
import { PetComponent } from './common/pet/pet.component';
import { PetlistComponent } from './common/petlist/petlist.component';
import { PersonlistComponent } from './common/personlist/personlist.component';


const routes : Routes = [
  { path:'login',component: LoginComponent},
  { path:'home',component: HomeComponent},
  { path:'person',component :PersonComponent},
  { path:'personlist',component :PersonlistComponent},
  { path:'pet' ,component:PetComponent},
  { path:'petlist' ,component:PetlistComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
