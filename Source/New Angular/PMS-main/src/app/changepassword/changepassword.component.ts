import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
//import { User } from 'Models/user';
import {  AbstractControl,FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  //userValue: User[] = [];
  changepasswordForm:FormGroup;
  formSubmitted: boolean = false;

  constructor(private FB: FormBuilder,private service: UserserviceService,private http: HttpClient) 
  { this.changepasswordForm=this.FB.group({});}
  user: any = {

    OldPassword: '',
    NewPassword: '',
    ConfirmPassword: '',

  }

  ngOnInit(): void {
    this.changepasswordForm=this.FB.group({
      currentpassword: ['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$")]],
      newpassword: ['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$")]],
      confirmnewpassword: ['', [Validators.required,this.ValidateConfirmPassword]],
    }
    );
  }
  onSubmit()
  {
    console.log(this.user);
    this.service.onSubmit(this.user).subscribe();
    console.log('on submit works') 
  }

  ValidateConfirmPassword(control: AbstractControl) {
    if (control.value != control.parent?.get('newpassword')?.value) {
      return { passwordNotMatched: true };
    }
    return null;
  }

  logout() {
    //this.service.ClearToken();
    console.log('logout works') 
  }

}
