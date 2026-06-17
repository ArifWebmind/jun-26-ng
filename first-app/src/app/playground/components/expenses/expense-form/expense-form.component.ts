import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Expense } from '../../../../model/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  @Output()
  newExpenseEvent = new EventEmitter<Expense>();

  onSubmit(expenseForm: NgForm) {
    let newExpense = {
      ...expenseForm.value,
      createdAt: new Date(expenseForm.value.createdAt),
    };
    this.newExpenseEvent.emit(newExpense);
  }
}
