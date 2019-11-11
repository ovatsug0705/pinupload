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
    // Já tem usuário logado, não precisa fazer login
    if(this.pinterest.getUser()) {
      this.router.navigate(['user']);
    }    
  }

  doLogin() {
    this.pinterest.initLogin();    
  }

}
