import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  UpdateTaskDTO } from '@data/interfaces/task';
import { TaskService } from '@data/services/api/task/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  id: number = 0;
  success!: string;
  error!: string;
  updateTaskForm!: FormGroup;

  updateTaskDTO: UpdateTaskDTO = {
    title: '',
    description: '',
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getTask();
    });
  }

  onSubmit(): void {
    if (this.updateTaskForm.valid) {
      this.editTask();
    } else {
      this.updateTaskForm.markAllAsTouched();
    }
  }

  editTask() {
    this.updateTaskDTO = this.updateTaskForm.value;
    this.taskService.updateTask(this.id, this.updateTaskDTO).subscribe(() => {
      this.error = '';
      this.success = 'Editado correctamente';
    });
  }

  getTask() {
    this.taskService.getTask(this.id).subscribe((data) => {
      this.updateTaskForm.patchValue(data);
    });
  }

  onBack() {
    this.router.navigate(['/tasks']);
  }

  initForm(): void {
    this.updateTaskForm = this.fb.nonNullable.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }


  isInvalidField(name: string): boolean {
    const fieldName = this.updateTaskForm.get(name);
    if (fieldName) {
      return fieldName?.invalid && fieldName?.touched;
    } else {
      return false;
    }
  }

  isValidField(name: string): boolean {
    const fieldName = this.updateTaskForm.get(name);
    if (fieldName) {
      return fieldName?.valid && fieldName?.touched;
    } else {
      return false;
    }
  }
}
