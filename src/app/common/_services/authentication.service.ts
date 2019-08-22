import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthRequestData } from '../login/login.component';

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  token: AuthResponseData;
  isLogin = false;

  singup(request: AuthRequestData) {
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnV7iJAJDb2OMwKquXdTjBRH1nA-t6Yys",
      request
    )
      .pipe
      (
        map(resp => {
          this.isLogin = true;
          return resp;
        }),
        catchError(this.handleError)
      );
  }

  login(request: AuthRequestData) {
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnV7iJAJDb2OMwKquXdTjBRH1nA-t6Yys",
      request
    )
      .pipe
        (
        map(resp => {
          this.isLogin = true;
          return resp;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errMessage = '';

    if (errorResponse.error.error)
    {
      switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          errMessage = 'This email already exists';
          break;
        case 'INVALID_PASSWORD':
          errMessage = 'Username or Password does not match';
          break;
        case 'USER_DISABLED':
          errMessage = 'user account has been disabled';
          break;
        default:
          errMessage = 'An unknown error occured';
          break;
      }
    }
    else {
      errMessage = 'An unknown error occured'; 
    }
    return throwError(errMessage);
  }
}