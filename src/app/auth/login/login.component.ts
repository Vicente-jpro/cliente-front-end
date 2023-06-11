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
  erros: string[] = []
  mensagemSucesso = "";
  criarConta = false

  constructor(private authService: AuthService, private router: Router){
    this.usuario = new Usuario()
  }

  onSubmit() :void{
    console.log(this.usuario)
    this.authService
      .tentarLogar(this.usuario)
      .subscribe({
        next: response =>{
          this.router.navigate(['/home'])
          const access_token = JSON.stringify(response)
          localStorage.setItem('access_token', access_token)

          console.log(response)
        },
        error: errorResponse =>{
           this.erros = ['Usuário e/ou senha incorreto(s).']
           
        }
      })

  }

  cadastrar(){
    console.log(this.usuario)

    this.authService
      .salvar(this.usuario)
      .subscribe({
        next: response =>{
          this.sucesso = true
          this.mensagemSucesso = "Cadastro realizado com sucesso. Efectue o login."
          this.loginError = false
          this.cadastrando = false;
          this.usuario = new Usuario
          this.erros = []
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
