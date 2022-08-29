import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '@data/interfaces/task';
import { TaskService } from '@data/services/api/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { id: 0, title: '', description: '' };
  @Output() refreshTaks = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  deleteTask(): void {
    this.taskService
      .deleteTask(this.task.id)
      .subscribe(() => this.refreshTaks.emit());
  }

  getTask() {
    this.taskService.getTask(this.task.id).subscribe((data) => {
      this.task = data;
    });
  }
}
