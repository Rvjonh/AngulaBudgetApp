import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent {
  quatity:number;
  incorrectQuatity:boolean;

  constructor(private _budgetService: BudgetService, private router: Router){
    this.quatity = 0;
    this.incorrectQuatity = false;
  }

  readEnter($e:KeyboardEvent){
    if($e.code === 'Enter'){
      this.addBudget()
    }
  }

  addBudget(){
    if(this.quatity <= 0){
      this.incorrectQuatity = true;
      return false;
    }
    this.incorrectQuatity = false;

    this._budgetService.budget = this.quatity;
    this._budgetService.rest = this.quatity;
    this.router.navigate(['/expenses']);

    return true;
  }
}
