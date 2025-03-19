import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { email: '', password: '', firstName: '', lastName: '', birthDate: '' };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('http://localhost:3000/users', this.user).subscribe(() => {
      this.router.navigate(['/login']);
    }, () => {
      this.errorMessage = 'Error registering user';
    });
  }
}