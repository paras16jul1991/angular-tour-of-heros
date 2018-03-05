import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    login(username: string, password: string): Observable<boolean> {
        return this.http.post('/login', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                var token = response.headers.get('Authorization');
                console.log(token);
                if (token) {
                    // set token property
                    this.token = token;
                    console.log(token);
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
	
	
	 signup(username: string, password: string): Observable<boolean> {

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({ headers: headers });
     
		return this.http.post('/sign-up', JSON.stringify({ username: username, password: password }),options)
            .map((response: Response) => {
                return false;
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
