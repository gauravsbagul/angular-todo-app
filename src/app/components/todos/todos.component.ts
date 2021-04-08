import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modals/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodo(t: Todo) {
    this.todos = this.todos.filter((todo: Todo) => todo.id != t.id)
    this.todoService.deleteTodo(t).subscribe()
  }

  addTodo(t: Todo) {
    this.todoService.addTodo(t).subscribe()
  }
 

}
