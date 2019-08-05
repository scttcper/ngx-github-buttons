import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NtkmeCounterComponent } from './ntkme-counter.component';
import { NtkmeButtonComponent } from './ntkme.component';

@NgModule({
  imports: [CommonModule],
  exports: [NtkmeButtonComponent],
  declarations: [NtkmeButtonComponent, NtkmeCounterComponent],
})
export class NtkmeButtonModule {}
