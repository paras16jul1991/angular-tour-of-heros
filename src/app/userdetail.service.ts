import { Injectable } from '@angular/core';
import {Expense} from './expense';
import {Http, Response ,Headers, RequestMethod , RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable()
export class UserdetailService {
  
  private heroesUrl = '/userdetail';  // URL to web api

  constructor(private http: HttpClient) { }
  
  
  post(expense: Expense) {
    console.log(`added Expense w/ id=${expense.id}`);
    return this.http.post<Expense>(this.heroesUrl, expense, httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}
