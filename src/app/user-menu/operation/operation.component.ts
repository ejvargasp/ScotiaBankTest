import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operations',
  templateUrl: './operation.component.html'
})

export class OperationsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    console.log('operations works');
  }

}
