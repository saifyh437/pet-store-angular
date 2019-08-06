import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  token : JSON;

   getAllPersons() {
      return this.http.get<any>("http://localhost:18081/personproject/all")
              .pipe(map(Response => this.token= Response));
  }

  addPerson(personName: string, personAge: number) {
      return this.http.post<any>("http://localhost:18081/personproject", { personName: personName, personAge: personAge })
              .pipe(map(Response => this.token= Response));
  }

  searchPersonName(personName :string)
  {
    let params = new HttpParams().set('personName', personName);

    return this.http.get<any>("http://localhost:18081/personproject", { params: params})
              .pipe(map(Response => this.token= Response));
  }

}
