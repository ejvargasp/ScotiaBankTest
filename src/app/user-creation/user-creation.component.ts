import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'user-creation',
  templateUrl: './user-creation.component.html'
})

export class UserCreationComponent implements OnInit {

  userList;
  isAccountEnable = false;
  accountNumber;
  balance;
  operation;
  transfer = false;
  value;
  alert;
  initDate;
  endDate;
  showUserBalance = false;
  operationSum;
  userInform;
  constructor(private router: Router) { }
  ngOnInit() {
    this.operation = "debit";
    this.value = 0;
    this.prepareUserList();
  }

  prepareUserList() {
    this.userList = [];
    var list = JSON.parse(localStorage.getItem("userList"));
    if (list)
      list.forEach(x => {
        this.userList.push(x);
      });
    if (this.userList === null || this.userList === undefined)
      this.userList = [];
  }

  addUser() {
    var route = "/crear-usuario";
    this.router.navigate([route]);
  }

  checkAccountCreation() {
    if (this.accountNumber !== null && this.accountNumber !== undefined && this.accountNumber !== '') {
      if (this.balance !== null && this.balance !== undefined && this.balance !== '') {
        this.isAccountEnable = true;
      } else
        this.isAccountEnable = false;
    } else
      this.isAccountEnable = false;
  }

  addAccount(index) {
    if (!this.userList[index].accountList)
      this.userList[index].accountList = [];
    this.userList[index].accountList.push({ number: this.accountNumber, balance: this.balance });
    localStorage.setItem("userList", JSON.stringify(this.userList));
  }

  setOperation(value) {
    this.operation = value;
  }

  checkTransfer() {
    if (this.value)
      this.transfer = true;
    else
      this.transfer = false;
  }
  checkDate() {
    if (this.initDate && this.endDate)
      this.showUserBalance = true;
    console.log(this.initDate, this.endDate);

  }
  transferAccount(i, aIdx) {
    this.alert = false;
    if (this.userList[i].accountList[aIdx].h === null ||
      this.userList[i].accountList[aIdx].h === undefined)
      this.userList[i].accountList[aIdx].h = [];

    var newBalance = 0;
    if (this.operation === 'credit')
      newBalance = this.userList[i].accountList[aIdx].balance - this.value;
    else
      newBalance = this.userList[i].accountList[aIdx].balance + this.value;
    console.log(newBalance);
    if (newBalance >= 0) {
      this.userList[i].accountList[aIdx].balance = newBalance;
      this.userList[i].accountList[aIdx].h.push(
        {
          type: this.operation,
          value: this.value,
          date: new Date().getTime()
        }
      );
      localStorage.setItem("userList", JSON.stringify(this.userList));
      console.log(this.userList);
    } else {
      this.alert = true;
    }
  }

  showBalance(i) {
    this.userInform = i;
    var initDate = new Date(this.initDate).setHours(0, 0, 0);
    var endDate = new Date(this.endDate).setHours(23, 59, 59, 999);
    this.operationSum = [];
    for (let account of this.userList[i].accountList) {
      var sum = 0;
      if (account.h) {
        for (let operation of account.h) {
          console.log(operation.date, endDate, initDate);
          if (operation.date <= endDate && operation.date >= initDate)
            sum++;
        }
      }
      this.operationSum.push(sum);
      console.log(this.operationSum);
    }
  }
}
