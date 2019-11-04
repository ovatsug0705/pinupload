import { Component, OnInit } from '@angular/core';
import { PinterestService } from '../services/pinterest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private pinterest: PinterestService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  doLogin() {
    console.log('Get User:');
    console.log(this.pinterest.getUser());
    if(! this.pinterest.getUser()) {
      this.pinterest.initLogin();
    }
    else {
      this.router.navigate(['user']);
    }
  }

}
