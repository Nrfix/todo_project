import { StateTask } from '../enum/state-task';

export interface TaskI {
  state: StateTask;
  id: number;
  description: String;
}
