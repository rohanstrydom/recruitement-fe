import { Component, Input } from '@angular/core';

@Input()
export class YourDetails {
  public firstNames: string;
  public surname: string;
  public idNumber: string;
  public cellphone: string;
  public emailAddress: string;
}

@Input()
export class OneTimePin {
  public cellphone: any;
  public pin: any;
}

export class SectionTitles {
 public title: any = [
    'We are excited to hear from you. Start by providing <br />your cellular number below:',
    'Now enter the one time pin (OTP) we’ve sent <br />to the provided number:',
    'Please provide your details below:'
  ];
}
