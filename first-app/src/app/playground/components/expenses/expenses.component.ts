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

  ngOnInit(): void {
    this.service
      .fetchExpenses()
      .subscribe((expenses) => (this.expenseCollection = expenses));
  }
}
