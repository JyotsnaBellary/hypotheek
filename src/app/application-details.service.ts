import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDetailsService {

  constructor(private http:HttpClient) { }

  addInfo(userInfo:any) {
    return this.http.post('http://localhost:8989/dhl/api/addDetails',userInfo)
  }
  getInfo(emailId:any) {
    return this.http.get(`http://localhost:8989/dhl/api/getDetails/${emailId}`)
  }
}
