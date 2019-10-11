import { Component, OnInit } from '@angular/core';
import { PinterestService } from '../../services/pinterest.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(
    private pinterest: PinterestService
  ) { }

  ngOnInit() {
  }

  logOff() {
    this.pinterest.logOff();
  }

  hasUser() {
    return this.pinterest.getUser();
  }

}
