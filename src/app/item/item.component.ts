import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  @Input()
  name :string=""
  @Input()
  firstname :string=""
  @Input()
  image :string=""
  @Input()
  index:number=0

  @Output()
  changeItemIndex = new EventEmitter<number>()
  changeIndex() {
this.changeItemIndex.emit(this.index)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
