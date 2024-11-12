import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { HomeModule } from './home/home.module';
import { ErroModule } from './core/erro/erro.module';
import { ErrosInterceptor } from './core/erro/erros.interceptor';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    ErroModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrosInterceptor,
      multi: true
    },

],
  bootstrap: [AppComponent]
})
export class AppModule { }
