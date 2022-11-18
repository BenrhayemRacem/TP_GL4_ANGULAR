import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {

  myColor:string = "#000000"
  mySize:string = "18"
  myFont:string = "cursive"


  constructor() { }

  ngOnInit(): void {
  }


  setColor(value:string) {
    this.myColor = value
  }

  setSize(value:string) {
    this.mySize = value
  }
  setFont(value:string) {
    this.myFont = value
  }

}
