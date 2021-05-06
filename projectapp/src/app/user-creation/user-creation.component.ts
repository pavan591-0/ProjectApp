import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { UsercreationserviceService } from '../usercreationservice.service';
import { Users } from '../Users';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  // userdetails : Users = new Users("","","","",0,"","","","",0,"",0,"",""); 
  userdetails : Users = {} as any;
  UserForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
       fullname: new FormControl(''),
      gender: new FormControl('') ,
      age : new FormControl('0'),
      phoneno:new FormControl(''),
      addr : new FormControl(''),
      state : new FormControl(''),
      city : new FormControl(''),
        pin : new FormControl('0'),
        emp_type: new FormControl(''),
        salary: new FormControl('0'),
        aadhar : new FormControl(''),
        pan: new FormControl('')
  });
  constructor(private userservice : UsercreationserviceService) { }

  ngOnInit(): void {
  }
  isVisible = false;
  userForm(){
    this.isVisible = true;
  }
  userFormDisable(){
    this.isVisible = false;
  }
  onSubmit(){
    console.log(this.userdetails);
    // this.UserForm.reset();
    this.userservice.add(this.userdetails).subscribe(((data: any) => {
      // console.log(data);
      this.userdetails = data;
      this.UserForm.reset();
    }));
  }
}
