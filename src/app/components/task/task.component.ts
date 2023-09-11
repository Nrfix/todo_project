import { Component, Input } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public task!: Task;
  constructor(private router: Router) {}
  public goToEdit(obj: Task) {
    console.log('appel onEdit - task.component.ts');
    console.log(obj);
    this.router.navigate(['list', 'edit', obj.id]);
  }
}
