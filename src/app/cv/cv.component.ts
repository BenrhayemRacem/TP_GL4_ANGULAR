import { Component, OnInit } from '@angular/core';
import {cvList} from "./data";
import {IItem} from "../liste/item.interface";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  list=cvList ;
  index=0 ;
  singleCv:IItem = cvList[this.index];
  constructor() { }

  ngOnInit(): void {
  }

  changeCvIndex(newVal:number) {
    this.index = newVal
    this.singleCv = cvList[newVal]
  }

}
