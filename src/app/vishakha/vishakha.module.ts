import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VishakhaRoutingModule } from './vishakha-routing.module';
import { TestVComponent } from './test-v/test-v.component';


@NgModule({
  declarations: [TestVComponent],
  imports: [
    CommonModule,
    VishakhaRoutingModule
  ]
})
export class VishakhaModule { }

