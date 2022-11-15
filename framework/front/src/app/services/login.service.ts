import { GetUser } from './../models/UsuarioLog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{UserLogin, Usuario,SendLogUsuario} from'./../models/Usuario';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import{JwtHelperService} from '@auth0/angular-jwt'
const helper = new JwtHelperService()
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false)
  URL_API = 'https://ms-ussers.herokuapp.com/auth/login'

  constructor(private http: HttpClient) {
    this.checkToken()
   }
get isLogged():Observable<boolean>{
  return this.loggedIn.asObservable()
}
  Login(authData:UserLogin): Observable<void|Usuario>{
    return this.http
    .post<Usuario>(this.URL_API,authData)
    .pipe(
      map((res:Usuario)=>{
        this.saveToken(res.PASSWORD)
        this.loggedIn.next(true)
        return res;
      }),
      catchError((err)=>this.handlerError(err))
    )
  }
  logout(){
    localStorage.removeItem('PASSWORD')
    this.loggedIn.next(false)

  }
  private checkToken(){
    const UserToken =  localStorage.getItem('PASSWORD')
    const isExpired = helper.isTokenExpired()
    console.log('isExpired',isExpired)
    if(isExpired){
      this.logout()
    }else{
      this.loggedIn.next(true)
    }
    //set userLogged
  }
  private saveToken(PASSWORD: string){
    localStorage.setItem('PASSWORD',PASSWORD)
  }
  
  private handlerError(err:any):Observable<never>{
    let errorMessage = `Error de datos`
    if (err) {
      errorMessage=`Error:code ${err.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
   registerLog( EMAIL: string, PASSWORD: string) {
    //parametros de todo lo que se tiene que enviar
    let registerData: SendLogUsuario = {
      EMAIL ,
      PASSWORD
    }
  }
}
