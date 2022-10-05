import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent implements OnInit {
  color='transparent'
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    return this.color
  }
  setColor(newColor:string) {
    this.color = newColor
  }


}
