import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateTaskDTO } from '@data/interfaces/task';
import { TaskService } from '@data/services/api/task/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  success!: string;
  error!: string;
  createTaskForm!: FormGroup;

  createTaskDTO: CreateTaskDTO = {
    title: '',
    description: '',
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if (this.createTaskForm.valid) {
      this.createTask();
    } else {
      this.createTaskForm.markAllAsTouched();
    }
  }

  createTask() {
    this.createTaskDTO = this.createTaskForm.value;
    this.taskService.createTask(this.createTaskDTO).subscribe(() => {
      this.resetForm();
      this.error = '';
      this.success = 'Completado correctamente';
    });
  }

  onBack() {
    this.router.navigate(['/tasks']);
  }

  initForm(): void {
    this.createTaskForm = this.fb.nonNullable.group({
      title: [
        '',
        [Validators.required],
      ],
      description: ['', [Validators.required]],
    });
  }

  isInvalidField(name: string): boolean {
    const fieldName = this.createTaskForm.get(name);
    if (fieldName) {
      return fieldName?.invalid && fieldName?.touched;
    } else {
      return false;
    }
  }

  isValidField(name: string): boolean {
    const fieldName = this.createTaskForm.get(name);
    if (fieldName) {
      return fieldName?.valid && fieldName?.touched;
    } else {
      return false;
    }
  }

  private resetForm(): void {
    this.createTaskForm.reset();
  }
}
