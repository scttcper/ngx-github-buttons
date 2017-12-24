import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ButtonService } from '../button.service';
import { NtkmeCounterComponent } from './ntkme-counter.component';
import { NtkmeButtonComponent } from './ntkme.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [NtkmeButtonComponent],
  declarations: [NtkmeButtonComponent, NtkmeCounterComponent],
  providers: [ButtonService],
})
export class NtkmeButtonModule { }
