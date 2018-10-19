import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MdoCounterComponent } from './mdo-counter.component';
import { MdoGithubButtonComponent } from './mdo.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [MdoGithubButtonComponent],
  declarations: [MdoGithubButtonComponent, MdoCounterComponent],
})
export class MdoButtonModule {}
