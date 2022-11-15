import { UserLogin } from './../models/Usuario';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user-services.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private LoginService:LoginService
    ) { }

  ngOnInit(): void {
  }
  onLogin(){
    
  //  const formValue = this.loginForm.value;
  //   this.LoginService.Login(formValue).subscribe((res)=>{
  //     if (res) {
  //       this.router.navigate([''])
  //     }
  //   })
  }
  sendData(values: any) {
        // this.userService.logUser(
        //   values.Email,
        //   values.PasswordOne,
        // )
         console.log(values.Email)
         console.log(values.pass)
         if (values.Email == "" || values.pass == "") {
           alert('Faltan campos por llenar')
         }else {
          this.LoginService.registerLog(
            values.EMAIL,
            values.PASSWORD
          )
         }
   }
}
