import { Component } from '@angular/core';

@Component({
  selector: 'app-responsivematerial',
  templateUrl: './responsivematerial.component.html',
  styleUrls: ['./responsivematerial.component.css'],
})
export class ResponsivematerialComponent {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
