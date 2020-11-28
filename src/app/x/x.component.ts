import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {

  y : Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  createY(){
	this.y = true;
  }

}
