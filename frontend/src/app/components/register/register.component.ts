import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Define the user object with all necessary fields
  user = { 
    email: '', 
    password: '', 
    firstName: '', 
    lastName: '', 
    birthDate: '', 
    confirmPassword: '' // Added confirmPassword to match the template
  };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Register method to handle user registration
  register() {
    // Basic password confirmation check
    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // Send the user object to the backend for registration
    this.http.post('http://localhost:3000/users', this.user).subscribe(
      () => {
        this.router.navigate(['/login']); // Redirect to login page on success
      },
      () => {
        this.errorMessage = 'Error registering user'; // Handle errors
      }
    );
  }
}
