import { Budgetitem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-itemform',
  templateUrl: './add-itemform.component.html',
  styleUrls: ['./add-itemform.component.scss']
})
export class AddItemformComponent implements OnInit {

  @Input() item: Budgetitem ;
 @Output() formSubmit: EventEmitter<Budgetitem> = new EventEmitter<Budgetitem>();

 isNewItem : boolean;

  constructor() { }

  ngOnInit() {
// if item has a value
if (this.item) {
 // this means that an existing item object was passed into this component
 // therefore this is not a new item

 this.isNewItem = false;
 
}else{
  this.isNewItem = true;
  this.item = new Budgetitem('',null);
}

  }

  onSubmit(form:NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
