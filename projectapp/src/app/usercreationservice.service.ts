import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {​​​​​​​​ retry, catchError, map }​​​​​​​​ from'rxjs/operators';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UsercreationserviceService {

  private setUrl = "http://localhost:8080/user";
  constructor(private httpservice:HttpClient) { }
  add(user: Users): any{
    console.log(user);
    return this.httpservice.post(this.setUrl,user)
    .pipe( retry(1), catchError(this.myerrorhandler))//+"/"+body, {'headers':headers}) 
  }
  myerrorhandler(error) {//4200-
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
}
