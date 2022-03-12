import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { LocationCardModule } from '../location-card/location-card.module';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, LocationCardModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
