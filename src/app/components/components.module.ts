import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [TaskComponent, InputComponent],
  imports: [CommonModule],
  exports: [TaskComponent, InputComponent],
})
export class ComponentsModule {}
