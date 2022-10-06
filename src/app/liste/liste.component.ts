import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IItem} from "./item.interface";


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input()
  dataList :IItem[] = [];


  @Output()
  newChangeIndexEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  changeCurrentIndex (newVal:number) {
    this.newChangeIndexEvent.emit(newVal)
  }

}
