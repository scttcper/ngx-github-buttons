import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MdoGithubButtonComponent } from './mdo.component';
import { MdoButtonService } from './mdo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [MdoGithubButtonComponent],
  declarations: [MdoGithubButtonComponent],
  providers: [MdoButtonService],
})
export class MdoButtonModule { }
