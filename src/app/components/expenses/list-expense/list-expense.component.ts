import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpenseModel } from 'src/app/models/expense';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent {

  subcription: Subscription;
  budget:number = 0;
  rest:number = 0;
  listExpenses: ExpenseModel[] = [];

  constructor(private _budgetService: BudgetService){
    this.subcription = this._budgetService.getExpenses().subscribe((data)=>{
      this.rest -= data.quantity;
      this.listExpenses.push(data);
    })
  }

  ngOnInit():void{
    this.budget = this._budgetService.budget;
    this.rest = this._budgetService.rest;
  }

  ngOnDestroy():void{
    this.subcription.unsubscribe()
  }

  getTotalQuantityFromExpenses(){
    return this.listExpenses.reduce((sum, item)=> sum+=item.quantity, 0);
  }

}
