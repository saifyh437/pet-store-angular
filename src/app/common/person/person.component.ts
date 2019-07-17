import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  PersonService } from '../_services';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls:['./person.component.css']
})
export class PersonComponent implements OnInit {

  addPersonF: FormGroup;
  loading = false;
  submitted = false;
  showErrMsg = false;
  errMsg : string;
  successMsg : string;

  constructor(
      private formBuilder: FormBuilder,
      private personService: PersonService) {}

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
                if(res["status"])
                {
                  this.showErrMsg =true;
                  this.errMsg = res["errors"];
                  this.loading = false;
                  return ;
                }
                else {
                  this.showErrMsg = false;
                  this.loading = false;
                  this.successMsg = "Person is been Created";
                  this.addPersonF.reset();
                  return ;
                }
            },
            error => {
              this.showErrMsg =true;
              this.loading = false;
              console.log(error);
              console.log(error.error.errors[0]);
              this.errMsg= error.error.errors[0];
              return ;
            });
}

}
