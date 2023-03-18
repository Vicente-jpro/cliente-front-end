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

  getClientes(): Observable<Cliente[]>{
    return this.httpCliente.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

}
