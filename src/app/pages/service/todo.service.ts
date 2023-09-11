import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  public getTaskById(id: number) {
    return;
  }
}
