import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignement-directives',
  templateUrl: './assignement-directives.component.html',
  styleUrls: ['./assignement-directives.component.css']
})
export class AssignementDirectivesComponent implements OnInit {

  arrayLogClicks: string[] = [];
  showParagraph: boolean;

  constructor() {
    this.showParagraph = false;
   }

  switchDisplay() {
    this.showParagraph = !this.showParagraph;
    this.arrayLogClicks.push("Click n°"+(this.arrayLogClicks.length + 1));
  } 

  changeAfterIndex(index:number):boolean {
    return index > 3;
  }

  changeBackground(index:number):string {
    return this.changeAfterIndex(index) ? 'darkblue' : 'initial'
  }

  changeTextColor(index:number):string {
    return this.changeAfterIndex(index) ? 'color' : 'initial'
  }

  ngOnInit(): void {
  }

}
