import { Component } from '@angular/core';
import { ExpenseModel } from 'src/app/models/expense';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.css']
})
export class EnterExpenseComponent {
  nameExpense:string = "";
  quantityNumber:number = 0;
  incorrectForm:boolean = false;
  textMessageIncorrectForm:string = '';

  constructor(private _budetService:BudgetService){

  }

  addExpense(){
    if(!this.nameExpense || this.quantityNumber <= 0){
      this.incorrectForm = true;
      this.textMessageIncorrectForm = 'Expense Name Wrong or Quantity Wrong'
      return false;
    }

    if(this.quantityNumber > this._budetService.rest){
      this.incorrectForm = true;
      this.textMessageIncorrectForm = 'Quantity greater than rest budget'
      return false;
    }

    this.incorrectForm = false;

    const EXPENSE:ExpenseModel ={
      name: this.nameExpense,
      quantity: this.quantityNumber
    }

    this._budetService.addExpense(EXPENSE);

    this.nameExpense = '';
    this.quantityNumber = 0;
    return true;
  }
}
