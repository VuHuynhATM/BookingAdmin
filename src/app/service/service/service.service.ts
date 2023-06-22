import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DOMAIN } from 'src/app/utils/config';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
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
  getserviceLarge() : Observable<any>{
    return this.httpClient.get(DOMAIN + `Services`, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
