import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  //styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit{

  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  idCliente: number = 0;
  errors: string[] = []
  isEliminado: boolean = false

  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private activatedRoute: ActivatedRoute ){

  }

  setClienteSelecionado(cliente: Cliente): Cliente{
    return this.cliente = cliente;
  }

  getClienteSelecionado(): Cliente{
    return this.cliente;
  }

  eliminar(cliente: Cliente){

    this.clienteService
    .eliminar(cliente.idCliente)
    .subscribe({ next: response => {
      console.log('Cliente eliminado com sucesso', response)
      this.isEliminado = true
      },
      error: errorResponse =>{
        console.log( errorResponse.error )
        this.ngOnInit()
        this.isEliminado = true
      },
      complete: () =>{
        console.info('Ação concluida com sucesso') 
      }  
    })

  
  }
 
  ngOnInit(): void {

      this.clienteService
        .getClientes()
        .subscribe({
          next: (response) => {
            this.clientes = response
          },
          error: errorResponse =>{
            console.log("Erro na impressão",errorResponse);
            this.clientes = errorResponse.error
          },
          complete: () =>{
            console.log("Acção completa com sucesso.")
          }

        })


  }



}
