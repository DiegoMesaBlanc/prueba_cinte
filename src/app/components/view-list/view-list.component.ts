import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Item } from '../../common/models/Item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  items: Item[] = [];
  filterItem: Item = new Item();

  constructor(
    private itemsSrv: ItemsService,
    private flashMess: FlashMessagesService
  ) { }

  ngOnInit() {
    this.itemsGet();
  }

  itemsGet() {
    return this.itemsSrv.getItems()
      .then(data => {
        this.items = data.body;
      })
      .catch(err => {
        this.flashMess.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      });
  }

  filter() {
    const term = this.filterItem.title;

    this.items = this.items.filter((tag) => {
      return tag.title.indexOf(term) >= 0;
    });

    if (this.items.length === 0) {
      this.itemsGet();
      this.flashMess.show('Titulo no encontrado', {cssClass: 'alert-danger', timeout: 4000});
    }
  }

}
