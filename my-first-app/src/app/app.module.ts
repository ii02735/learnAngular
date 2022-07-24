import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { AssignementDatabindingComponent } from './assignement-databinding/assignement-databinding.component';
import { AssignementDirectivesComponent } from './assignement-directives/assignement-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    InputComponent,
    AssignementDatabindingComponent,
    AssignementDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
