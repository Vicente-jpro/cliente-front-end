import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Usuario;
  loginError: boolean = false
  cadastrando: boolean = false

  constructor(private router: Router){
    this.user = new Usuario()
  }

  onSubmit() :void{
    this.router.navigate(['/login'])
    console.log(this.user)
  }

  preparaCadastrar(event: Event){
    event.preventDefault
    this.cadastrando = true
  }

  cancelar(){
    this.cadastrando = false
  }
}
