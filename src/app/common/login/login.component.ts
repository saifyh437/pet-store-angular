import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService, AuthResponseData } from '../_services/authentication.service';
import { Observable } from 'rxjs';


export interface AuthRequestData {
    email: string;
    password: string;
    returnSecureToken: boolean;
}

@Component({
    selector: 'login-home',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    showErrMsg = false;
    isLoginMode = true;
    errMessage: string = '';
    reset = false;
    request: AuthRequestData =
        {
            email: '',
            password: '',
            returnSecureToken: true
        };

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onClick() {
        this.isLoginMode = !this.isLoginMode;
    }
    
    onHandleErr()
    {
        this.showErrMsg =false;
    }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        let authObj: Observable<AuthResponseData>;

        if (this.loginForm.invalid) {
            this.loading = false;
            return;
        }

        this.request.email = this.f.username.value;
        this.request.password = this.f.password.value;

        if (this.isLoginMode) {
            authObj = this.authenticationService.login(this.request);
        }
        else {
            authObj = this.authenticationService.singup(this.request);
        }

        authObj.subscribe(
            res => {
                this.showErrMsg = false;
                this.loading = false;
                this.reset = this.authenticationService.isLogin;
                this.loginForm.reset();
                this.router.navigate(['home']);

            },
            (error: string) => {
                this.showErrMsg = true;
                this.loading = false;
                this.errMessage = error;
            });
    }
}
