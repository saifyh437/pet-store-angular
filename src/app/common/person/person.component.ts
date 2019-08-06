import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  constructor(private route:ActivatedRoute,private router:Router) { }

  addPerson() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  getPersonList() {
    this.router.navigate(['list'], {relativeTo: this.route});
  }

  getPersonByName(){
    this.router.navigate(['search'], {relativeTo: this.route});
  }
}
