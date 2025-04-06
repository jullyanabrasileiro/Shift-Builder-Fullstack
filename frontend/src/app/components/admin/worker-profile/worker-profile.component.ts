import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkersService } from '../../../services/workers.service';
import { Worker } from '../../../models/worker.model';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css'],
})
export class WorkerProfileComponent implements OnInit {
  worker!: Worker;

  constructor(
    private route: ActivatedRoute,
    private workersService: WorkersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const workerId = +this.route.snapshot.paramMap.get('id')!;
    this.getWorkerProfile(workerId);
  }

  getWorkerProfile(id: number): void {
    this.workersService.getWorkerById(id).subscribe((data) => {
      this.worker = data;
    });
  }

  updateWorker(): void {
    this.workersService.updateWorker(this.worker.id, this.worker).subscribe(() => {
      this.router.navigate(['/admin/all-workers']);
    });
  }

  deleteWorker(): void {
    this.workersService.deleteWorker(this.worker.id).subscribe(() => {
      this.router.navigate(['/admin/all-workers']);
    });
  }
}

