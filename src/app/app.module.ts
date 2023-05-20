import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { SolarComponent } from './solar/solar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }