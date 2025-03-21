import { Component } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    HomeComponent,
    RouterModule,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  startDate: Date | undefined;
  endDate: Date | undefined;

  dateFilterRangeUpdated(dateFilterEvent: Date[]) {
    if (dateFilterEvent.length > 1) {
      this.startDate = dateFilterEvent[0];
      this.endDate = dateFilterEvent[1];
    }
  }

}