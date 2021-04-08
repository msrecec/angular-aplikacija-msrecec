import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccineInfoComponent } from './vaccine-info/vaccine-info.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinesComponent,
    VaccineDetailComponent,
    VaccineInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
