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
    return this.httpCliente.post<Cliente>(`${this.apiBaseURL}`, cliente);
  }

  atualizar(cliente: Cliente, idCliente: number): Observable<Cliente>{
    return this.httpCliente
      .patch<Cliente>(`${this.apiBaseURL}/${idCliente}`, cliente);
  }

  eliminar(idCliente: number): Observable<any>{
    return this.httpCliente.delete<any>(`${this.apiBaseURL}/${idCliente}`)
  }

  getClientes(): Observable<Cliente[]>{
    return this.httpCliente
      .get<any[]>(`${this.apiBaseURL}`);
  }

  getClienteById(idCliente: number): Observable<Cliente>{
    return this.httpCliente
      .get<Cliente>(`${this.apiBaseURL}/${idCliente}`);
  }



}
