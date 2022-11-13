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


  registerUser(NAME:String,LAST_NAME:String, EMAIL:String, TYPE_DOCUMENT:string, DOCUMENT:string, STATE:string, PASSWORD:string ){
    //parametros de todo lo que tiene que enviar
    let registerData:SendUsuario= {
    NAME,
    LAST_NAME,
    EMAIL,
    TYPE_DOCUMENT,
    DOCUMENT,
    STATE, 
    PASSWORD
  }
  this.http.post( this.URL_API,registerData).
  subscribe(res =>{
    alert(res)
  })  
  }
}