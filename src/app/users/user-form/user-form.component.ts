import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form;
  pattern = '';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        firstName: ['',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z]*$/)
          ]],
        lastName: ['',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z]*$/)
          ]]
      }),
      dob: [''],
      email: ['',
        [
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]],
      mobileNumber: ['',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
          Validators.maxLength(10),
          Validators.minLength(10)
        ]
      ],
      gender: [''],
      contact: fb.group({
        address: [''],
        state: [''],
        city: ['', Validators.pattern(/^[a-zA-Z]*$/)]
      }),
      isActive: []
    });
  }

  ngOnInit() {
  }

  saveUser(userForm) {
    console.log(userForm);
  }

}
