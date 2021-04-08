import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from '../modals/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  
  todosLimit = '?limit=10'

  constructor(private http:HttpClient) { }


  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    
  }

  toggleCompleted(todo:Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
    
  }

  deleteTodo(todo: Todo): Observable<any>{
     const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete(url, httpOptions)
  }

  addTodo(todo: Todo): Observable<any>{
    return this.http.post(this.todosUrl, Todo, httpOptions)
  }
}
