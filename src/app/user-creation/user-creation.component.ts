import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-creation',
  templateUrl: './user-creation.component.html'
})

export class UserCreationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    console.log("user creations works!!");
  }

  addUser() {
    var route = "/crear-usuario";
    this.router.navigate([route]);
  }
}
