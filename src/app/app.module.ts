import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AppComponent, OneTimePinComponent, CellphoneNumberComponent, YourDetailsComponent, PageNotFoundComponent } from './app.component';
// import { HeroFormComponent } from './hero-form/hero-form.component';

import { AppRoutingModule } from './/app-routing.module';
import { basename } from 'path';

const appRoutes: Routes = [
  { path: '', component: CellphoneNumberComponent },
  { path: 'one-time-pin', component: OneTimePinComponent },
  { path: 'your-details', component: YourDetailsComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [ AppComponent,
                  CellphoneNumberComponent,
                  OneTimePinComponent,
                  YourDetailsComponent,
                  PageNotFoundComponent,
                  CommonModule
                  ],
  imports: [  BrowserModule,
              NgbModule.forRoot(),
              CommonModule,
              RouterModule.forRoot( appRoutes, { enableTracing: false }),
              FormsModule,
              FormGroup,
              FormControl ],
  providers: [ FormControl, FormGroup, FormsModule ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
