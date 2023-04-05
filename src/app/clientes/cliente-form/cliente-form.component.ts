import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  //styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit{

  cliente: Cliente;
  success: boolean = false;
  errors: string[] = new Array();
  clienteSalvo: boolean = false; 
  idCliente: number = 0;

  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private activatedRoute: ActivatedRoute){
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.activatedRoute
    .params
    .subscribe({
      next: urlParams => { 

      if(urlParams['id'] != undefined){
      this.idCliente = urlParams['id'];
      
        this.clienteService
          .getClienteById(this.idCliente)
          .subscribe({ 
            next: response => {
            this.cliente = response
            }, 
            error: errorResponse =>{
              this.cliente = errorResponse.error;
            }})
        console.log(this.idCliente);
      
      }
    }});
    
  
  }

 
  voltarParaListaCliente(){
    this.router.navigate(['/clientes/lista']);
  }

  atualizar(cliente: Cliente, idCliente: number){
    this.clienteService
      .atualizar(cliente, idCliente)
      .subscribe( response => {
        this.cliente = response
        this.errors = []
        }, errorResponse =>{
          this.errors = ['Erro ao atualizar o cliente.']
        }
      )
  }

  onSubmit(){
    if (this.cliente.idCliente != 0){
       this.atualizar(this.cliente, this.cliente.idCliente)
    }else{
       console.log(this.cliente);

       this.clienteService
       .salvar( this.cliente)
       .subscribe( response => {
         this.cliente = response
         console.log(response)
         this.success = true;
         this.clienteSalvo = true;
         this.errors = new Array();
        
       }, errorResponse =>{
         this.errors = errorResponse.error.errors; 
         }
       )
    }
  }


}
