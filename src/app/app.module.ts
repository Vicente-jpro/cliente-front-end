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
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientesModule,
    ServicoPrestadoModule,
    TemplateModule,
  ],
  providers: [
    ClienteService,
    ServicoPrestadoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
