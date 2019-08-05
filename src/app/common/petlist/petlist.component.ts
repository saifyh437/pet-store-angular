import { Component, OnInit } from '@angular/core';
import { PetService } from '../_services/pet.service';
import { Pet } from '../pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService,
              private router: Router) { }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getAllPets()
      .subscribe((petData) => this.pets = petData,
        (error) => {
          if (error.status == 0) {
            this.router.navigate(['connection-refused']);
          }
          return;
        }
      );

  }
}

