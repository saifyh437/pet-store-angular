import { Component, OnInit } from '@angular/core';
import {  PersonService } from '../_services';
import { Person } from '../person';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  persons : Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void{
    this.personService.getAllPersons()
        .subscribe((personData) => this.persons = personData,
        (error) =>{
            console.log(error);
            return;
        }
    );
    
}
}
