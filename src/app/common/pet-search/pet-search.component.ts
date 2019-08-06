import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetService } from '../_services/pet.service';
import { Router } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.css']
})
export class PetSearchComponent implements OnInit {

  sPetF: FormGroup;
  loading = false;
  submitted = false;
  pets : Pet[];

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private router: Router) { }

  ngOnInit() {
    this.sPetF = this.formBuilder.group({
      petName: ['', Validators.required]
    });
  }

  get f() { return this.sPetF.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.sPetF.invalid) {
      return;
    }

    this.loading = true;

    this.petService.searchPetName(this.f.petName.value)
      .subscribe(
        pets => {
          this.pets = pets;
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
