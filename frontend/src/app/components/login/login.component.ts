import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:3000/api/login', {
      email: this.email,
      password: this.password,
    }).subscribe(
      (response) => {
        sessionStorage.setItem('user', JSON.stringify(response)); // save auth user
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = 'Email ou senha inválidos';
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
  
}
