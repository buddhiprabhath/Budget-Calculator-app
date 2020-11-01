import { EditItemModalComponent } from './../../edit-item-modal/edit-item-modal.component';
import { Budgetitem } from './../../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {


  @Input() item:Budgetitem;
 @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
 @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick (){
    //here we want to emit an event
   this.xButtonClick.emit();

  }

  onCardClick() {
     this.cardClick.emit();
  }

 



}
