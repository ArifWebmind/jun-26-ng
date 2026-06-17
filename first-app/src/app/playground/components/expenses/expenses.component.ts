import { Component, inject, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../../model/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  service = inject(ExpenseService);
  expenseCollection!: Expense[];
  showForm = false;

  ngOnInit(): void {
    this.service
      .fetchAll()
      .subscribe((expenses) => (this.expenseCollection = expenses));
  }

  onDelete(expenseId: string) {
    this.service.delete(expenseId).subscribe(() => {
      this.expenseCollection = this.expenseCollection.filter(
        (exp) => exp.id !== expenseId,
      );
    });
  }

  addNewExpense(expense: Expense) {
    this.service.create(expense).subscribe((newExpense) => {
      this.expenseCollection = [newExpense, ...this.expenseCollection];
      this.showForm = false;
    });
  }
}
