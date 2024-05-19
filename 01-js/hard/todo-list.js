/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  // Method to add a todo
  add(task) {
    return this.todoList.push(task);
  }

  // Method to remove a todo
  remove(indexOfTodo) {
    return this.todoList.splice(indexOfTodo, 1);
  }

  // Method to get a todo item by index
  get(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length) {
      return null;
    }
    return this.todoList[indexOfTodo];
  }

  // Method to update a todo item by index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList[index] = updatedTodo;
    } 
  }

  // Method to get all todos
  getAll() {
    return this.todoList;
  }

  // Method to clear all todos
  clear() {
    return (this.todoList = []);
  }
}

module.exports = Todo;
