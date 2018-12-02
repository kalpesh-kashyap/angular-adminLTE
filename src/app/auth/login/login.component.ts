import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(private route: Router, fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.required, Validators.pattern('')],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  userLogin() {
    this.route.navigate(['/dashboard']);
  }

}
