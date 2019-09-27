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
    ColumnCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
