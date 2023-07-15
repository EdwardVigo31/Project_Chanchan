import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EventoComponent } from './Components/evento/evento.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './Components/layouts/navbar/navbar.component';
import { CrearEventoComponent } from './Components/evento/crear-evento.component';
import { EventoService } from './services/evento.service';
import { NewsListComponentComponent } from './Components/News/news-list-component-prototype/news-list-component.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { NewsEditComponentComponent } from './Components/News/news-edit-component-prototype/news-edit-component.component';
import { NewsCreateEditComponentComponent } from './Components/News/news-create-edit-component-prototype/news-create-edit-component.component';

// Card material

import {MatCardModule} from '@angular/material/card';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

//Modal material 
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [

//TODO ADMIN  
  // Eventos
  { path: 'eventos', component: EventoComponent },
  { path: 'eventos/create', component: CrearEventoComponent },
  { path: 'eventos/nuevo/:id', component: CrearEventoComponent },
  // News
  { path: 'newslist', component: NewsListComponentComponent },
  { path: 'nuevaNoticia', component: NewsCreateEditComponentComponent },
  { path: 'editar/:id', component: NewsCreateEditComponentComponent },
  // Home
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    NavbarComponent,
    CrearEventoComponent,
    NewsListComponentComponent,
    NewsEditComponentComponent,
    NewsCreateEditComponentComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [MatTableModule, MatIconModule],
  providers: [EventoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
