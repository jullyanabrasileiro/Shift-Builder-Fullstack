import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../../services/shifts.service';

@Component({
  selector: 'app-my-shifts',
  templateUrl: './my-shifts.component.html',
})
export class MyShiftsComponent implements OnInit {
  shifts: any[] = [];

  constructor(private shiftsService: ShiftsService) {}

  ngOnInit() {
    this.shiftsService.getShifts().subscribe((data) => {
      this.shifts = data;
    });
  }
}