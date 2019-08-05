import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class AuthenticationService {
    constructor(private http: HttpClient) { }

    token : JSON;
    isLogin = false;

    login(username: string, password: string) {
        return this.http.post<any>("http://localhost:18083/login/authenticate", { username: username, password: password })
                .pipe(map(Response => this.token= Response , this.isLogin = true));
    }
}