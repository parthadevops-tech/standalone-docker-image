import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.interface';

const lengthOptions = [
  {
    id: 0,
    label: 'Kilometre',
    unit: 'Km',
  },
  {
    id: 1,
    label: 'Metre',
    unit: 'm',
  },
  {
    id: 2,
    label: 'Centimetre',
    unit: 'cm',
  },
];

@Component({
  selector: 'app-heckerrankmain',
  templateUrl: './heckerrankmain.component.html',
  styleUrls: ['./heckerrankmain.component.css'],
})
export class HeckerrankmainComponent implements OnInit {
  dataListBookItems: Item[] = [];
  dataListSongsItems: Item[] = [];

  lengthOp = lengthOptions;

  selectedKm!: number;
  selectedM!: number;

  Book!: string;
  Song!: string;

  numberinput1!: number;
  numberinput2!: number;

  constructor() {
    console.log('');
  }
  ngOnInit(): void {
    this.selectedKm = this.lengthOp[0].id;
    this.selectedM = this.lengthOp[1].id;
  }

  addedItems(data: Item) {
    if (data.type === 'Book') {
      //this.dataListBookItems = [];
      console.log('book');
      this.dataListBookItems.push(data);
    }
    if (data.type === 'Song') {
      // this.dataListSongsItems = [];
      console.log('song');
      this.dataListSongsItems.push(data);
    }
  }

  deleteBookItem(index: number) {
    console.log('Index of array::--', index);
    this.dataListBookItems.splice(index, 1);
  }

  deleteSongItem(index: number) {
    console.log('Index of array::--', index);
    this.dataListSongsItems.splice(index, 1);
  }

  numberinput1Change(event: Event) {
    const target = event.target as HTMLInputElement;
    this.numberinput2 = parseInt(target.value) * 1000;
  }

  numberinput2Change(event: Event) {
    const target = event.target as HTMLInputElement;
    this.numberinput1 = parseInt(target.value) / 1000;
  }

  firstdropdwnChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (parseInt(target.value) === 2) {
      console.log('CM');
      this.numberinput2 = this.numberinput1 / 100;
    }
    if (parseInt(target.value) === 1) {
      console.log('M');
    }
    if (parseInt(target.value) === 0) {
      console.log('KM');
      this.numberinput2 = this.numberinput1 * 1000;
    }
  }
}
