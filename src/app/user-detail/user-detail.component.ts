import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailService } from '../userdetail.service';
import { NgForm } from '@angular/forms';
import { Expense } from '../expense';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserdetailService]
})
export class UserDetailComponent implements OnInit {

  userList =  [""]; 
  newItem = "";
  expense = new Expense() ;

  constructor(private userdetailService: UserdetailService) { }

  ngOnInit() {
  
  }

  pushItem = function() {
    this.userList.push(this.newItem);
  }
  onSubmit(expenseForm){

    console.debug(expenseForm);
    this.expense.id = expenseForm.eventName;
    this.expense.eventName = expenseForm.eventName;
    this.expense.expenseByUser = expenseForm.expenseByUser;
    this.expense.detail = this.userList;
    this.userdetailService.post(this.expense);
  }

}
