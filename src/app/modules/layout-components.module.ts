import { NgModule } from '@angular/core';
import {
  MatListModule, MatButtonModule, MatCardModule,
  MatButtonToggleModule, MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
})
export class LayoutComponentsModule { }
