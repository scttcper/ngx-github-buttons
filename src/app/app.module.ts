import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MdoButtonModule } from '../lib/mdo/mdo.module';
import { NtkmeButtonModule } from '../lib/ntkme/ntkme.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdoButtonModule,
    NtkmeButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
