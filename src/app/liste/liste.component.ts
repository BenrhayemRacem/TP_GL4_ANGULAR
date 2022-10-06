import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "./item.interface";


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input()
  dataList :IItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
