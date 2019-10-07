import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/sistema/registro/registro.component';
import { HomeSistemaComponent } from './components/sistema/home-sistema/home-sistema.component';
import { SistemaComponent } from './components/sistema/sistema.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  }, {
    path: 'precios',
    component: PreciosComponent
  }, {
    path: 'contactos',
    component: ContactoComponent
  }, {
    path: 'inicio-sesion',
    component: LoginComponent
  }, {
    path: 'registro',
    component: RegistroComponent
  }, {
    path: 'sapiens',
    component: SistemaComponent,
    children: [
      {
        path: 'home',
        component: SistemaComponent,
      }
    ]
  },
  {

    path: '**',
    redirectTo: 'home'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
