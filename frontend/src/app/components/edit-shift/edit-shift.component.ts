import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shift } from '../../models/shift.model';
import { ShiftsService } from '../../services/shifts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.css'],
})
export class EditShiftComponent implements OnInit {
  shiftId!: number;
  shiftData: Shift = {
    id: 0,
    date: '',
    startTime: '',
    endTime: '',
    wage: 0,
    place: '',
    shiftname: '',
    comments: '',
  };
  workplaces: string[] = ['Workplace 1', 'Workplace 2', 'Workplace 3'];

  constructor(
    private route: ActivatedRoute,
    private shiftsService: ShiftsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.shiftId = +id;
      this.getShiftDetails(this.shiftId);
    } else {
      console.error('Shift ID is missing');
    }
  }

  getShiftDetails(id: number) {
    this.shiftsService.getShiftById(id).subscribe(
      (data: Shift) => {
        this.shiftData = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching shift details:', error.message);
      }
    );
  }

  updateShift() {
    this.shiftsService.updateShift(this.shiftId, this.shiftData).subscribe(
      () => {
        alert('Shift updated successfully!');
        this.router.navigate(['/my-shifts']);
      },
      (error: HttpErrorResponse) => {
        console.error('Error updating shift:', error.message);
      }
    );
  }

  onEditShift() {
    this.updateShift(); 
  }
}
