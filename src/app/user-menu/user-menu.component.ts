import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html'
})

export class UserMenuComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log('user menus works');
  }
}
