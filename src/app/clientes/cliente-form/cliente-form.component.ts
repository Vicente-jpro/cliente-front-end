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
      })
  }
}
