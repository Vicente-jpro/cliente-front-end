import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  usuarioLogado: string = ''
  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado()
  }

  terminarSemao(){
    this.authService.terminarSessao()
    this.router.navigate(['/login'])
  }

}
