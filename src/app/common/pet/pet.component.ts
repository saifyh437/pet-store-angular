import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../_services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls:['./pet.component.css']
})
export class PetComponent implements OnInit {

  addPetF: FormGroup;
  loading = false;
  submitted = false;
  showErrMsg = false;
  errMsg : string;
  successMsg : string;

  constructor(
      private formBuilder: FormBuilder,
      private petService: PetService) {}

  ngOnInit() {
      this.addPetF = this.formBuilder.group({
          petName: ['', Validators.required],
          petColor: ['']
      });
  }

  get f() { return this.addPetF.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addPetF.invalid) {
        return;
    }

    this.loading = true;

    this.petService.addPet(this.f.petName.value, this.f.petColor.value)
        .subscribe(
            res => {
              console.log(res);
               
               
                  this.showErrMsg = false;
                  this.loading = false;
                  this.successMsg = "Pet is been Created";
                  this.addPetF.reset();
                  return ;
                
            },
            error => {
              this.showErrMsg =true;
              this.loading = false;
              this.errMsg= error.error.errors;
              ;
              return ;
            });
}

}

