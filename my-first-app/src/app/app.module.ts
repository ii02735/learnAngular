import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { AssignementDatabindingComponent } from './assignement-databinding/assignement-databinding.component';
import { AssignementDirectivesComponent } from './assignement-directives/assignement-directives.component';
import { AssignementPropertyEventCustomBindingComponent } from './assignement-property-event-custom-binding/assignement-property-event-custom-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    InputComponent,
    AssignementDatabindingComponent,
    AssignementDirectivesComponent,
    AssignementPropertyEventCustomBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
