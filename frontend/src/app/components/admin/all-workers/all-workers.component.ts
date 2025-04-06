import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../../services/workers.service';
import { Worker } from '../../../models/worker.model';

import { Router } from '@angular/router';


@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css'],
})
export class AllWorkersComponent implements OnInit {
  workers: Worker[] = [];

  constructor(private workersService: WorkersService, private router: Router) {}

  ngOnInit(): void {
    this.getAllWorkers();
  }

  getAllWorkers(): void {
    this.workersService.getWorkers().subscribe((data) => {
      this.workers = data;
    });
  }

  viewProfile(workerId: number): void {
    this.router.navigate(['/profile', workerId]);
  }
}
