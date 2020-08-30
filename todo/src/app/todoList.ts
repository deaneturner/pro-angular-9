import { TodoItem } from './todoItem';

export class TodoList {
    constructor(public user: string, todoItems: TodoItem[] = []) {
    }
}
