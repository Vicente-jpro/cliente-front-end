import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {



  constructor(private httpCliente: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.httpCliente.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  atualizar(cliente: Cliente, idCliente: number): Observable<Cliente>{
    return this.httpCliente
      .patch<Cliente>(`http://localhost:8080/api/clientes/${idCliente}`, cliente);
  }

  eliminar(idCliente: number){
    this.httpCliente.delete(`http://localhost:8080/api/clientes/${idCliente}`)
  }

  getClientes(): Observable<Cliente[]>{
    return this.httpCliente
      .get<any[]>('http://localhost:8080/api/clientes');
  }

  getClienteById(idCliente: number): Observable<Cliente>{
    return this.httpCliente
      .get<Cliente>(`http://localhost:8080/api/clientes/${idCliente}`);
  }



}
