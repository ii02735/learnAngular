import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignement-databinding',
  templateUrl: './assignement-databinding.component.html',
  styleUrls: ['./assignement-databinding.component.css']
})
export class AssignementDatabindingComponent implements OnInit {

  username: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  resetProperty(): void {
    this.username = ""
  }

}
