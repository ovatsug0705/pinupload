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
  boardPins: any = [];

  async ngOnInit() {
    try {
      let result = await this.pinterest.listBoards();
      this.boards = result['data'];
      console.log(this.boards);
    }
    catch(error) {
      console.error(error);
    }
  }

  async fetchPins(boardName: string) {
    try {
      let result = await this.pinterest.listBoardPins(boardName);
      this.boardPins = result['data'];
      console.log(result);
    }
    catch(error) {
      console.log(error);
    }
  }

}
