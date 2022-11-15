import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user-services.service'

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  modalSwitch = false;
  filterPost = '';
  constructor(public userService: UserServices) { }

  ngOnInit(): void {
    this.getUsers("1")
  }

  getUsers(index:string){
    this.userService.getUsers(index).subscribe(
      res =>{ 
        console.log(res)
        this.userService.users = res;
      }
    )
  }

  deleteUser(id:string){
    if(confirm('estas seguro de que quieres eliminarlo?')){
      this.userService.deleteUser(id)
    }
  }

  editUser(){
    // alert('editando a:')
    this.modalSwitch=true
  }

}
