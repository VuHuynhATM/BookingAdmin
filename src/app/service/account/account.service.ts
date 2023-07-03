import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DOMAIN } from 'src/app/utils/config';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  headers:any;
  constructor(private httpClient: HttpClient) { 
    if(localStorage.getItem("Token")!=undefined){
      this.headers = new HttpHeaders({
        'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem("Token") || ""),
        'accept': '*/*',
        'Access-Control-Allow-Origin': '*'
      });
    }
  }
  LoginAccount(name: string, password: string): Observable<any> {
    const body =
    {
      userName: name,
      password: password,
    };
    return this.httpClient.post(DOMAIN + `Authentication`, body, { headers: this.headers , responseType: 'text'}).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  
  getemployeeLarge() : Observable<any>{
    return this.httpClient.get(DOMAIN + `Employees`, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
  getCustomerLarge() : Observable<any>{
    return this.httpClient.get(DOMAIN + `Accounts/customers`, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  AddEmployee(file: string, username: string, password:string, fullname:string, phone:string, email:string): Observable<any> {
    var body =new FormData();
    body.append('image',file);
    body.append('employeeName',username);
    body.append('password',password);
    body.append('fullName',fullname);
    body.append('employeePhone',phone);
    body.append('employeeEmail',email);
    return this.httpClient.post(DOMAIN + `Employees`, body, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  getEmployeeStatus(id:any) : Observable<any>{
    return this.httpClient.get(DOMAIN + `Employees/status/`+id, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
