import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'account-creation',
  templateUrl: './account-creation.component.html'
})

export class AccountCreationComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    console.log('account-creation works');
  }

}
