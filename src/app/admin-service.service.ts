import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminClass } from './admin-class';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl = 'http://localhost:8989/dhl/api/registerAdmin';

  constructor(private http:HttpClient) { }

  login(AdminClass:any):Observable<any>
  {
    return this.http.post(`http://localhost:8989/dhl/api/loginAdmin`,AdminClass)
  }

  saveAdmin(AdminClass: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, AdminClass);
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('aname')
    console.log(!(admin === null))
    return !(admin === null)
  }

  logOut() {
    sessionStorage.removeItem('aname')
  }
}
