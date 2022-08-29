import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '@data/interfaces/task';
import { TaskService } from '@data/services/api/task/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  id: number = 0;

  task: Task = { id: 0, title: '', description: '' };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getTask();
    });
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id).subscribe(() => {
      this.onBack();
    });
  }

  getTask() {
    this.taskService.getTask(this.id).subscribe((data) => {
      this.task = data;
    });
  }

  onBack() {
    this.router.navigate(['/tasks']);
  }
}
