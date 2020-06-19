import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MdoButtonModule, NtkmeButtonModule, GhButtonModule } from '../lib/public_api';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DemoComponent },
      { path: '**', component: DemoComponent },
    ]),
    FormsModule,
    MdoButtonModule,
    NtkmeButtonModule,
    GhButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
