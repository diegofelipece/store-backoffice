import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreService } from './store.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [StoreService]
})
export class StoreModule { }
