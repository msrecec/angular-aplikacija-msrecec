import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccinesComponent } from './vaccines/vaccines.component';

const routes: Routes = [
  { path: 'vaccines', component: VaccinesComponent },
  { path: 'detail/:researchName', component: VaccineDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
