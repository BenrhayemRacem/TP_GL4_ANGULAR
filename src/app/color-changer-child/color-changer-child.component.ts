import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-changer-child',
  templateUrl: './color-changer-child.component.html',
  styleUrls: ['./color-changer-child.component.css']
})
export class ColorChangerChildComponent implements OnInit {

  @Input()
  parentColor:string =""

  @Output()
  newItemEvent = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  changeFavColor(newValue:string) {
    this.newItemEvent.emit(newValue)
  }


}
