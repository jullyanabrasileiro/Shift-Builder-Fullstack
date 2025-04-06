import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../../../services/shifts.service';
import { Shift } from '../../../models/shift.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-shifts',
  templateUrl: './all-shifts.component.html',
  styleUrls: ['./all-shifts.component.css'],
})
export class AllShiftsComponent implements OnInit {
  shifts: Shift[] = [];
  searchWorkerName: string = '';
  searchPlace: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private shiftsService: ShiftsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllShifts();
  }

  getAllShifts(): void {
    this.shiftsService.getShifts().subscribe((data) => {
      this.shifts = data;
    });
  }

  filterShifts(): void {
    this.shiftsService
      .filterShifts(this.searchWorkerName, this.searchPlace, this.startDate, this.endDate)
      .subscribe((data) => {
        this.shifts = data;
      });
  }

  editShift(id: number): void {
    this.router.navigate(['/edit-shift', id]);
  }

}
