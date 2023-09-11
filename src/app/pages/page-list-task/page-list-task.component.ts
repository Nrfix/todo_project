import { Component, Input } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-page-list-task',
  templateUrl: './page-list-task.component.html',
  styleUrls: ['./page-list-task.component.scss'],
})
export class PageListTaskComponent {
  public tasks!: Task[];

  constructor(private service: TodoService) {
    this.service.getData().subscribe((data) => {
      console.log('page list task service appele');
      console.log(data);
      console.log(typeof this.tasks); //On a bien un undefined
      this.tasks = data;
    });
  }
}
