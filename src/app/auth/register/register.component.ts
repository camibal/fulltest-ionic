import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/interface/register';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/interface/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: RegisterService, private router: Router) { }

  ngOnInit() { }

  loginForm: Register = {
    username: '',
    password: '',
    role: ''
  }
  onLogin() {
    console.log(this.loginForm)
    this.loginService.registerUser(this.loginForm).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}
