import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  token: Person[];

  private url = "http://localhost:18081/personproject";

  getAllPersons() {
    return this.http.get<any>(this.url + "/all")
      .pipe(map(response => this.token = response));
  }

  addPerson(personName: string, personAge: number) {
    return this.http.post<any>(this.url, { personName: personName, personAge: personAge })
      .pipe(map(response => { console.log(response); return response }));
  }

  searchPersonName(personName: string) {
    let param = new HttpParams().set('personName', personName);

    // let header = new HttpHeaders(
    //   {
    //     'Custom-Header-1': '12345',
    //     'Custom-Header-2': '6789'
    //   }
    // );

    let header = new HttpHeaders();
    header.set('Custom-Header-1', '12345'); // diff between set and append
    header.append('Custom-Header-2', '6789')

    console.log(header);
    return this.http.get<Person[]>(this.url, { headers: header, params: param })
      .pipe(map(response => {
        return this.token = response
      }));
  }

}
