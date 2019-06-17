import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponentsModule } from './modules/layout-components.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './components/controller/controller.component';
import { StopListComponent } from './components/stop-list/stop-list.component';
import { TimeFormatPipe } from './pipes/time-format/time-format.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WatchesComponent } from './components/watches/watches.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    StopListComponent,
    TimeFormatPipe,
    WatchesComponent
  ],
  imports: [
    LayoutComponentsModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
