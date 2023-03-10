import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ClientesModule } from './clientes/clientes.module';
import { TemplateModule } from './template/template.module';
 
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    TemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
