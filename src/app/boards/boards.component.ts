import { Component, OnInit } from '@angular/core';
import { PinterestService } from '../services/pinterest.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  constructor(private pinterest: PinterestService) { }

  boards: any = [];

  /* async ngOnInit() {
    try {
      let result = await this.pinterest.listBoards();
      if (result) {
        this.boards = result['data'];
      }
      console.log(this.boards);
    }
    catch(error) {
      console.error(error);
    }
  } */

  ngOnInit() {
    this.pinterest.listBoards();
  }

}
