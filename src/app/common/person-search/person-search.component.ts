import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../_services/person.service';
import { Router } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  sPersonF: FormGroup;
  loading = false;
  submitted = false;
  persons : Person[];

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private router: Router) { }

  ngOnInit() {
    this.sPersonF = this.formBuilder.group({
      personName: ['', Validators.required]
    });
  }

  get f() { return this.sPersonF.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.sPersonF.invalid) {
      return;
    }

    this.loading = true;

    this.personService.searchPersonName(this.f.personName.value)
      .subscribe(
        persons => {
          this.persons = persons;
          this.loading = false;
        },
        error => {
          this.loading = false;
          if (error.status == 0)
            this.router.navigate(['connection-refused']);
        }
      )
  }

}
