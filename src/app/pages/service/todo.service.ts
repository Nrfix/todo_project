import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from 'src/app/core/models/task';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  public configUrl = 'http://localhost:3000/tasks';

  public getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.configUrl);
  }

  public getNewTaskId(): Observable<number> {
    return this.getData().pipe(
      map((tasks) => {
        console.log(tasks);
        if (tasks.length === 0) {
          return 1;
        } else {
          const maxId = Math.max(...tasks.map((task) => task.id));
          return maxId + 1;
        }
      })
    );
  }

  public add(obj: Task): Observable<Task> {
    console.log('ici mon post');
    console.log(obj);
    console.log(typeof obj);
    return this.http.post<Task>(this.configUrl, obj);
  }

  public getTaskById(id: number) {
    return;
  }
}
