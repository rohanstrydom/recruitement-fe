import { Component, OnInit, Input } from '@angular/core';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Router, NavigationExtras } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { FormsModule, NgControl, Validators, FormGroup, FormControl, FormControlDirective } from '@angular/forms';

// Services
import { YourDetails, OneTimePin } from './services/RecruitmentProviders';

// Main Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'app';
  constructor() {}

  ngOnInit() {}

}


// CellPhone Number Component
@Component({
  selector: 'app-cellphone-number',
  providers: [ OneTimePin ],
  templateUrl: './views/CellPhoneComponent.html',
  styleUrls: [ './app.component.css' ]
})

export class CellphoneNumberComponent implements OnInit {
  public cellphone: any;
  constructor(private router: Router, public oneTimePin: OneTimePin) {
    this.cellphone = this.oneTimePin.cellphone;
  }

  ngOnInit() {}


  sendCellphone() {
    console.log(this.oneTimePin.cellphone);

    this.router.navigate(['one-time-pin']);
    return true;

  }
}

// One Time Pin Component
@Component({
  selector: 'app-one-time-pin',
  providers: [ OneTimePin ],
  templateUrl: './views/OneTimePinComponent.html',
  styleUrls: ['./app.component.css']
})

export class OneTimePinComponent implements OnInit {

  public pin: any;

  constructor(public oneTimePin: OneTimePin, private router: Router) {
    this.pin = this.oneTimePin.pin; }
  ngOnInit() {}

  sendPin() {
    console.log(this.oneTimePin.pin);
    this.router.navigate(['your-details']);
  }
}

// Your Details
@Component({
  selector: 'app-your-details',
  templateUrl: './views/YourDetails.html',
  styleUrls: ['./app.component.css'],
  providers: [ YourDetails ]
})

export class YourDetailsComponent implements OnInit {
    public firstNames;
    public surname;
    public idNumber;
    public emailAddress;
    public cellphone;

    constructor(public details: YourDetails, public router: Router) {
      this.firstNames = this.details.firstNames;
      this.surname = this.details.surname;
      this.idNumber = this.details.idNumber;
      this.emailAddress = this.details.emailAddress;
      this.cellphone = this.details.cellphone;
    }
    ngOnInit() {}

    sendDetails() { console.log(this.details);
      this.router.navigate(['questions-and-answers']);
    }
}

// Questions and Answers
@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './views/QuestionsAndAnswersComponent.html',
  styleUrls: ['./app.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  sendAnswer() {
        console.log(this.sendAnswer);
        this.router.navigate(['upload-video']);
  }
}

// Upload Videos
@Component({
  selector: 'app-upload-video',
  templateUrl: './views/UploadAVideoComponent.html',
  styleUrls: ['./app.component.css']
})
export class UploadVideoComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit() {}

  uploadVideo() {
    this.router.navigate(['your-done']);
  }
}

// Your Done
@Component({
  selector: 'app-your-done',
  templateUrl: './views/YourDoneComponent.html',
  styleUrls: ['./app.component.css']
})
export class YourDoneComponent implements OnInit {
    constructor(public router: Router) {}
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
