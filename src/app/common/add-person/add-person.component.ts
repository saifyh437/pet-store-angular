import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  addPersonF: FormGroup;
  loading = false;
  submitted = false;
  showErrMsg = false;
  errMsg: string;
  successMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private router : Router) { }

  ngOnInit() {
    this.addPersonF = this.formBuilder.group({
      personName: ['', Validators.required],
      personAge: ['']
    });
  }

  get f() { return this.addPersonF.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addPersonF.invalid) {
      return;
    }

    this.loading = true;

    this.personService.addPerson(this.f.personName.value, this.f.personAge.value)
      .subscribe(
        res => {
          console.log(res);

          this.showErrMsg = false;
          this.loading = false;
          this.successMsg = "Person is been Created";
          this.addPersonF.reset();
          return;

        },
        error => {
          this.showErrMsg = true;
          this.loading = false;
          console.log(error);
          if (error.status == 0) {
            this.router.navigate(['connection-refused']);
          } else {
            this.errMsg = error.error.errors[0];
          }
          return;
        });
  }
}
