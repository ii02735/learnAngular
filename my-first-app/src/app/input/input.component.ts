import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  textValue: string = ""

  constructor() { }

  updateTextValue(event: Event) : void {
    this.textValue = (<HTMLInputElement>event.target).value;
  }

  getTextValue(): string {
    return "Current textValue value : " + this.textValue
  }

  ngOnInit(): void {
  }

}
