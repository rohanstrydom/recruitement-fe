import { Component, OnInit, Input } from '@angular/core';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Router, NavigationExtras } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { YourDetails, OneTimePin } from './services/YourDetails';

// Main Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'app';

  titles = [
    'We are excited to hear from you. Start by providing <br />your cellular number below:',
    'Now enter the one time pin (OTP) we’ve sent <br />to the provided number:',
    'Please provide your details below:'
  ];

  constructor() {}

  ngOnInit() {}

}


// CellPhone Number Component
@Component({
  selector: 'app-cellphone-number',
  templateUrl: './views/CellPhoneComponent.html',
  styleUrls: [ './app.component.css' ]
})

export class CellphoneNumberComponent implements OnInit {
  public cellphone: string;
  constructor(private router: Router, private formGroup: FormGroup, private oneTimePin: OneTimePin) {}

  ngOnInit() {
    this.oneTimePin.cellphone = this.formGroup.get('cellphoneNumber').value;

  }

  onSubmit() {
    this.formGroup = new FormGroup ({
      cellphoneNumber: new FormControl('', Validators.minLength(45))
    });
    console.log(this.formGroup.value);

    this.router.navigate(['one-time-pin']);
    return true;

  }
}

// One Time Pin Component
@Component({
  selector: 'app-one-time-pin',
  templateUrl: './views/OneTimePinComponent.html',
  styleUrls: ['./app.component.css']
})

export class OneTimePinComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  onClickMe() {}
}

// Your Details
@Component({
  selector: 'app-your-details',
  templateUrl: './views/YourDetails.html',
  styleUrls: ['./app.component.css']
})

export class YourDetailsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
// Page not found Component
@Component({
  selector: 'app-page-not-found',
  template: '<h1>Page not found.</h1>'
})

export class PageNotFoundComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
