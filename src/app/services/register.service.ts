import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Register } from '../interface/register';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private htttp: HttpClient) { }

  registerUser(RegisterForm: Register): Observable<Register> {
    return this.htttp.post<Register>(`${environment.endpointAuth}/auth/register`, RegisterForm);
  }

  setUser(user: Register): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("token", token);
  }
}
