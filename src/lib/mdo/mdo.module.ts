import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MdoGithubButtonComponent } from './mdo.component';
import { ButtonService } from './mdo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [MdoGithubButtonComponent],
  declarations: [MdoGithubButtonComponent],
  providers: [ButtonService],
})
export class MdoButtonModule { }
