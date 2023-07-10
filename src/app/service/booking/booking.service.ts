import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DOMAIN } from 'src/app/utils/config';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
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
  getbookingLarge() : Observable<any>{
    return this.httpClient.get(DOMAIN + `Bookings`, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  CreateTask(id:any, empid:number) : Observable<any>{
    let ids: Array<number>;
    ids=[empid];
    const body={
      bookingId:id,
      empID:ids
    }
    return this.httpClient.post(DOMAIN + `Bookings/create-task`,body, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  DoTask(id:any) : Observable<any>{
    return this.httpClient.post(DOMAIN + `Bookings/done-task/`+id,null, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }

  GetEmployee(id:any) : Observable<any>{
    return this.httpClient.post(DOMAIN + `Bookings/choose-emp/`+id,null, { headers: this.headers }).pipe(
      catchError((err:HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
