import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CardHorizontalComponent } from './components/elementosCompartidos/card-horizontal/card-horizontal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColumnCardsComponent } from './components/elementosCompartidos/column-cards/column-cards.component';
import { RegistroComponent } from './components/sistema/registro/registro.component';
import { ControlarPestañasService } from './services/controlar-pestañas.service';
import { TabViewModule } from 'primeng/tabview';

import { FormsModule } from '@angular/forms';
import { PaymentCardComponent } from './components/elementosCompartidos/payment-card/payment-card.component';
import { HomeSistemaComponent } from './components/sistema/home-sistema/home-sistema.component';
import { HeaderSistemaComponent } from './components/sistema/header-sistema/header-sistema.component';
import { SistemaComponent } from './components/sistema/sistema.component';
import { TabMenuComponent } from './components/sistema/tab-menu/tab-menu.component';
import { BancoDeDatosComponent } from './components/sistema/banco-de-datos/banco-de-datos.component';
import { ProximamenteComponent } from './components/sistema/proximamente/proximamente.component';

import { ChartsModule } from 'ng2-charts';
import { AlmanaqueComponent } from './components/sistema/almanaque/almanaque.component';
import { HorarioComponent } from './components/sistema/horario/horario.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiciosComponent,
    PreciosComponent,
    ContactoComponent,
    LoginComponent,
    HomeComponent,
    CardHorizontalComponent,
    ColumnCardsComponent,
    RegistroComponent,
    PaymentCardComponent,
    HomeSistemaComponent,
    HeaderSistemaComponent,
    SistemaComponent,
    TabMenuComponent,
    BancoDeDatosComponent,
    ProximamenteComponent,
    AlmanaqueComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TabViewModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ControlarPestañasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
