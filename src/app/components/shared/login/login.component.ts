import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginInvalido: boolean;

  constructor() {
    this.LoginInvalido = false;
   }

  ngOnInit() {
  }

  Login () {
    this.LoginInvalido = !this.LoginInvalido;
  }

}
