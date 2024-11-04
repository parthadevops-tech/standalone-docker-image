import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item.interface';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css'],
})
export class DatalistComponent implements OnInit {
  @Input() dataList!: Item[];
  @Input() dataType!: string;

  @Output() itemIndex: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    console.log('');
  }

  ngOnInit(): void {
    console.log('');
  }

  deleteItem(item: number) {
    this.itemIndex.emit(item);
  }
}
