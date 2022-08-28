import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpClientModule,FormsModule, ReactiveFormsModule],
  declarations: [...fromComponents.components],
  exports: [CommonModule, HttpClientModule,FormsModule, ReactiveFormsModule,...fromComponents.components],
})
export class SharedModule {}
