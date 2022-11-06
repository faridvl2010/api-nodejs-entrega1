import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  volverHome(){
    this.router.navigate(['home'])
  }

}
