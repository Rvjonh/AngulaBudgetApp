import { Injectable } from '@angular/core';
import { ExpenseModel } from '../models/expense';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:number = 0;
  rest:number = 0;
  private expenses$ = new Subject<ExpenseModel>();
  
  constructor() { }

  addExpense(expense:ExpenseModel){
    this.rest -= expense.quantity;
    this.expenses$.next(expense);
  }

  getExpenses():Observable<any>{
    return this.expenses$.asObservable();
  }
}
