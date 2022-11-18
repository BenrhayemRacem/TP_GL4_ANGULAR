import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbowSimulator]'
})
export class RainbowSimulatorDirective {

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
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keyup') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }
  constructor() { }

}
