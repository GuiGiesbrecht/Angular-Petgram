import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    const user = {
      email: this.email,
      password: this.password,
    };

    console.log(user);
  }
}

export interface User {
  email: string;
  password: string;
}
