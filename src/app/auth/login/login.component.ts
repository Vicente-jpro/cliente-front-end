import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario;
  loginError: boolean = false
  cadastrando: boolean = false
  sucesso: boolean = false
  erros: [] = []

  constructor(private authService: AuthService, private router: Router){
    this.usuario = new Usuario()
  }

  onSubmit() :void{
    this.router.navigate(['/login'])
    console.log(this.usuario)

    this.authService
      .salvar(this.usuario)
      .subscribe({
        next: response =>{
          this.sucesso = true
          console.log("Salvo com sucesso.")
        },
        error: errorResponse =>{
          this.sucesso = false
          this.erros = errorResponse.error.errors
          console.log(this.erros)
        }
      })

  }

  preparaCadastrar(event: Event){
    event.preventDefault
    this.cadastrando = true
  }

  cancelar(){
    this.cadastrando = false
  }
}
