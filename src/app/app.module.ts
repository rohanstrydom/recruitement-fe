import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ViewPhoneNumberComponent } from './views/view-phoneNumber.component';
import { ViewOneTimePinComponent } from './views/view-oneTimePin.component';
import { ViewComponent } from './views/view.component';

//import { AppRoutingModule } from './/app-routing.module';
//import { AppRouteComponent } from './app-routing.component';

@NgModule({
  declarations: [
    AppComponent, 
    ViewComponent,
    ViewPhoneNumberComponent,
    ViewOneTimePinComponent
  ],
  imports:[ BrowserModule, 
            NgbModule.forRoot(), 
            CommonModule,
            FormsModule
          ],
  providers: [],
  bootstrap: [
    AppComponent, 
    ViewComponent,
    ViewPhoneNumberComponent,
    ViewOneTimePinComponent
  ]
})

export class AppModule { }
