import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  title = 'app';
  sectionTitle = [
    'We are excited to hear from you. Start by providing <br />your cellular number below:',
    'Now enter the one time pin (OTP) we’ve sent <br />to the provided number:',
    'Please provide your details below:'
  ];
}
