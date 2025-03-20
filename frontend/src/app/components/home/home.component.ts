import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  user: any;
  upcomingShift: any = {};
  pastShifts: any[] = []; 

  constructor(private router: Router) {
    const storedUser = sessionStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;

    this.upcomingShift = { shiftname: 'Morning Shift', date: '2025-03-20' };
    this.pastShifts = [
      { shiftname: 'Evening Shift', date: '2025-03-18' },
      { shiftname: 'Night Shift', date: '2025-03-19' }
    ];
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
