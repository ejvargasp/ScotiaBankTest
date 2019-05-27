import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'user-edition',
  templateUrl: './user-edition.component.html'
})

export class UserEditionComponent implements OnInit {
  personFG: FormGroup;
  dataComplete;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.personFG = this._formBuilder.group(
      {
        id: [''],
        name: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', Validators.required],
        password: ['', Validators.required]
      });
    this.dataComplete = false;
  }
  ngOnInit() {
    console.log('user-edition works');
    this.personFG.valueChanges.subscribe((evt) => {
      console.log(evt);
      if (this.checkSingle(evt.name) &&
        this.checkSingle(evt.phone) &&
        this.checkSingle(evt.address) &&
        this.checkSingle(evt.password))
        this.dataComplete = true;
      else
        this.dataComplete = false;
    });
  }

  checkSingle(data) {
    var result = false;
    if (data !== null && data !== undefined && data !== '')
      result = true;
    return result;
  }

  createUser() {
    var userList;
    userList = JSON.parse(localStorage.getItem("userList"));
    if (userList === undefined || userList === null)
      userList = [];
    userList = this.addOrEditUser(userList);
    console.log(userList);
    localStorage.setItem("userList", JSON.stringify(userList));
    var route = "/clientes";
    this.router.navigate([route]);
  }
  addOrEditUser(userList) {
    var actualUser = this.personFG.getRawValue();
    var result = userList;
    var edited = false;
    if (userList)
      if (userList.length > 0)
        for (var i = 0; i < userList.length; i++) {
          if (actualUser.name === userList[i].name) {
            result[i] = actualUser;
            edited = true;
          }
        }
    if (!edited)
      result.push(actualUser);
    return result;
  }

}
