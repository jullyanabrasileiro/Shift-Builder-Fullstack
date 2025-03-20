import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';
import { Worker } from 'src/app/models/worker.model';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css'],
})
export class AllWorkersComponent implements OnInit {
  workers: Worker[] = [];

  constructor(private workersService: WorkersService) {}

  ngOnInit(): void {
    this.getAllWorkers();
  }

  getAllWorkers(): void {
    this.workersService.getWorkers().subscribe((data) => {
      this.workers = data;
    });
  }

  viewProfile(workerId: number): void {
    // Navegação para perfil do worker
  }
}
