import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls:['./pet.component.css']
})
export class PetComponent {
  constructor(private route:ActivatedRoute,private router:Router) { }

  addPet() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  getPetList() {
    this.router.navigate(['list'], {relativeTo: this.route});
  }

  getPetByName(){
    this.router.navigate(['search'], {relativeTo: this.route});
  }
}

