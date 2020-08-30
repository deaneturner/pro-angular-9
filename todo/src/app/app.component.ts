import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list: TodoList = new TodoList('Bob', [
      new TodoItem('Go for a run', true),
      new TodoItem('Get flowers'),
      new TodoItem('Collect tickets')
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem [] {
      return this.list.items
        .filter((item) => !item.complete);
  }

  addItem(item): void {
    if (item) {
      this.list.addItem(item);
    }
  }
}
