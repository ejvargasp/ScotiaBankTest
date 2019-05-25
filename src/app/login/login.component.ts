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
  }

  getJoke() {
    var url = "https://api.chucknorris.io/jokes/random";
    return this.http.get(url).subscribe(chuckJoke => {
      this.joke = chuckJoke;
    });
  }

  login() {
    var route = "/menu-usuario";
    if (this.user === 'admin' && this.password === 'admin')
      route = '/clientes';
    this.router.navigate([route]);
  }
}
