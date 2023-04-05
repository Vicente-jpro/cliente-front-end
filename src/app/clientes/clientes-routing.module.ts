import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'clientes', component: LayoutComponent, children:[
    { path: 'form', component: ClienteFormComponent},
    { path: 'form/:id', component: ClienteFormComponent},
    { path: 'eliminar/:id', component: ClienteListaComponent},
    { path: 'lista', component: ClienteListaComponent},
    //Quando o usuário acessar a raiz (clientes) dessa rota,
    //Reedireciona para /lista de clientes
    { path: '', redirectTo: '/clientes/lista', pathMatch: 'full'}
  ]}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
