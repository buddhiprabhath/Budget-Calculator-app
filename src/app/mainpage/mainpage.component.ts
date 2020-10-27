import { Budgetitem } from './../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

budgetItems: Budgetitem[] = new Array<Budgetitem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: Budgetitem){
    this.budgetItems.push(newItem);
  }

   deleteItem(item: Budgetitem) {
     let index = this.budgetItems.indexOf(item);
      this.budgetItems.splice(index, 1);
   }

}
