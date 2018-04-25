import { Component, Input } from '@angular/core';

@Input()
export class YourDetails {
  public cellpnone: string;
  public pin: string;
}

@Input()
export class OneTimePin {
  public cellphone: string;
  public pin: string;
}
