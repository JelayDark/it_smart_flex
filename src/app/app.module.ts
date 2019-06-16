import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControllerComponent } from './components/controller/controller.component';
import { StopListComponent } from './components/stop-list/stop-list.component';
import { TimeFormatPipe } from './pipes/time-format/time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    StopListComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
