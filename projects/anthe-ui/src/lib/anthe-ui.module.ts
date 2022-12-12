import { NgModule } from '@angular/core';
import { AntheUiComponent } from './anthe-ui.component';
import { AntheButtonComponent } from './anthe-button/anthe-button.component';



@NgModule({
  declarations: [
    AntheUiComponent,
    AntheButtonComponent
  ],
  imports: [
  ],
  exports: [
    AntheUiComponent,
    AntheButtonComponent
  ]
})
export class AntheUiModule { }
