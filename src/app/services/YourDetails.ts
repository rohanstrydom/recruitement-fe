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
