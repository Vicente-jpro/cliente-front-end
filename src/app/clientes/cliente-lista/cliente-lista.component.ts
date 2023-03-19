import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  //styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit{

  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  idCliente: number = 0;
  

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

  eliminar(idCliente: number){
    this.activatedRoute
      .params
      .subscribe( urlParams =>{
        this.idCliente = urlParams['id'];
        console.log(this.idCliente)
      })

      this.clienteService
        .eliminar(this.idCliente)

    this.router.navigate(['/cliente-lista'])
  }
 
  ngOnInit(): void {
      this.clienteService
        .getClientes()
        .subscribe( response => {
          this.clientes = response;
          console.log(this.clientes);
        }, errorResponse => {
          this.clientes = errorResponse.error
          console.log(errorResponse);
        })

        const params = this.activatedRoute.params
        if(this.idCliente != 0 && params != null ){
          this.eliminar(this.idCliente);
        }
  }



}
