import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/modals/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo | undefined;

  constructor(private todoService:TodoService) { }

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
    // console.log('Log: ~> file: todo-item.component.ts ~> line 27 ~> TodoItemComponent ~> onToggle ~> todo', todo)
    if (this.todo) {      
      this.todo.completed = !t?.completed  
      this.todoService.toggleCompleted(this.todo).subscribe(todo => {
      console.log('Log: ~> file: todo-item.component.ts ~> line 34 ~> TodoItemComponent ~> this.todoService.toggleCompleted ~> todo', todo)

      })
    }
    
  }

  onDelete(t: Todo| undefined) {

    if (this.todo) {      
      this.todo.completed = !t?.completed  
      this.todoService.toggleCompleted(this.todo).subscribe(todo => {
      console.log('Log: ~> file: todo-item.component.ts ~> line 34 ~> TodoItemComponent ~> this.todoService.toggleCompleted ~> todo', todo)

      })
    }
  }

}
