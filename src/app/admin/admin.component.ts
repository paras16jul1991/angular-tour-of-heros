import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'Demo';
  greeting = {};


  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {

  }

  authenticated() { 

    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get('resource', options).subscribe(data => this.greeting = data);  
  }

  ngOnInit() {
  }

}
