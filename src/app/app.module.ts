import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [AppComponent, DragDropComponent],
  imports: [BrowserModule, FormsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
