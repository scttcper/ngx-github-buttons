import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ButtonService } from '../button.service';
import { MdoCounterComponent } from './mdo-counter.component';
import { MdoGithubButtonComponent } from './mdo.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [MdoGithubButtonComponent],
  declarations: [MdoGithubButtonComponent, MdoCounterComponent],
  providers: [ButtonService],
})
export class MdoButtonModule { }
