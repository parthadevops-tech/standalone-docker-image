import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-tmplt',
  templateUrl: './responsive-tmplt.component.html',
  styleUrls: ['./responsive-tmplt.component.scss']
})
export class ResponsiveTmpltComponent {

  input1!: string;
  input2!: string;
  operator = ['+','-','/','*'];
  calculatedRs:any;
  selectedVl:any;
  calculation:any = {
    '+': (x: number,y: number)=>{return x + y},
    '-': (x: number,y: number)=>{return x - y},
    '/': (x: number,y: number)=>{return x / y},
    '*': (x: number,y: number)=>{return x * y},
  }

  GetResult(){
    this.calculatedRs = this.calculation[this.selectedVl](parseInt(this.input1.toString()),parseInt(this.input2.toString()))
  }

  selectionChange(evt:any){
    this.selectedVl = evt.target.value;
  }
}
