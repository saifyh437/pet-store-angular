import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { PersonComponent } from './common/person/person.component';
import { PetComponent } from './common/pet/pet.component';
import { PetlistComponent } from './common/petlist/petlist.component';
import { PersonlistComponent } from './common/personlist/personlist.component';
import { ConnectionRefusedComponent } from './connection-refused/connection-refused.component';
import { NotValidComponent } from './not-valid/not-valid.component';
import { AuthGuardService } from './common/_services/auth-guard.service';


const routes : Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'login',component: LoginComponent},
  { path:'home',component: HomeComponent},
  { path:'person',canActivate : [AuthGuardService],component :PersonComponent},
  { path:'personlist',canActivate : [AuthGuardService],component :PersonlistComponent},
  { path:'pet' ,canActivate : [AuthGuardService],component:PetComponent},
  { path:'petlist' ,canActivate : [AuthGuardService],component:PetlistComponent},
  { path:'connection-refused' ,component : ConnectionRefusedComponent},
  { path:'**' ,component: NotValidComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
