import { Component } from '@angular/core';
import { StateTask } from 'src/app/core/enum/state-task';
import { Task } from 'src/app/core/models/task';
import { TodoService } from 'src/app/pages/service/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(private service: TodoService) {} //initialisation du serviceTodo
  public description!: String;

  public onEnterPressed() {
    //id: this.service.getNewTaskId().subscribe(),//impossible d'associer a subscription
    // id: this.service.getNewTaskId(), //impossible d'associer a observable
    this.service.getNewTaskId().subscribe((newId) => {
      const newTask: Task = {
        id: newId,
        description: this.description,
        state: StateTask.A_FAIRE,
      };
      console.log(newTask);
      this.service.add(newTask);
      this.description = ''; //on vide le champ une fois qu'il est utilisé
    });
  }
}
