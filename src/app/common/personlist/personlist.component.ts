import { Component, OnInit } from '@angular/core';
import {  PersonService } from '../_services/person.service';
import { Person } from '../person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  persons : Person[];
  errMsg ='';

  constructor(private personService: PersonService ,
              private router : Router) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void{
    this.personService.getAllPersons()
        .subscribe((personData) => this.persons = personData,
        (error) =>{
          if (error.status == 0) {
            this.router.navigate(['connection-refused']);
          }
            return;
        }
    );
    
}
}
