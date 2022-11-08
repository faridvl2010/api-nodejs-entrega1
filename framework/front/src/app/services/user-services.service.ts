import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SendUsuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  URL_API = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get(this.URL_API);
  }

  registerUser(){
    alert('llamada')
    let registerData:SendUsuario= {
    NAME: "prueba",
    LAST_NAME: "pass",
    EMAIL: "123@ashi.com",
    TYPE_DOCUMENT: "cc",
    DOCUMENT: "12",
    STATE: "a", 
    PASSWORD:"12345" 
  }
  this.http.post( this.URL_API,registerData).
  subscribe(res =>{
    alert(res)
  })  
  }
}