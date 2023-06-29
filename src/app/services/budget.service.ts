import { Injectable } from '@angular/core';
import { ExpenseModel } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:number = 0;
  rest:number = 0;
  
  constructor() { }

  addExpense(expense:ExpenseModel){
    this.rest -= expense.quantity;
  }
}
