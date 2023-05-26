import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { ClientesModule } from './clientes/clientes.module';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClienteService } from './cliente.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ServicoPrestadoService } from './servico-prestado.service';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientesModule,
    ServicoPrestadoModule,
    TemplateModule,
    AuthModule,
  ],
  providers: [
    ClienteService,
    ServicoPrestadoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
