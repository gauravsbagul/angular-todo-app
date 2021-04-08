import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/modals/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setDynamicClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo?.completed
    }
    return classes
  }

  onToggle(t: Todo | undefined) {
    if (this.todo) {
      this.todo.completed = !t?.completed
      this.todoService.toggleCompleted(this.todo).subscribe(todo => {
      })
    }
  }

  onDelete(t: Todo | undefined) {
    this.deleteTodo.emit(t)
  }
}
