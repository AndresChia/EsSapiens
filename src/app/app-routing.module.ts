import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { HomeComponent } from './components/home/home.component';


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
