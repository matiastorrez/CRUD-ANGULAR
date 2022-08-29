import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTaskDTO, Task, UpdateTaskDTO } from '@data/interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  URL: string = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.URL + '/' + id);
  }

  deleteTask(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }

  createTask(dto: CreateTaskDTO): Observable<CreateTaskDTO> {
    return this.http.post<CreateTaskDTO>(this.URL, dto);
  }

  updateTask(id: number, dto: UpdateTaskDTO): Observable<Task> {
    return this.http.put<Task>(this.URL + '/' + id, dto);
  }
}
