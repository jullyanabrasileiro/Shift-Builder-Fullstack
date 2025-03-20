import { Component } from '@angular/core';
import { ShiftsService } from '../../services/shifts.service';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
})
export class AddShiftComponent {
  shift = { 
    date: '', 
    startTime: '', 
    endTime: '', 
    wage: 0, 
    place: '', 
    shiftname: '', 
    comments: '', 
    hourlyRate: 0,  // Added hourlyRate
    workplace: ''   // Added workplace
  };

  workplaces = ['Place 1', 'Place 2', 'Place 3'];  // Example workplaces, you can adjust as needed

  constructor(private shiftsService: ShiftsService) {}

  saveShift() {
    this.shiftsService.addShift(this.shift).subscribe(() => {
      alert('Shift added successfully!');
    });
  }
}
