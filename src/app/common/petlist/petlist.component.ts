import { Component, OnInit } from '@angular/core';
import {  PetService } from '../_services';
import { Pet } from '../pet';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  pets : Pet[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void{
    this.petService.getAllPets()
        .subscribe((petData) => this.pets = petData,
        (error) =>{
            console.log(error);
            return;
        }
    );
    
}
}

