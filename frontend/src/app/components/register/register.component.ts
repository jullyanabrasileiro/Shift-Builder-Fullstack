import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { 
    email: '', 
    password: '', 
    firstName: '', 
    lastName: '', 
    birthDate: '', 
    confirmPassword: '' 
  };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }


    this.http.post('http://localhost:3000/users', this.user).subscribe(
      () => {
        this.router.navigate(['/login']); 
      },
      () => {
        this.errorMessage = 'Error registering user'; 
      }
    );
  }
}
