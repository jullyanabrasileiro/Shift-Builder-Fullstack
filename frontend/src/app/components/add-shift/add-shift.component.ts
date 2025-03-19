import { Component } from '@angular/core';

import { ShiftsService } from '../../services/shifts.service';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
})
export class AddShiftComponent {
  shift = { date: '', startTime: '', endTime: '', wage: 0, place: '', shiftname: '', comments: '' };

  constructor(private shiftsService: ShiftsService) {}

  saveShift() {
    this.shiftsService.addShift(this.shift).subscribe(() => {
      alert('Shift added successfully!');
    });
  }
}