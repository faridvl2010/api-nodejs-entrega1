import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user-services.service'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  constructor(private userService: UserServices){}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(
    //   res => console.log(res)
    // )
  }
  // constructor(private router:Router) { }

  // ngOnInit(): void {
  // }
  // volverHome(){
  //   this.router.navigate(['home'])
  // }

  sendData(values:any) {
    
    alert('Las contraseñas no coinciden')
    if(String(values.PasswordOne) == String(values.PasswordTwo)){
      // this.userService.registerUser(
      //   values.names,
      //   values.apellidos,
      //   values.Email,
      //   values.type,
          
      // )
      console.log(values.type)
    }
    else {
      alert('Las contraseñas no coinciden')
    }
  }

}



