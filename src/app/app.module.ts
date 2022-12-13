import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AntheUiModule } from '@kauelima21/anthe-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AntheUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
