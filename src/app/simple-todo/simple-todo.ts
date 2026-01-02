import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './simple-todo.html',
  styleUrl: './simple-todo.scss',
})
export class SimpleTodo {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask.trim()) {
      this.newTask = '';
      return;
    }
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
