import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NtkmeCounterComponent } from './ntkme-counter.component';
import { NtkmeButtonComponent } from './ntkme.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [NtkmeButtonComponent],
  declarations: [NtkmeButtonComponent, NtkmeCounterComponent],
})
export class NtkmeButtonModule {}
