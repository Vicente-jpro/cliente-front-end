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

  getCliente() :Cliente{
    let cliente: Cliente = new Cliente
    cliente.bi = "999999999LZ9999";
    cliente.dataCadastro = "2023-11-23";
    cliente.nome = "Java é o melhor";
    return cliente;
  }
}
