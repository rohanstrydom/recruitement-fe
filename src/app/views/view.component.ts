import { Component, Inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button } from 'protractor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-view',
    templateUrl:'./view.component.html',
    styleUrls: ['../app.component.css']
})

export class ViewComponent {
   /* form: FormGroup;
  
    constructor(@Inject(FormBuilder) fb: FormBuilder) {
      this.form = fb.group({
        name: fb.group({
          first: ['Nancy', Validators.minLength(2)],
          last: 'Drew',
        }),
        email: '',
      });
    }*/
}
 