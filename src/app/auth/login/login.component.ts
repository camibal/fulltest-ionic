import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/login';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  loginForm: User = {
    username: '',
    password: ''
  }
  onLogin() {
    this.loginService.login(this.loginForm).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}
