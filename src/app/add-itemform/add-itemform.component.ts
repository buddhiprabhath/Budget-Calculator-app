import { Budgetitem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-itemform',
  templateUrl: './add-itemform.component.html',
  styleUrls: ['./add-itemform.component.scss']
})
export class AddItemformComponent implements OnInit {

  @Input() item: Budgetitem = new Budgetitem('', null);
 @Output() formSubmit: EventEmitter<Budgetitem> = new EventEmitter<Budgetitem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
