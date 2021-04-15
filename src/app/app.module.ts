import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccineInfoComponent } from './vaccine-info/vaccine-info.component';
import { SideEffectComponent } from './side-effect/side-effect.component';
import { SideEffectDetailComponent } from './side-effect-detail/side-effect-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinesComponent,
    VaccineDetailComponent,
    VaccineInfoComponent,
    SideEffectComponent,
    SideEffectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
