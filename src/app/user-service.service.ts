import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8989/dhl/api/findAllUsers';
  private baseUrl1 = 'http://localhost:8989/dhl/api/register/delete';
  constructor(private http:HttpClient) { }


  getUserList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getUserDoc(id:string){
    return this.http.get(`http://localhost:8989/dhl/api/documents/${id}`);
  }

  findallusers() {
    return this.http.get(`http://localhost:8989/dhl/api/findAllUsers`)
  }
  deleteUser( id: any): Observable<any> {

    return this.http.delete(`${this.baseUrl1}/${id}`,{ responseType: 'text' });
  }

  getuser(id:string):Observable<any>{
    return this.http.get(`http://localhost:8989/dhl/api/findByEmail//${id}`);
  }

  updateuser(id:any) {

    return this.http.put(`http://localhost:8989/dhl/api/update?id=${id}&status=true`,{})
    // return this.http.put(`http://localhost:8989/dhl/api/update?id=${id}`, status, loan)
  }
  findByEmail(emailId:any) {
    return this.http.get(`http://localhost:8989/dhl/api/findByEmail/${emailId}`)
  
  }

  findByEmailId(email:any) {
    return this.http.get(`http://localhost:8989/details/findByEmail/${email}`)
  
  }

  findByAccNo(accNo:any) {
    return this.http.get(`http://localhost:8989/dhl/api/findByAcc/${accNo}`)
  
  }

  findalluserdetails():Observable<any> {
    return this.http.get(`http://localhost:8989/details/findAllUserdetails`)
  }
}
