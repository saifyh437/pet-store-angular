import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../common/_services/auth-guard.service';
import { AddPetComponent } from '../common/add-pet/add-pet.component';
import { PetlistComponent } from '../common/petlist/petlist.component';
import { PetSearchComponent } from '../common/pet-search/pet-search.component';
import { PetComponent } from '../common/pet/pet.component';


const petRoutes : Routes = [
  { path:'' , canActivate : [AuthGuardService], component :PetComponent , children : [
    { path: 'add',  component: AddPetComponent},
    { path: 'list' ,component:PetlistComponent},
    { path: 'search' , component :PetSearchComponent}
  ]},
];


@NgModule({
  imports: [
    RouterModule.forChild(petRoutes)
  ],
  exports : [RouterModule]
})
export class PetRoutingModule { }
