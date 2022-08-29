import { NgModule } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';



@NgModule({
  declarations: [TasklistComponent, TaskComponent, CreateTaskComponent, EditTaskComponent, TaskDetailComponent],
  imports: [
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }


