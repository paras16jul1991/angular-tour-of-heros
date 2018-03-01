import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
       // this.authenticationService.logout();
    }
 
    signup() {
        this.loading = true;
        this.authenticationService.signup(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/home']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
