import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable, throwError } from 'rxjs';
import {​​​​​​​​ retry, catchError, map }​​​​​​​​ from'rxjs/operators';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getusersurl = "http://localhost:8080/users";
  private delUserUrl = "http://localhost:8080/users/delete/";
  // private setUrl = "http://localhost:8080/user";

  constructor(private httpservice:HttpClient) { }

  // add(user: Users){
  //   console.log(user);
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(user);
  //   this.httpservice.post(this.setUrl+"/"+body, {'headers':headers})  

    // {responseType:'text' as 'json'}
  //}

  // add (setUrl : string) : Observable<boolean>{
  //   return this.httpservice.post(setUrl,'')
  //       .pipe(map((respObj : any) : boolean =>{
  //               return respObj ;
  //           })
  //       )
  // }
  GetUsers(): Observable<Users> {
    return this.httpservice.get<Users>(this.getusersurl)
    .pipe( retry(1), catchError(this.myerrorhandler))
  }
  deleteUser(email){
    console.log("Inside delete:"+this.delUserUrl+email);
    this.httpservice.delete(this.delUserUrl+email).subscribe(()=>
    console.log("User Deleted"));
  }
  myerrorhandler(error) {
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
