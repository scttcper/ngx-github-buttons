import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MdoButtonModule } from '../lib/mdo/mdo.module';
import { NtkmeButtonModule } from '../lib/ntkme/ntkme.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      { path: '', component: DemoComponent, pathMatch: 'full' },
    ]),
    FormsModule,
    MdoButtonModule,
    NtkmeButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
