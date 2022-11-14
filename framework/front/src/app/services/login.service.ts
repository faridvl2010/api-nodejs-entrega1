import { GetUser } from './../models/UsuarioLog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_API = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get(this.URL_API)
  }
  registerLogin(EMAIL: String, PASSWORD:String){
    let registerData
  }
  
}

