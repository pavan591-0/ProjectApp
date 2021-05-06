import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // this.loading= false;
  }

  users : any[];
  isVisible = false;
  loading = true;
  
  constructor(private userservice : UserService) { }
  ngAfterViewInit(): void {
    // this.loading=false;
  }

  
  getUsers(){
    console.log("Inside getUSers()")
    this.isVisible = true;
    return this.userservice.GetUsers().subscribe(((data: any) => {
      // console.log(data);
      this.users = data;
    }))
  }
  Initial(){
    this.isVisible = false
  }

  deleteUser(email){
    console.log("Inside delete "+email);
    this.userservice.deleteUser(email);

  }



  // onSubmit(){
  //   console.log(this.userdetails);
  //   this.userservice.add(this.userdetails);
  // }

}
