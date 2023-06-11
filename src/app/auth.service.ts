import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Usuario } from './auth/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl: string = environment.apiBaseURL + "/api/usuarios"
  tokenUrl: string = environment.apiBaseURL + environment.obterTokenUrl 
  clientID: string = environment.clientID
  clientSecret: string = environment.clienteSecret
  jwtHelper: JwtHelperService = new JwtHelperService()

  constructor(private httpCliente: HttpClient) { }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token
    }
    return null
  }

  isAutenticado(): boolean{
    const token = this.obterToken()
    if( token ){
      const espirado = this.jwtHelper.isTokenExpired(token)
      return !espirado
    }
    return false
  }

  terminarSessao(){
    localStorage.removeItem('access_token')
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if ( token ){
      const userName = this.jwtHelper.decodeToken(token).user_name
      return userName
    }
    return null
  }

  salvar(usuario: Usuario): Observable<any>{
    return this.httpCliente.post<Usuario>(`${this.apiBaseUrl}`, usuario);
  }

  tentarLogar(usuario: Usuario): Observable<any>{
    console.log(this.tokenUrl)
    const params = new HttpParams()
          .set('username', usuario.username)
          .set('password', usuario.passwrd)
          .set('grant_type', 'password')

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic '+ btoa(`${this.clientID}:${this.clientSecret}`)
    }
    return this.httpCliente.post(this.tokenUrl, params.toString(), {headers})
  }
}
