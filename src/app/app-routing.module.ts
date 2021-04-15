import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideEffectDetailComponent } from './side-effect-detail/side-effect-detail.component';
import { SideEffectComponent } from './side-effect/side-effect.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccinesComponent } from './vaccines/vaccines.component';

const routes: Routes = [
  { path: 'vaccines', component: VaccinesComponent },
  { path: 'detail/:researchName', component: VaccineDetailComponent },
  { path: 'side-effect', component: SideEffectComponent },
  { path: 'side-effect/:shortDescription', component: SideEffectDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
