import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {

  firstName:string = ""
  lastName:string = ""
  image:string = "candidate.png"
  job:string = ""
  quote:string = ""
  keyWords:string = ""
  jobDescription:string=""
  rotate:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  setRotate(b:boolean) {
    this.rotate=b
  }


}
