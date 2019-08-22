import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from '../common/person/person.component';
import { PersonlistComponent } from '../common/personlist/personlist.component';
import { AddPersonComponent } from '../common/add-person/add-person.component';
import { PersonSearchComponent } from '../common/person-search/person-search.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../common/_services/auth-guard.service';



@NgModule({
  declarations: [
    PersonComponent,
    PersonlistComponent,
    AddPersonComponent,
    PersonSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( [{
      path: '', canActivate: [AuthGuardService], component: PersonComponent, children: [
          { path: 'add', component: AddPersonComponent },
          { path: 'list', component: PersonlistComponent },
          { path: 'search', component: PersonSearchComponent }
      ]
  }]),
    ReactiveFormsModule
  ],
  exports: [
    PersonComponent,
    PersonlistComponent,
    AddPersonComponent,
    PersonSearchComponent]
})
export class PersonModule { }
