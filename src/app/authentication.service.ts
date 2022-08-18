import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  emailId:string | any;

  private baseUrl = 'http://localhost:8989/dhl/api/registerUser'
  private baseUrl1 = 'http://localhost:8989/dhl/api/findByEmail'

  constructor(private http:HttpClient) { }


  login(User:any):Observable<any>
  {
    return this.http.post(`http://localhost:8989/dhl/api/loginUser`,User)
  }

  saveUser(User: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, User);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

  
  getUser(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${this.emailId}`);
  }
}
