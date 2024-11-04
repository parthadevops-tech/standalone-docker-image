import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../models/item.interface';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css'],
})
export class DataformComponent implements OnInit {
  name!: string;
  genre!: string;
  creator!: string;
  creatorType!: string;
  totalTime!: string;

  @Output() AddedItem: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() {
    console.log('Hi2');
  }
  ngOnInit(): void {
    console.log('Hi');
  }

  addedItem() {
    const items: Item = {
      name: this.name,
      genre: this.genre,
      creator: this.creator,
      type: this.creatorType,
      totalTime: this.totalTime,
    };

    this.AddedItem.emit(items);
  }
}
