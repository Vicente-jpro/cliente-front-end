import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

const routes: Routes = [
  { path: 'cliente-form', component: ClienteFormComponent},
  { path: 'cliente-form/:id', component: ClienteFormComponent},
  { path: 'cliente-eliminar/:id', component: ClienteListaComponent},
  { path: 'cliente-lista', component: ClienteListaComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
