import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  token : JSON;

   getAllPets() {
      return this.http.get<any>("http://localhost:18081/petproject/get")
              .pipe(map(Response => this.token= Response));
  }

  addPet(petName: string, petColor: string) {
      return this.http.post<any>("http://localhost:18081/petproject", { petName: petName, petColor: petColor })
              .pipe(map(Response => this.token= Response));
  }

  searchPetName(petName :string)
  {
    let params = new HttpParams().set('petName', petName);

    return this.http.get<any>("http://localhost:18081/petproject", { params: params})
              .pipe(map(Response => this.token= Response));
  }
}
