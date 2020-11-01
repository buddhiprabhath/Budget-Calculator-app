import { Budgetitem } from './../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';
import {UpdateEvent} from '../budget-itemlist/budget-itemlist.component'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

budgetItems: Budgetitem[] = new Array<Budgetitem>();
totalBudget: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: Budgetitem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

   deleteItem(item: Budgetitem) {
     let index = this.budgetItems.indexOf(item);
      this.budgetItems.splice(index, 1);
      this.totalBudget -= item.amount;
   }

   updateItem(updateEvent: UpdateEvent) {

    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]= updateEvent.new; 

this.totalBudget -= updateEvent.old.amount;
this.totalBudget += updateEvent.new.amount;

   }
  
}
