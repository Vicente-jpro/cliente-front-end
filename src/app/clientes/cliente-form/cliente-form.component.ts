import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private clienteService: ClienteService, private router: Router){
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
      
  }

  voltarParaListaCliente(){
    this.router.navigate(['/cliente-lista']);
  }
  onSubmit(){
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
