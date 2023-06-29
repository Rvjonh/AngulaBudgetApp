import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:number = 0;
  rest:number = 0;
  
  constructor() { }
}
