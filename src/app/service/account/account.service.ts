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
    if(localStorage.getItem("USER")!=undefined){
      this.headers = new HttpHeaders({
        'authorization': 'Bearer ' + JSON.parse(localStorage.getItem("USER") || "").token,
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
}
