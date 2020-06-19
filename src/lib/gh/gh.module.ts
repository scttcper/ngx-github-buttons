import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GhCounterComponent } from './gh-counter.component';
import { GhButtonComponent } from './gh.component';

@NgModule({
  imports: [CommonModule],
  exports: [GhButtonComponent],
  declarations: [GhButtonComponent, GhCounterComponent],
})
export class GhButtonModule {}
