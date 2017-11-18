import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NtkmeButtonComponent } from './ntkme.component';
import { NtkmeButtonService } from './ntkme.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [NtkmeButtonComponent],
  declarations: [NtkmeButtonComponent],
  providers: [NtkmeButtonService],
})
export class NtkmeButtonModule { }
