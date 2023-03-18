import { Component, OnInit} from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit{

  cliente: Cliente;
  success: boolean = false;
  errors: string[] = new Array();

  constructor(private clienteService: ClienteService){
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
      
  }
  onSubmit(){
    this.clienteService
      .salvar( this.cliente)
      .subscribe( response => {
        console.log(this.cliente)
        this.success = true;
        this.errors = new Array();
        
      }, errorResponse =>{
        this.errors = errorResponse.error.errors; 
      }
      )
  }
}
