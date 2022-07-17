import { Component } from "@angular/core";

@Component({
    selector: "[app-first-component]",
    templateUrl: "./first-component.component.html",
    styleUrls: []
})
export class FirstComponent {
    
    status: boolean = true;

    otherData: string = "hello world first component !"

    statusOutput(): string {

        return this.status ? "Value is true" : "Value is false"
    }
}