import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  allowedAction: boolean = false;
  isLogged: boolean = false;


  constructor() {
    // Après 4 secondes, on change la valeur de la propriété
    // Et donc le COMPORTEMENT du bouton derrière, ce dernier 
    // comportant une property-binding sur cet attribut, pour disabled
    setTimeout(() => { this.allowedAction = true },4000)
  }

  onClickLoginButton() {
    this.isLogged = true;
  }

  returnLoggedStatus() {
    return this.isLogged ? "user is logged !" : "user is not logged"
  }

  ngOnInit(): void {
  }

}
