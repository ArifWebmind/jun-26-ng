import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Expense } from '../../model/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/expenses';

  fetchExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.baseUrl);
  }
}
