import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent {

  constructor(private _budgetService: BudgetService){
    this._budgetService.getExpenses().subscribe((data)=>{
      console.log(data)
    })
  }

}
