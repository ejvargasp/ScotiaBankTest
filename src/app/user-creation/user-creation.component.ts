import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-creation',
  templateUrl: './user-creation.component.html'
})

export class UserCreationComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    console.log("user creations works!!");
  }
}
