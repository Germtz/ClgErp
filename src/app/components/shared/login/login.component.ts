import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginInvalido: boolean;
  Error: string;

  constructor() {
    this.LoginInvalido = false;
   }

  ngOnInit() {
  }

  Login (Form: NgForm) {
    // this.LoginInvalido = !this.LoginInvalido;
    if (Form.valid === false) {
      this.Error = 'Faltan campos para cotinuar';
      this.LoginInvalido = true;
    } else {
      this.LoginInvalido = false;

      console.log('ngForm', Form);
      console.log('Valor', Form.value);
      console.log('JSON', JSON.stringify(Form.value));
    }
  }

}
