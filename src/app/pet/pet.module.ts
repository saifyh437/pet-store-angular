import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetRoutingModule } from './pet-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PetComponent } from '../common/pet/pet.component';
import { PetlistComponent } from '../common/petlist/petlist.component';
import { AddPetComponent } from '../common/add-pet/add-pet.component';
import { PetSearchComponent } from '../common/pet-search/pet-search.component';



@NgModule({
  declarations: [
    PetComponent,
    PetlistComponent,
    AddPetComponent,
    PetSearchComponent,
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    ReactiveFormsModule
  ]
})
export class PetModule { }
