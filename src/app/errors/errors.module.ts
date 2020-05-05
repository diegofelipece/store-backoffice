import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ErrorsModule { }
