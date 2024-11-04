import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGoWild]',
  standalone: true
})
export class AppGoWildDirective implements OnInit {

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];
  
  @HostBinding('style.color') color!: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    //this.renderer.addClass(this.el.nativeElement, 'wild');
    //const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = "red";
   }

  ngOnInit(): void {
    //this.renderer.addClass(this.el.nativeElement, 'wild');
   //this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
   console.log("Hi from custom directive");
  //  const div = this.renderer.createElement('div');
  //  const text = this.renderer.createText('Hello world!');

  //  this.renderer.appendChild(div, text);
  //  this.renderer.appendChild(this.el.nativeElement, div);
  }

}
