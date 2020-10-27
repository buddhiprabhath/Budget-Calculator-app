import { Budgetitem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-itemlist',
  templateUrl: './budget-itemlist.component.html',
  styleUrls: ['./budget-itemlist.component.scss']
})
export class BudgetItemlistComponent implements OnInit {

  @Input() budgetItems: Budgetitem[];
  @Output() delete: EventEmitter<Budgetitem> = new EventEmitter<Budgetitem>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item:Budgetitem) {
      this.delete.emit(item);  

  }



}
