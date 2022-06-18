import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
//import { LocalStorageService } from 'ngx-webstorage';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthorizeService]
})
export class LoginComponent implements OnInit {
  name;
  pwd;

  constructor(private auth: AuthorizeService,
    private route: Router) { }
  ngOnInit() {
  }
  login() {

    if (this.name == 'abc' && this.pwd == 'abcd') {
      // this.localStorageService.store('user');
      this.route.navigate(['dashboard']);
    }

    else {
      alert("Login failed");
    }
  }
}


