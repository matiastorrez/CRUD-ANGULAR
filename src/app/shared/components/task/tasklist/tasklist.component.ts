import { Component, OnInit } from '@angular/core';
import { Task } from '@data/interfaces/task';
import { TaskService } from '@data/services/api/task/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskService.getAllTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
