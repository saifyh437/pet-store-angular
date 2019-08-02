import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {  AuthenticationService } from '../_services/authentication.service';

@Component({
             selector: 'login-home',
             templateUrl: './login.component.html',
             styleUrls:['./login.component.css']
            })

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    showErrMsg = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                res => {
                    if(res["url"] === "home")
                   {  
                       console.log(res["url"]);
                       this.router.navigate([res["url"]]);
                   }
                   else
                   { 
                     this.showErrMsg =true;
                     this.loading = false;
                     return this.showErrMsg;
                   }
                },
                error => {
                  console.log(error) 
                });
    }
}
