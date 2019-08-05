import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MdoCounterComponent } from './mdo-counter.component';
import { MdoGithubButtonComponent } from './mdo.component';

@NgModule({
  imports: [CommonModule],
  exports: [MdoGithubButtonComponent],
  declarations: [MdoGithubButtonComponent, MdoCounterComponent],
})
export class MdoButtonModule {}
