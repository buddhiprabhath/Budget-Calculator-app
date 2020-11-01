import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddItemformComponent } from './add-itemform/add-itemform.component';
import { BudgetItemlistComponent } from './budget-itemlist/budget-itemlist.component';
import { BudgetItemCardComponent } from './budget-itemlist/budget-item-card/budget-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AddItemformComponent,
    BudgetItemlistComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[EditItemModalComponent], 
  bootstrap: [AppComponent]
})
export class AppModule { }
