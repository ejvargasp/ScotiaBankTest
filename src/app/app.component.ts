import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'scotiabank';
  joke;
  constructor(private http: HttpClient) { }
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
    console.log('login');
  }
}
