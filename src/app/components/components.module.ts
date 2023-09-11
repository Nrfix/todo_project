import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [TaskComponent, InputComponent],
})
export class ComponentsModule {}
