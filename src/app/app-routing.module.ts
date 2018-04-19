import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppRouteComponent } from './app-routing.component';
//import { AppRoutingModule } from './/app-routing.module';

const appRoutes: Routes = [
  { path: './views/sendotp', component: AppRouteComponent },
  { path: './views/application', component: AppRouteComponent }
];

@NgModule({
  declarations: [AppRouteComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ]
})
export class AppRoutingModule { }
