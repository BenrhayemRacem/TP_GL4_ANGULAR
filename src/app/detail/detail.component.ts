import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "../liste/item.interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input()
  singleItem:IItem = {
    id:0,
    name:"",
    firstname :"",
    job:"",
    cin:"",
    path:"",
    age:""
  } ;

  constructor() { }

  ngOnInit(): void {
  }

}
