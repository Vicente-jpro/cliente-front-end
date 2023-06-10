import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiBaseURL: string = environment.apiBaseURL + '/api/clientes';

  constructor(private httpCliente: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    const headers = this.getAuthorizationBearerToken()

    return this.httpCliente.post<Cliente>(`${this.apiBaseURL}`, cliente, {headers});
  }

  atualizar(cliente: Cliente, idCliente: number): Observable<Cliente>{
    const headers = this.getAuthorizationBearerToken()

    return this.httpCliente
      .patch<Cliente>(`${this.apiBaseURL}/${idCliente}`, cliente, {headers});
  }

  eliminar(idCliente: number): Observable<any>{
    const headers = this.getAuthorizationBearerToken();

    return this.httpCliente.delete<any>(`${this.apiBaseURL}/${idCliente}, `, {headers})
  }

  getClientes(): Observable<Cliente[]>{
    const headers = this.getAuthorizationBearerToken();
   
    return this.httpCliente
      .get<any[]>(`${this.apiBaseURL}`, {headers});
  }

  getClienteById(idCliente: number): Observable<Cliente>{
    const headers = this.getAuthorizationBearerToken();

    return this.httpCliente
      .get<Cliente>(`${this.apiBaseURL}/${idCliente}`, {headers});
  }

  getAuthorizationBearerToken(){
    const tokenString =  localStorage.getItem('key_access_token')
    const token = JSON.parse(tokenString || '{}')
    const headers = {
      'Authorization': 'Bearer '+token.access_token
    }
    return headers
  }


}
