import { StateTask } from '../enum/state-task';

export class Task {
  state = StateTask.A_FAIRE;
  id!: number;
  description!: String;

  constructor(task?: Partial<Task>) {
    // if (task) {
    //   Object.assign(this, task);
    // }
  }
}
