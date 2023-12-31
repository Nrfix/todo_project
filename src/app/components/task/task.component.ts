import { Component, Input } from '@angular/core';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public task!: Task;
}
