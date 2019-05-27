import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'scotiabank';
  joke;
  user;
  password;
  userList;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.user = '';
    this.password = '';
  }
  ngOnInit() {
    this.joke = { value: '...' };
    this.getJoke();
    this.prepareUserList
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

  getJoke() {
    var url = "https://api.chucknorris.io/jokes/random";
    return this.http.get(url).subscribe(chuckJoke => {
      this.joke = chuckJoke;
    });
  }

  login() {
    var route = "/login";
    if (this.user === 'admin' && this.password === 'admin')
      route = '/clientes';
    if (this.userList)
      for (let user of this.userList) {
        if (user.name === this.user && user.password === this.password)
          route = "/menu-usuario";
      }
    var logData = { user: this.user };
    localStorage.setItem("login", JSON.stringify(logData));
    this.router.navigate([route]);
  }
}
