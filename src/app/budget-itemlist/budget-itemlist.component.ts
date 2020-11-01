import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { Budgetitem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
 

@Component({
  selector: 'app-budget-itemlist',
  templateUrl: './budget-itemlist.component.html',
  styleUrls: ['./budget-itemlist.component.scss']
}) 



export class BudgetItemlistComponent implements OnInit {

  @Input() budgetItems: Budgetitem[];
  @Output() delete: EventEmitter<Budgetitem> = new EventEmitter<Budgetitem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item:Budgetitem) {
      this.delete.emit(item);  

  }

  onCardClicked(item: Budgetitem) {
    //show the edoit model

    const dialogRef = this.dialog.open(EditItemModalComponent,{
      width: "580px",
    
      data: item
    });

    dialogRef.afterClosed().subscribe( result => {
      //check if result has a value

      if (result) {
        this.update.emit({ 
          old: item,
          new: result
        });

      }
    });
  }



}
export interface UpdateEvent {
  old: Budgetitem;
  new: Budgetitem;
}
